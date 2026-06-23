import type { APIRoute } from 'astro';
import { getSession } from 'auth-astro/server';
import { SignJWT, importPKCS8 } from 'jose';
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

// Cache de token a nivel de módulo (se reutiliza entre requests del mismo Worker)
let _tokenCache: { token: string; expiry: number } | null = null;

async function getGoogleToken(privateKeyPem: string, clientEmail: string): Promise<string> {
  const now = Date.now();
  if (_tokenCache && now < _tokenCache.expiry) return _tokenCache.token;

  const privateKey = await importPKCS8(privateKeyPem.replace(/\\n/g, '\n'), 'RS256');
  const jwt = await new SignJWT({
    iss: clientEmail,
    scope: 'https://www.googleapis.com/auth/drive.readonly',
    aud: 'https://oauth2.googleapis.com/token',
  })
    .setProtectedHeader({ alg: 'RS256', typ: 'JWT' })
    .setIssuedAt()
    .setExpirationTime('1h')
    .sign(privateKey);

  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${jwt}`,
  });
  const data = await res.json();
  if (!data.access_token) throw new Error('Google rechazó el Service Account JWT.');

  _tokenCache = { token: data.access_token, expiry: now + 55 * 60 * 1000 };
  return _tokenCache.token;
}

export const GET: APIRoute = async (context) => {
  const { request, url } = context;

  // 1. Autenticación
  const session = await getSession(request);
  if (!session?.user?.email) {
    return new Response(JSON.stringify({ error: 'No autorizado' }), { status: 401 });
  }

  // 2. Validación del query (antes del rate limit para no consumir cuota en queries vacíos)
  const queryParam = url.searchParams.get('q');
  if (!queryParam || queryParam.trim().length < 3) {
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

    const safeQuery = queryParam.replace(/'/g, "\\'");
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
    console.error('Error en Buscador Edge:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
};
