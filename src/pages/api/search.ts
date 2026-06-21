import type { APIRoute } from 'astro';
import { getSession } from 'auth-astro/server';
import { SignJWT, importPKCS8 } from 'jose';

export const GET: APIRoute = async (context) => {
  const { request, url } = context;

  // 1. FILTRO DE SEGURIDAD: Solo alumnos autenticados buscan
  const session = await getSession(request);
  if (!session || !session.user?.email) {
    return new Response(JSON.stringify({ error: 'No autorizado' }), { status: 401 });
  }

  // 2. CAPTURAR EL TÉRMINO DE BÚSQUEDA
  const queryParam = url.searchParams.get('q');
  if (!queryParam || queryParam.trim().length < 3) {
    return new Response(JSON.stringify([]), { status: 200 });
  }

  try {
    // 3. EXTRACCIÓN DE CREDENCIALES SEGURO (Híbrido)
    interface DriveLocals { runtime?: { env?: { GOOGLE_DRIVE_PRIVATE_KEY?: string; GOOGLE_DRIVE_CLIENT_EMAIL?: string } } }
    const runtimeEnv = (context.locals as DriveLocals).runtime?.env;
    const rawPrivateKey = runtimeEnv?.GOOGLE_DRIVE_PRIVATE_KEY || import.meta.env.GOOGLE_DRIVE_PRIVATE_KEY;
    const clientEmail = runtimeEnv?.GOOGLE_DRIVE_CLIENT_EMAIL || import.meta.env.GOOGLE_DRIVE_CLIENT_EMAIL;

    if (!rawPrivateKey || !clientEmail) {
      throw new Error("Credenciales de Google Drive no configuradas.");
    }

    const privateKeyEnv = rawPrivateKey.replace(/\\n/g, '\n');
    const privateKey = await importPKCS8(privateKeyEnv, 'RS256');

    // 4. GENERAR JWT PARA AUTHENTICACIÓN DE GOOGLE
    const jwt = await new SignJWT({
      iss: clientEmail,
      scope: 'https://www.googleapis.com/auth/drive.readonly',
      aud: 'https://oauth2.googleapis.com/token',
    })
      .setProtectedHeader({ alg: 'RS256', typ: 'JWT' })
      .setIssuedAt()
      .setExpirationTime('5m')
      .sign(privateKey);

    // 5. OBTENER ACCESS TOKEN
    const tokenReq = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${jwt}`
    });
    
    const tokenRes = await tokenReq.json();
    const accessToken = tokenRes.access_token;

    if (!accessToken) throw new Error("No se obtuvo el token de acceso de Google.");

    // 6. QUERY AVANZADA DE GOOGLE DRIVE (Filtrado por nombre, ignorando papelera)
    // El parámetro 'q' de Google Drive es muy potente. Escapamos las comillas simples por seguridad.
    const safeQuery = queryParam.replace(/'/g, "\\'");
    const driveQuery = `name contains '${safeQuery}' and trashed = false`;

    const driveUrl = `https://www.googleapis.com/drive/v3/files?q=${encodeURIComponent(driveQuery)}&fields=files(id,name,mimeType,size)&pageSize=6`;

    const driveReq = await fetch(driveUrl, {
      headers: { Authorization: `Bearer ${accessToken}` }
    });

    if (!driveReq.ok) {
      throw new Error("Error al consultar la API de Google Drive");
    }

    const driveData = await driveReq.json();
    
    // 7. DEVOLVER RESULTADOS LIMPIOS AL FRONTEND
    return new Response(JSON.stringify(driveData.files || []), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'private, max-age=10'
      }
    });

  } catch (error) {
    console.error('Error en Buscador Predictivo Edge:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
};