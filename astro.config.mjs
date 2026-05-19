// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import cloudflare from '@astrojs/cloudflare';

import auth from 'auth-astro';

// https://astro.build/config
export default defineConfig({
  output: 'server', // <-- CLAVE: Habilita el renderizado en el servidor
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [react(), auth()],
  adapter: cloudflare()
});