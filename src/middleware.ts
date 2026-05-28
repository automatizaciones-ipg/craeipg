import { getSession } from "auth-astro/server";
import { defineMiddleware } from "astro:middleware";

// 🛠️ Contratos de interfaz para satisfacer a TypeScript al 100%
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

export const onRequest = defineMiddleware(async (context, next) => {
  // 1. Detectamos si estamos en entorno de desarrollo local
  const isDev = import.meta.env.DEV;

  // Moldeamos 'context.locals' de forma segura bajo la interfaz de Cloudflare
  const locals = context.locals as CloudflareRuntime;
  const runtimeEnv = locals.runtime?.env;

  // 🛡️ SOLUCIÓN ROBUSTA: Solo mutamos globalThis si NO estamos en desarrollo.
  // Esto evita el error "poisoned stub" durante el Hot Refresh de Astro.
  if (runtimeEnv && !isDev) {
    const globalRef = globalThis as unknown as GlobalWithProcess;
    globalRef.process = globalRef.process || { env: {} };
    globalRef.process.env = { ...globalRef.process.env, ...runtimeEnv };
  }

  const { url } = context;
  const pathname = url.pathname;

  const isPublicRoute = 
    pathname === "/" || 
    pathname.startsWith("/_astro") || 
    pathname.startsWith("/api/auth") || 
    pathname.includes("favicon.svg");

  if (isPublicRoute) {
    if (pathname === "/") {
      // 2. Bypass en local para entrar directo al dashboard
      if (isDev) return context.redirect("/inicio");

      const session = await getSession(context.request);
      if (session?.user?.email) {
        return context.redirect("/inicio");
      }
    }
    return next();
  }

  // 3. Bypass Principal para dejar pasar HMR en rutas protegidas
  if (isDev) {
    return next();
  }

  // --- De aquí para abajo, código exclusivo de Producción ---
  const session = await getSession(context.request);
  const email = session?.user?.email?.toLowerCase();

  const allowedDomains = ["@ipg.cl", "@alumnos.ipg.cl"];
  const hasValidSession = session && email && allowedDomains.some(domain => email.endsWith(domain));

  if (!hasValidSession) {
    return context.redirect("/");
  }

  return next();
});