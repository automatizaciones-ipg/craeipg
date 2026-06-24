import Google from "@auth/core/providers/google";
import { defineConfig } from "auth-astro";

export default defineConfig({
  providers: [
    Google({
      clientId: import.meta.env.GOOGLE_CLIENT_ID as string,
      clientSecret: import.meta.env.GOOGLE_CLIENT_SECRET as string,
      authorization: { params: { prompt: "select_account" } }
    }),
  ],
  trustHost: true,
  secret: import.meta.env.AUTH_SECRET,
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