import type { APIRoute } from 'astro';
import { getSession } from 'auth-astro/server';

const PLATFORM_CREDENTIALS = {
  moodle: {
    password: 'ipg.2025',
    note: 'Clave estándar de acceso inicial a la plataforma'
  },
  correo: {
    password: 'alumnos.2026',
    note: 'Google solicitará cambio de contraseña en el primer ingreso'
  }
} as const;

export const GET: APIRoute = async ({ request }) => {
  const session = await getSession(request);
  if (!session?.user?.email) {
    return new Response(JSON.stringify({ error: 'No autorizado' }), { status: 401 });
  }

  return new Response(JSON.stringify(PLATFORM_CREDENTIALS), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'private, max-age=300'
    }
  });
};
