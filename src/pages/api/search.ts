import type { APIRoute } from 'astro';
import { getSession } from 'auth-astro/server';
import { getGoogleToken } from '../../lib/googleAuth';
import { checkRateLimit, type KVStore } from '../../lib/rateLimit';

interface DriveLocals {
  runtime?: {
    env?: {
      GOOGLE_DRIVE_PRIVATE_KEY?: string;
      GOOGLE_DRIVE_CLIENT_EMAIL?: string;
      CRAE_KV?: KVStore;
    };
  };
}

export const GET: APIRoute = async (context) => {
  const { request, url } = context;

  // 1. Autenticación
  const session = await getSession(request);
  if (!session?.user?.email) {
    return new Response(JSON.stringify({ error: 'No autorizado' }), { status: 401 });
  }

  // 2. Validación del query — mín. 3 chars, máx. 100 chars (antes de tocar KV o Drive)
  const queryTrimmed = (url.searchParams.get('q') ?? '').trim();
  if (queryTrimmed.length < 3 || queryTrimmed.length > 100) {
    return new Response(JSON.stringify([]), { status: 200 });
  }

  const runtimeEnv = (context.locals as DriveLocals).runtime?.env;

  // 3. Rate limiting: 20 búsquedas por minuto por usuario
  const rl = await checkRateLimit(runtimeEnv?.CRAE_KV, session.user.email, 'search', 20, 60);
  if (!rl.allowed) {
    return new Response(
      JSON.stringify({ error: 'Demasiadas búsquedas. Espera un momento antes de continuar.' }),
      {
        status: 429,
        headers: {
          'Content-Type': 'application/json',
          'Retry-After': String(rl.retryAfterSeconds),
        },
      },
    );
  }

  try {
    const rawPrivateKey = runtimeEnv?.GOOGLE_DRIVE_PRIVATE_KEY ?? import.meta.env.GOOGLE_DRIVE_PRIVATE_KEY;
    const clientEmail   = runtimeEnv?.GOOGLE_DRIVE_CLIENT_EMAIL  ?? import.meta.env.GOOGLE_DRIVE_CLIENT_EMAIL;

    if (!rawPrivateKey || !clientEmail) {
      throw new Error('Credenciales de Google Drive no configuradas.');
    }

    const accessToken = await getGoogleToken(rawPrivateKey, clientEmail);

    const safeQuery = queryTrimmed.replace(/'/g, "\\'");
    const driveQuery = `name contains '${safeQuery}' and trashed = false`;
    const driveUrl = `https://www.googleapis.com/drive/v3/files?q=${encodeURIComponent(driveQuery)}&fields=files(id,name,mimeType,size)&pageSize=6`;

    const driveReq = await fetch(driveUrl, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    if (!driveReq.ok) throw new Error('Error al consultar la API de Google Drive.');

    const driveData = await driveReq.json();
    return new Response(JSON.stringify(driveData.files ?? []), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'private, max-age=10',
        'X-RateLimit-Remaining': String(rl.remaining),
      },
    });

  } catch (error) {
    console.error('Error en Buscador Edge:', error instanceof Error ? error.message : 'error desconocido');
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
};
