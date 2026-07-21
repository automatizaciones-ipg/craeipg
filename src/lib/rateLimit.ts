export interface KVStore {
  get(key: string): Promise<string | null>;
  put(key: string, value: string, options?: { expirationTtl?: number }): Promise<void>;
}

interface RateLimitResult {
  allowed: boolean;
  remaining: number;
  retryAfterSeconds: number;
}

/**
 * Rate limiter basado en ventana fija sobre un KVStore
 * (en producción Node: memoryStore en memoria del proceso).
 * Si el store no está disponible, siempre permite.
 *
 * @param kv         - Implementación de KVStore
 * @param identifier - Identificador único (email del usuario)
 * @param endpoint   - Nombre corto del endpoint ("search" | "download")
 * @param limit      - Máximo de requests permitidos en la ventana
 * @param windowSecs - Duración de la ventana en segundos
 */
export async function checkRateLimit(
  kv: KVStore | null | undefined,
  identifier: string,
  endpoint: string,
  limit: number,
  windowSecs: number,
): Promise<RateLimitResult> {
  if (!kv) {
    return { allowed: true, remaining: limit, retryAfterSeconds: 0 };
  }

  const slot = Math.floor(Date.now() / (windowSecs * 1000));
  const key = `rl:${endpoint}:${identifier}:${slot}`;

  const stored = await kv.get(key);
  // || 0 convierte NaN (dato corrupto en KV) a 0 en lugar de silenciar el rate limit
  const count = Math.max(0, parseInt(stored ?? '0', 10) || 0);

  if (count >= limit) {
    const elapsedMs = Date.now() % (windowSecs * 1000);
    return {
      allowed: false,
      remaining: 0,
      retryAfterSeconds: Math.ceil((windowSecs * 1000 - elapsedMs) / 1000),
    };
  }

  await kv.put(key, String(count + 1), { expirationTtl: windowSecs * 2 });
  return { allowed: true, remaining: limit - count - 1, retryAfterSeconds: 0 };
}
