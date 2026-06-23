import type { APIRoute } from 'astro';
import { getSession } from 'auth-astro/server';

interface CloudflareEnv {
  MOODLE_PASSWORD?: string;
  EMAIL_PASSWORD?: string;
}

interface AppLocals {
  runtime?: { env?: CloudflareEnv };
}

export const GET: APIRoute = async (context) => {
  const { request, locals } = context;

  const session = await getSession(request);
  if (!session?.user?.email) {
    return new Response(JSON.stringify({ error: 'No autorizado' }), { status: 401 });
  }

  const runtimeEnv = (locals as AppLocals).runtime?.env;
  const moodlePassword = runtimeEnv?.MOODLE_PASSWORD ?? import.meta.env.MOODLE_PASSWORD ?? 'ipg.2025';
  const emailPassword  = runtimeEnv?.EMAIL_PASSWORD  ?? import.meta.env.EMAIL_PASSWORD  ?? 'alumnos.2026';

  const credentials = {
    moodle: {
      password: moodlePassword,
      note: 'Clave estándar de acceso inicial a la plataforma',
    },
    correo: {
      password: emailPassword,
      note: 'Google solicitará cambio de contraseña en el primer ingreso',
    },
  };

  return new Response(JSON.stringify(credentials), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'private, max-age=300',
    },
  });
};
