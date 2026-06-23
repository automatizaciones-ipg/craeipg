import type { APIRoute } from 'astro';
import { getSession } from 'auth-astro/server';
import { checkRateLimit, type KVStore } from '../../lib/rateLimit';

interface CloudflareEnv {
  MOODLE_PASSWORD?: string;
  EMAIL_PASSWORD?: string;
  CRAE_KV?: KVStore;
}

interface AppLocals {
  runtime?: { env?: CloudflareEnv };
}

const ALLOWED_DOMAINS = ['@ipg.cl', '@alumnos.ipg.cl'];

export const GET: APIRoute = async (context) => {
  const { request, locals } = context;

  // 1. Autenticación
  const session = await getSession(request);
  if (!session?.user?.email) {
    return new Response(JSON.stringify({ error: 'No autorizado' }), { status: 401 });
  }

  // 2. Validación de dominio institucional — defensa en profundidad independiente del middleware
  const email = session.user.email.toLowerCase();
  if (!ALLOWED_DOMAINS.some(d => email.endsWith(d))) {
    return new Response(JSON.stringify({ error: 'Dominio no autorizado' }), { status: 403 });
  }

  const runtimeEnv = (locals as AppLocals).runtime?.env;

  // 3. Rate limiting: 5 requests por minuto — endpoint de credenciales, umbral conservador
  const rl = await checkRateLimit(runtimeEnv?.CRAE_KV, email, 'platform-info', 5, 60);
  if (!rl.allowed) {
    return new Response(
      JSON.stringify({ error: 'Demasiadas solicitudes. Espera un momento.' }),
      { status: 429, headers: { 'Content-Type': 'application/json', 'Retry-After': String(rl.retryAfterSeconds) } },
    );
  }

  const moodlePassword = runtimeEnv?.MOODLE_PASSWORD ?? import.meta.env.MOODLE_PASSWORD ?? 'ipg.2025';
  const emailPassword  = runtimeEnv?.EMAIL_PASSWORD  ?? import.meta.env.EMAIL_PASSWORD  ?? 'alumnos.2026';

  return new Response(
    JSON.stringify({
      moodle: { password: moodlePassword, note: 'Clave estándar de acceso inicial a la plataforma' },
      correo: { password: emailPassword,  note: 'Google solicitará cambio de contraseña en el primer ingreso' },
    }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        // no-store: las credenciales nunca deben ser cacheadas por el navegador
        'Cache-Control': 'no-store',
      },
    },
  );
};
