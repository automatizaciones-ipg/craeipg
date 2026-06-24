import Google from "@auth/core/providers/google";
import { defineConfig } from "auth-astro";

export default defineConfig({
  // Getters: se evalúan en cada request, DESPUÉS de que el middleware
  // haya inyectado process.env desde los Cloudflare Worker secrets.
  // Fallback a import.meta.env para desarrollo local.
  get providers() {
    return [
      Google({
        clientId: (process.env.GOOGLE_CLIENT_ID ?? import.meta.env.GOOGLE_CLIENT_ID) as string,
        clientSecret: (process.env.GOOGLE_CLIENT_SECRET ?? import.meta.env.GOOGLE_CLIENT_SECRET) as string,
        authorization: { params: { prompt: "select_account" } },
      }),
    ];
  },
  trustHost: true,
  get secret() {
    return (process.env.AUTH_SECRET ?? import.meta.env.AUTH_SECRET) as string;
  },
  session: {
    maxAge: 8 * 60 * 60, // 8 horas fijas desde login, sin rolling
  },
  callbacks: {
    async signIn({ profile }) {
      if (!profile || !profile.email) return false;
      const email = profile.email.toLowerCase();
      const allowedDomains = ["@ipg.cl", "@alumnos.ipg.cl"];
      return allowedDomains.some(domain => email.endsWith(domain));
    },
    async session({ session, token }) {
      if (session.user && token.email) {
        session.user.email = token.email;
      }
      return session;
    }
  },
  pages: {
    signIn: "/", 
    error: "/",  
  }
});