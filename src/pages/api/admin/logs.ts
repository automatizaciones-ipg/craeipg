import type { APIRoute } from 'astro';
import { getSession } from 'auth-astro/server';
import { ALLOWED_ADMINS } from '../../../lib/admins';

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
  runtime?: {
    env?: CloudflareEnv;
  };
}

export const GET: APIRoute = async (context) => {
  const { request, locals } = context;

  // 1. CONTROL DE AUTENTICACIÓN
  const session = await getSession(request);
  if (!session || !session.user?.email) {
    return new Response(JSON.stringify({ error: 'No autorizado' }), { status: 401 });
  }

  // 2. CONTROL DE AUTORIZACIÓN (Lista Blanca Estricta)
  if (!ALLOWED_ADMINS.includes(session.user.email)) {
    return new Response(
      JSON.stringify({ error: 'Acceso denegado: Privilegios de administrador insuficientes.' }), 
      { status: 403 }
    );
  }

  try {
    const runtimeEnv = (locals as AppLocals).runtime?.env;
    const KV = runtimeEnv?.CRAE_KV;

    let logs: Array<Record<string, string | null | undefined>> = [];

    if (KV) {
      const list = await KV.list({ prefix: 'download_log:', limit: 50 });
      for (const key of list.keys) {
        const val = await KV.get(key.name);
        if (val) logs.push(JSON.parse(val));
      }
    } else {
      logs = globalThis.LOCAL_LOGS_CACHE || [];
    }

    return new Response(JSON.stringify(logs), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Error cargando logs de auditoría:', error);
    return new Response(JSON.stringify({ error: 'Error interno del servidor' }), { status: 500 });
  }
};