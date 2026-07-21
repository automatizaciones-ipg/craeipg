import type { KVStore } from './rateLimit';

/**
 * Store en memoria que reemplaza a Cloudflare KV en el despliegue Node (Hostinger).
 *
 * - Rate limiting: Map con TTL, misma interfaz KVStore que consumía checkRateLimit.
 *   Al correr en un único proceso Node, el contador es exacto (desaparece la
 *   race condition TOCTOU que existía con KV distribuido).
 * - Logs de auditoría: buffer acotado a MAX_LOGS entradas (decisión aceptada:
 *   los logs se pierden en cada reinicio/redeploy).
 */

const MAX_LOGS = 500;

interface Entry {
  value: string;
  expiresAt: number | null;
}

const rateLimitEntries = new Map<string, Entry>();

function purgeExpired(): void {
  const now = Date.now();
  for (const [key, entry] of rateLimitEntries) {
    if (entry.expiresAt !== null && entry.expiresAt <= now) {
      rateLimitEntries.delete(key);
    }
  }
}

export const memoryKV: KVStore = {
  async get(key: string): Promise<string | null> {
    const entry = rateLimitEntries.get(key);
    if (!entry) return null;
    if (entry.expiresAt !== null && entry.expiresAt <= Date.now()) {
      rateLimitEntries.delete(key);
      return null;
    }
    return entry.value;
  },
  async put(key: string, value: string, options?: { expirationTtl?: number }): Promise<void> {
    // Purga oportunista para que las claves de ventanas pasadas no se acumulen
    if (rateLimitEntries.size > 1000) purgeExpired();
    rateLimitEntries.set(key, {
      value,
      expiresAt: options?.expirationTtl ? Date.now() + options.expirationTtl * 1000 : null,
    });
  },
};

export interface DownloadLog {
  email: string;
  name: string;
  fileName: string;
  timestamp: string;
  fileId: string;
}

const downloadLogs: DownloadLog[] = [];

export function addDownloadLog(log: DownloadLog): void {
  downloadLogs.unshift(log);
  if (downloadLogs.length > MAX_LOGS) downloadLogs.length = MAX_LOGS;
}

export function getDownloadLogs(limit = 50): DownloadLog[] {
  return downloadLogs.slice(0, limit);
}
