import Google from "@auth/core/providers/google";
import { defineConfig } from "auth-astro";

// 🛠️ Parche de Precisión: Le dice a TypeScript que 'process' existirá en vivo
declare const process: any;

export default defineConfig({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: { params: { prompt: "select_account" } }
    }),
  ],
  trustHost: true,
  secret: process.env.AUTH_SECRET,
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