import type { APIRoute } from 'astro';
import { getSession } from 'auth-astro/server';
import { isAdmin } from '../../../lib/admins';

declare global {
  var LOCAL_LOGS_CACHE: Array<Record<string, string | null | undefined>> | undefined;
}

interface CloudflareEnv {
  CRAE_KV?: {
    list: (options: { prefix: string; limit: number }) => Promise<{ keys: Array<{ name: string }> }>;
    get: (key: string) => Promise<string | null>;
  };
}

interface AppLocals {
  runtime?: { env?: CloudflareEnv };
}

export const GET: APIRoute = async (context) => {
  const { request, locals } = context;

  // 1. Autenticación
  const session = await getSession(request);
  if (!session?.user?.email) {
    return new Response(JSON.stringify({ error: 'No autorizado' }), { status: 401 });
  }

  // 2. Autorización — solo admins
  if (!isAdmin(session.user.email)) {
    return new Response(
      JSON.stringify({ error: 'Acceso denegado: Privilegios de administrador insuficientes.' }),
      { status: 403 },
    );
  }

  try {
    const runtimeEnv = (locals as AppLocals).runtime?.env;
    const KV = runtimeEnv?.CRAE_KV;

    let logs: Array<Record<string, string | null | undefined>> = [];

    if (KV) {
      const list = await KV.list({ prefix: 'download_log:', limit: 50 });

      // Promise.all en lugar de await secuencial — reduce latencia de ~50 round-trips a 1
      const kvValues = await Promise.all(list.keys.map(k => KV.get(k.name)));

      for (const val of kvValues) {
        if (!val) continue;
        try {
          logs.push(JSON.parse(val));
        } catch {
          // Registro KV corrupto — se omite sin romper el resto de la respuesta
        }
      }
    } else {
      logs = globalThis.LOCAL_LOGS_CACHE || [];
    }

    return new Response(JSON.stringify(logs), {
      status: 200,
      headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
    });

  } catch (error) {
    console.error('Error cargando logs de auditoría:', error instanceof Error ? error.message : 'error desconocido');
    return new Response(JSON.stringify({ error: 'Error interno del servidor' }), { status: 500 });
  }
};
