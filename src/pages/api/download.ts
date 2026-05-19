import type { APIRoute } from 'astro';
import { getSession } from 'auth-astro/server';
import { SignJWT, importPKCS8 } from 'jose';

// ==========================================
// 1. DECLARACIONES DE TIPOS ESTRICTOS
// ==========================================

// Extendemos globalThis para el caché de desarrollo local
declare global {
  var LOCAL_LOGS_CACHE: Array<Record<string, string | null | undefined>> | undefined;
}

// Tipamos el entorno de Cloudflare y sus variables
interface CloudflareEnv {
  GOOGLE_DRIVE_PRIVATE_KEY?: string;
  GOOGLE_DRIVE_CLIENT_EMAIL?: string;
  CRAE_KV?: {
    put: (key: string, value: string) => Promise<void>;
  };
}

// Tipamos los locals de Astro
interface AppLocals {
  runtime?: {
    env?: CloudflareEnv;
  };
}

// Inicializamos el caché global si no existe
globalThis.LOCAL_LOGS_CACHE = globalThis.LOCAL_LOGS_CACHE || [];

// ==========================================
// 2. ENDPOINT DE DESCARGA
// ==========================================

export const GET: APIRoute = async (context) => {
  const { request, url, locals } = context;

  // CONTROL DE ACCESO INTERNO
  const session = await getSession(request);
  if (!session || !session.user?.email) {
    return new Response('Acceso no autorizado. Inicie sesión con su correo institucional.', { status: 401 });
  }

  // EXTRAER ID DEL RECURSO
  const fileId = url.searchParams.get('id');
  if (!fileId) {
    return new Response('Error: Falta el identificador del archivo (ID).', { status: 400 });
  }

  try {
    // EXTRACCIÓN DE CREDENCIALES SEGURO (Con Casting Tipado Estrictamente)
    const runtimeEnv = (locals as AppLocals).runtime?.env;
    
    const rawPrivateKey = runtimeEnv?.GOOGLE_DRIVE_PRIVATE_KEY || import.meta.env.GOOGLE_DRIVE_PRIVATE_KEY;
    const clientEmail = runtimeEnv?.GOOGLE_DRIVE_CLIENT_EMAIL || import.meta.env.GOOGLE_DRIVE_CLIENT_EMAIL;

    if (!rawPrivateKey || !clientEmail) {
      throw new Error("Credenciales de Google Drive no configuradas en el entorno.");
    }

    const privateKeyEnv = rawPrivateKey.replace(/\\n/g, '\n');
    const privateKey = await importPKCS8(privateKeyEnv, 'RS256');
    
    const jwt = await new SignJWT({
      iss: clientEmail,
      scope: 'https://www.googleapis.com/auth/drive.readonly',
      aud: 'https://oauth2.googleapis.com/token',
    })
      .setProtectedHeader({ alg: 'RS256', typ: 'JWT' })
      .setIssuedAt()
      .setExpirationTime('5m') 
      .sign(privateKey);

    const tokenReq = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${jwt}`
    });
    
    const tokenRes = await tokenReq.json();
    if (!tokenRes.access_token) {
      console.error("Respuesta de Google:", tokenRes);
      throw new Error("Google rechazó la firma del Service Account.");
    }
    const accessToken = tokenRes.access_token;

    const metaReq = await fetch(`https://www.googleapis.com/drive/v3/files/${fileId}?fields=name,mimeType`, {
      headers: { Authorization: `Bearer ${accessToken}` }
    });
    
    if (!metaReq.ok) {
      return new Response('El archivo solicitado no existe en Drive o el Robot no tiene permisos.', { status: 404 });
    }
    const meta = await metaReq.json();

    const fileReq = await fetch(`https://www.googleapis.com/drive/v3/files/${fileId}?alt=media`, {
      headers: { Authorization: `Bearer ${accessToken}` }
    });

    if (!fileReq.ok || !fileReq.body) {
      throw new Error("No se pudo inicializar la descarga binaria desde Google Drive.");
    }

    // ==========================================
    // 3. CAPA DE AUDITORÍA: REGISTRO DE LOGS
    // ==========================================
    const logData = {
      email: session.user.email,
      name: session.user.name || 'Alumno IPG',
      fileName: meta.name || 'Archivo Desconocido',
      timestamp: new Date().toISOString(),
      fileId: fileId
    };

    const KV = runtimeEnv?.CRAE_KV;
    if (KV) {
      const logKey = `download_log:${Date.now()}:${session.user.email}`;
      await KV.put(logKey, JSON.stringify(logData));
    } else {
      if (globalThis.LOCAL_LOGS_CACHE) {
        globalThis.LOCAL_LOGS_CACHE.unshift(logData);
      }
    }
    // ==========================================

    return new Response(fileReq.body, {
      status: 200,
      headers: {
        'Content-Type': meta.mimeType || 'application/octet-stream',
        'Content-Disposition': `attachment; filename="${encodeURIComponent(meta.name || 'archivo_crae')}"`,
        'Cache-Control': 'no-store, max-age=0'
      }
    });

  } catch (error) {
    console.error('Error crítico en el Motor de Descargas Edge:', error);
    return new Response('Error interno del servidor al procesar la descarga segura.', { status: 500 });
  }
};