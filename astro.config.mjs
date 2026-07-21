// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import node from '@astrojs/node';
import auth from 'auth-astro';

// https://astro.build/config
export default defineConfig({
  output: 'server', // <-- CLAVE: Habilita el renderizado en el servidor
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [react(), auth()],
  // standalone: genera dist/server/entry.mjs con servidor HTTP propio.
  // Hostinger define HOST/PORT vía variables de entorno.
  adapter: node({ mode: 'standalone' })
});