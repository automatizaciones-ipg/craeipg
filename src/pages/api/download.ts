import type { APIRoute } from 'astro';
import { getSession } from 'auth-astro/server';
import { getGoogleToken } from '../../lib/googleAuth';
import { checkRateLimit } from '../../lib/rateLimit';
import { memoryKV, addDownloadLog } from '../../lib/memoryStore';

export const GET: APIRoute = async (context) => {
  const { request, url } = context;

  // 1. Autenticación
  const session = await getSession(request);
  if (!session?.user?.email) {
    return new Response('Acceso no autorizado. Inicie sesión con su correo institucional.', { status: 401 });
  }

  // 2. Validación del fileId — Google Drive IDs: alfanumérico + guión + guión bajo, 25-50 chars
  const fileId = url.searchParams.get('id');
  if (!fileId || !/^[A-Za-z0-9_-]{25,50}$/.test(fileId)) {
    return new Response('Error: Identificador de archivo inválido.', { status: 400 });
  }

  // 3. Rate limiting: 10 descargas por minuto por usuario
  const rl = await checkRateLimit(memoryKV, session.user.email, 'download', 10, 60);
  if (!rl.allowed) {
    return new Response(
      'Límite de descargas alcanzado. Espera un momento antes de intentarlo de nuevo.',
      { status: 429, headers: { 'Retry-After': String(rl.retryAfterSeconds) } },
    );
  }

  try {
    const rawPrivateKey = process.env.GOOGLE_DRIVE_PRIVATE_KEY ?? import.meta.env.GOOGLE_DRIVE_PRIVATE_KEY;
    const clientEmail   = process.env.GOOGLE_DRIVE_CLIENT_EMAIL  ?? import.meta.env.GOOGLE_DRIVE_CLIENT_EMAIL;

    if (!rawPrivateKey || !clientEmail) {
      throw new Error('Credenciales de Google Drive no configuradas en el entorno.');
    }

    const accessToken = await getGoogleToken(rawPrivateKey, clientEmail);

    const metaReq = await fetch(
      `https://www.googleapis.com/drive/v3/files/${fileId}?fields=name,mimeType`,
      { headers: { Authorization: `Bearer ${accessToken}` } },
    );
    if (!metaReq.ok) {
      return new Response('El archivo solicitado no existe en Drive o el Robot no tiene permisos.', { status: 404 });
    }
    const meta = await metaReq.json();

    const fileReq = await fetch(
      `https://www.googleapis.com/drive/v3/files/${fileId}?alt=media`,
      { headers: { Authorization: `Bearer ${accessToken}` } },
    );
    if (!fileReq.ok || !fileReq.body) {
      throw new Error('No se pudo inicializar la descarga binaria desde Google Drive.');
    }

    // Auditoría de descarga (buffer en memoria, tope de 500 entradas)
    addDownloadLog({
      email: session.user.email,
      name: session.user.name ?? 'Alumno IPG',
      fileName: meta.name ?? 'Archivo Desconocido',
      timestamp: new Date().toISOString(),
      fileId,
    });

    // RFC 6266: filename* para soporte correcto de ñ, á, é en el nombre del archivo descargado
    const rawName = meta.name ?? 'archivo_crae';
    const asciiFallback = rawName.replace(/[^\x20-\x7E]/g, '_');
    const encodedName = encodeURIComponent(rawName);

    return new Response(fileReq.body, {
      status: 200,
      headers: {
        'Content-Type': meta.mimeType ?? 'application/octet-stream',
        'Content-Disposition': `attachment; filename="${asciiFallback}"; filename*=UTF-8''${encodedName}`,
        'Cache-Control': 'no-store',
      },
    });

  } catch (error) {
    console.error('Error en Motor de Descargas:', error instanceof Error ? error.message : 'error desconocido');
    return new Response('Error interno del servidor al procesar la descarga segura.', { status: 500 });
  }
};
