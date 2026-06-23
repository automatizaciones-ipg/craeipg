import { getSession } from "auth-astro/server";
import { defineMiddleware } from "astro:middleware";

interface CloudflareRuntime {
  runtime?: {
    env: Record<string, string>;
  };
}

interface GlobalWithProcess {
  process?: {
    env: Record<string, string>;
  };
}

// Content Security Policy — ajustado a las dependencias reales del sistema.
// unsafe-inline en script-src: necesario para los islands de Astro (hidratación inline).
// unsafe-inline en style-src: necesario para los estilos inline de Framer Motion y Tailwind.
const CSP = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://accounts.google.com",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com",
  "img-src 'self' data: https://*.googleusercontent.com",
  "connect-src 'self'",
  "frame-src https://drive.google.com",
  "frame-ancestors 'none'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self' https://accounts.google.com",
].join('; ');

/**
 * Añade los headers de seguridad a cualquier respuesta sin tocar el body.
 * Pasar response.body como ReadableStream mantiene el streaming de descargas intacto.
 * En desarrollo se omite CSP para evitar interferencias con el HMR de Astro.
 */
function withSecurityHeaders(response: Response, isDev: boolean): Response {
  if (isDev) return response;

  const headers = new Headers(response.headers);
  headers.set('Content-Security-Policy', CSP);
  headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
  headers.set('X-Content-Type-Options', 'nosniff');
  headers.set('X-Frame-Options', 'DENY');
  headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

export const onRequest = defineMiddleware(async (context, next) => {
  const isDev = import.meta.env.DEV;

  const locals = context.locals as CloudflareRuntime;
  const runtimeEnv = locals.runtime?.env;

  // Inyecta el entorno de Cloudflare en process.env para que las librerías
  // que usan process.env (admins.ts, platform-info.ts) puedan leerlo en runtime.
  if (runtimeEnv && !isDev) {
    const globalRef = globalThis as unknown as GlobalWithProcess;
    globalRef.process = globalRef.process || { env: {} };
    globalRef.process.env = { ...globalRef.process.env, ...runtimeEnv };
  }

  const pathname = context.url.pathname;

  const isPublicRoute =
    pathname === '/' ||
    pathname.startsWith('/_astro') ||
    pathname.startsWith('/api/auth') ||
    pathname.includes('favicon.svg');

  let response: Response;

  if (isPublicRoute) {
    if (pathname === '/') {
      if (isDev) {
        response = context.redirect('/inicio');
      } else {
        const session = await getSession(context.request);
        response = session?.user?.email
          ? context.redirect('/inicio')
          : await next();
      }
    } else {
      response = await next();
    }
  } else if (isDev) {
    response = await next();
  } else {
    const session = await getSession(context.request);
    const email = session?.user?.email?.toLowerCase();
    const allowedDomains = ['@ipg.cl', '@alumnos.ipg.cl'];
    const hasValidSession =
      session && email && allowedDomains.some((d) => email.endsWith(d));

    response = hasValidSession ? await next() : context.redirect('/');
  }

  return withSecurityHeaders(response, isDev);
});
