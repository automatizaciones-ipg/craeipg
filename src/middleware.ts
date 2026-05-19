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
  // Moldeamos 'context.locals' de forma segura bajo la interfaz de Cloudflare
  const locals = context.locals as CloudflareRuntime;
  const runtimeEnv = locals.runtime?.env;

  if (runtimeEnv) {
    // Transformamos globalThis estructuralmente sin usar la palabra 'any'
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
      const session = await getSession(context.request);
      if (session?.user?.email) {
        return context.redirect("/inicio");
      }
    }
    return next();
  }

  const session = await getSession(context.request);
  const email = session?.user?.email?.toLowerCase();

  const allowedDomains = ["@ipg.cl", "@alumnos.ipg.cl"];
  const hasValidSession = session && email && allowedDomains.some(domain => email.endsWith(domain));

  if (!hasValidSession) {
    return context.redirect("/");
  }

  return next();
});