import { getSession } from "auth-astro/server";
import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (context, next) => {
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