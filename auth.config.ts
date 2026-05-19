import Google from "@auth/core/providers/google";
import { defineConfig } from "auth-astro";

export default defineConfig({
  providers: [
    Google({
      clientId: import.meta.env.GOOGLE_CLIENT_ID,
      clientSecret: import.meta.env.GOOGLE_CLIENT_SECRET,
      authorization: { params: { prompt: "select_account" } }
    }),
  ],
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