import { getSession } from "auth-astro/server";
import { defineMiddleware } from "astro:middleware";

interface CloudflareRuntime {
  runtime?: { env: Record<string, string> };
}
interface GlobalWithProcess {
  process?: { env: Record<string, string> };
}

const CSP = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://accounts.google.com",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com",
  "img-src 'self' data: https://*.googleusercontent.com https://ipg.cl https://*.ipg.cl",
  "connect-src 'self'",
  "frame-src https://drive.google.com",
  "frame-ancestors 'none'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self' https://accounts.google.com",
].join('; ');

/**
 * Añade security headers preservando correctamente los Set-Cookie headers
 * múltiples del signout/signin de auth-astro.
 *
 * CRÍTICO: new Headers(existingHeaders) puede colapsar Set-Cookie en algunos
 * entornos. Usamos headers.getAll('set-cookie') de la API de Cloudflare Workers
 * para extraerlos antes de construir la nueva respuesta y los re-inyectamos
 * con append para que lleguen como headers separados al browser.
 */
function withSecurityHeaders(response: Response, isDev: boolean): Response {
  // En dev omitimos CSP para no interferir con el HMR de Astro ni el OAuth localhost
  if (isDev) {
    // Aun en dev añadimos Cache-Control para evitar caching de respuestas auth
    const devHeaders = new Headers(response.headers);
    devHeaders.set('Cache-Control', 'no-store, private');
    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: devHeaders,
    });
  }

  // Extraer Set-Cookie ANTES de manipular headers
  // Cloudflare Workers expone headers.getAll() para Set-Cookie
  let setCookies: string[] = [];
  try {
    const headersWithGetAll = response.headers as Headers & { getAll?: (name: string) => string[] };
    if (typeof headersWithGetAll.getAll === 'function') {
      setCookies = headersWithGetAll.getAll('set-cookie');
    } else {
      // Fallback estándar (puede estar combinado, pero es lo que hay)
      const raw = response.headers.get('set-cookie');
      if (raw) setCookies = [raw];
    }
  } catch {
    const raw = response.headers.get('set-cookie');
    if (raw) setCookies = [raw];
  }

  const headers = new Headers(response.headers);

  headers.set('Content-Security-Policy', CSP);
  headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
  headers.set('X-Content-Type-Options', 'nosniff');
  headers.set('X-Frame-Options', 'DENY');
  headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  // No cachear NUNCA respuestas de rutas autenticadas ni redirects de auth
  headers.set('Cache-Control', 'no-store, private');

  // Re-inyectar Set-Cookie como headers independientes para que el browser
  // los procese correctamente (la especificación prohíbe combinar Set-Cookie)
  if (setCookies.length > 0) {
    headers.delete('set-cookie');
    for (const cookie of setCookies) {
      headers.append('set-cookie', cookie);
    }
  }

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

export const onRequest = defineMiddleware(async (context, next) => {
  const isDev = import.meta.env.DEV;

  // Inyectar Cloudflare secrets en process.env para librerías que lo usen
  const locals = context.locals as CloudflareRuntime;
  const runtimeEnv = locals.runtime?.env;
  if (runtimeEnv) {
    const globalRef = globalThis as unknown as GlobalWithProcess;
    globalRef.process = globalRef.process || { env: {} };
    globalRef.process.env = { ...globalRef.process.env, ...runtimeEnv };
  }

  const pathname = context.url.pathname;

  // ── CRÍTICO: /api/auth/* y /api/signout NO pasan por withSecurityHeaders ──
  // auth-astro emite múltiples Set-Cookie independientes en signout/signin.
  // Cualquier transformación de headers (incluida la nuestra) puede colapsar
  // esas cookies en una cadena y romper el borrado de sesión en el browser.
  const isAuthEndpoint =
    pathname.startsWith('/api/auth') || pathname === '/api/signout';
  if (isAuthEndpoint) {
    return next();
  }

  // Assets estáticos: pasar directo sin verificar sesión
  const isAsset =
    pathname.startsWith('/_astro') ||
    pathname.includes('favicon') ||
    pathname.startsWith('/public');
  if (isAsset) {
    return next();
  }

  const safeGetSession = async () => {
    try {
      return await getSession(context.request);
    } catch {
      return null;
    }
  };

  const ALLOWED_DOMAINS = ['@ipg.cl', '@alumnos.ipg.cl'];

  const isValidEmail = (email: string) =>
    ALLOWED_DOMAINS.some(d => email.endsWith(d));

  let response: Response;

  if (pathname === '/') {
    // Página de login: si ya tiene sesión válida → redirigir al home
    const session = await safeGetSession();
    const email = session?.user?.email?.toLowerCase() ?? '';
    const valid = isDev ? !!email : isValidEmail(email);

    response = valid ? context.redirect('/inicio') : await next();
  } else {
    // ── Rutas protegidas: sesión SIEMPRE verificada, en dev y prod ──────────
    // BUGFIX: el bypass isDev anterior causaba que localhost en incógnito
    // mostrara el dashboard sin sesión real → ahora se verifica en todos los entornos.
    const session = await safeGetSession();
    const email = session?.user?.email?.toLowerCase() ?? '';
    const valid = isDev ? !!email : isValidEmail(email);

    response = valid ? await next() : context.redirect('/');
  }

  return withSecurityHeaders(response, isDev);
});
