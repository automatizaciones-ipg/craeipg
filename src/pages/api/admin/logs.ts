import type { APIRoute } from 'astro';
import { getSession } from 'auth-astro/server';
import { isAdmin } from '../../../lib/admins';
import { getDownloadLogs } from '../../../lib/memoryStore';

export const GET: APIRoute = async (context) => {
  const { request } = context;

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
    const logs = getDownloadLogs(50);

    return new Response(JSON.stringify(logs), {
      status: 200,
      headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
    });

  } catch (error) {
    console.error('Error cargando logs de auditoría:', error instanceof Error ? error.message : 'error desconocido');
    return new Response(JSON.stringify({ error: 'Error interno del servidor' }), { status: 500 });
  }
};
