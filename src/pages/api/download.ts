import type { APIRoute } from 'astro';
import { getSession } from 'auth-astro/server';
import { SignJWT, importPKCS8 } from 'jose';
import { checkRateLimit, type KVStore } from '../../lib/rateLimit';

declare global {
  var LOCAL_LOGS_CACHE: Array<Record<string, string | null | undefined>> | undefined;
}

interface CloudflareEnv {
  GOOGLE_DRIVE_PRIVATE_KEY?: string;
  GOOGLE_DRIVE_CLIENT_EMAIL?: string;
  CRAE_KV?: KVStore & {
    put(key: string, value: string): Promise<void>;
  };
}

interface AppLocals {
  runtime?: { env?: CloudflareEnv };
}

globalThis.LOCAL_LOGS_CACHE = globalThis.LOCAL_LOGS_CACHE || [];

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
  const { request, url, locals } = context;

  // 1. Autenticación
  const session = await getSession(request);
  if (!session?.user?.email) {
    return new Response('Acceso no autorizado. Inicie sesión con su correo institucional.', { status: 401 });
  }

  const fileId = url.searchParams.get('id');
  if (!fileId) {
    return new Response('Error: Falta el identificador del archivo (ID).', { status: 400 });
  }

  const runtimeEnv = (locals as AppLocals).runtime?.env;

  // 2. Rate limiting: 10 descargas por minuto por usuario
  const rl = await checkRateLimit(runtimeEnv?.CRAE_KV, session.user.email, 'download', 10, 60);
  if (!rl.allowed) {
    return new Response(
      'Límite de descargas alcanzado. Espera un momento antes de intentarlo de nuevo.',
      {
        status: 429,
        headers: { 'Retry-After': String(rl.retryAfterSeconds) },
      },
    );
  }

  try {
    const rawPrivateKey = runtimeEnv?.GOOGLE_DRIVE_PRIVATE_KEY ?? import.meta.env.GOOGLE_DRIVE_PRIVATE_KEY;
    const clientEmail   = runtimeEnv?.GOOGLE_DRIVE_CLIENT_EMAIL  ?? import.meta.env.GOOGLE_DRIVE_CLIENT_EMAIL;

    if (!rawPrivateKey || !clientEmail) {
      throw new Error('Credenciales de Google Drive no configuradas en el entorno.');
    }

    const accessToken = await getGoogleToken(rawPrivateKey, clientEmail);

    const metaReq = await fetch(
      `https://www.googleapis.com/drive/v3/files/${fileId}?fields=name,mimeType`,
      { headers: { Authorization: `Bearer ${accessToken}` } }
    );
    if (!metaReq.ok) {
      return new Response('El archivo solicitado no existe en Drive o el Robot no tiene permisos.', { status: 404 });
    }
    const meta = await metaReq.json();

    const fileReq = await fetch(
      `https://www.googleapis.com/drive/v3/files/${fileId}?alt=media`,
      { headers: { Authorization: `Bearer ${accessToken}` } }
    );
    if (!fileReq.ok || !fileReq.body) {
      throw new Error('No se pudo inicializar la descarga binaria desde Google Drive.');
    }

    const logData = {
      email: session.user.email,
      name: session.user.name ?? 'Alumno IPG',
      fileName: meta.name ?? 'Archivo Desconocido',
      timestamp: new Date().toISOString(),
      fileId,
    };

    const KV = runtimeEnv?.CRAE_KV;
    if (KV) {
      await KV.put(`download_log:${Date.now()}:${session.user.email}`, JSON.stringify(logData));
    } else {
      globalThis.LOCAL_LOGS_CACHE?.unshift(logData);
    }

    return new Response(fileReq.body, {
      status: 200,
      headers: {
        'Content-Type': meta.mimeType ?? 'application/octet-stream',
        'Content-Disposition': `attachment; filename="${encodeURIComponent(meta.name ?? 'archivo_crae')}"`,
        'Cache-Control': 'no-store, max-age=0',
      },
    });

  } catch (error) {
    console.error('Error en el Motor de Descargas Edge:', error);
    return new Response('Error interno del servidor al procesar la descarga segura.', { status: 500 });
  }
};
