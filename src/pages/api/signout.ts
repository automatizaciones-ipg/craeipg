import type { APIRoute } from 'astro';

/**
 * Endpoint server-side de cierre de sesión.
 * Limpia TODAS las cookies de auth posibles (auth-astro v4 / @auth/core)
 * sin depender del fetch JS del cliente, eliminando cualquier race condition.
 *
 * Rutas que llaman aquí: Header.tsx (GET redirect), y como fallback del signOut() JS.
 */

const EXPIRED = 'Thu, 01 Jan 1970 00:00:00 GMT';

// Nombres de cookies usados por @auth/core 0.34 / auth-astro 4
// Variante sin __Secure- para HTTP (dev) y con __Secure- para HTTPS (prod)
const COOKIE_NAMES = [
  'authjs.session-token',
  'authjs.csrf-token',
  'authjs.callback-url',
  '__Secure-authjs.session-token',
  '__Secure-authjs.csrf-token',
  '__Secure-authjs.callback-url',
  '__Host-authjs.csrf-token',
];

function buildClearHeaders(isSecure: boolean): Headers {
  const headers = new Headers();
  headers.set('Location', '/');
  headers.set('Cache-Control', 'no-store, private');

  for (const name of COOKIE_NAMES) {
    // Limpieza base (HTTP + HTTPS)
    headers.append(
      'Set-Cookie',
      `${name}=; Path=/; Expires=${EXPIRED}; HttpOnly; SameSite=Lax`,
    );
    // Limpieza adicional con atributo Secure (por si el browser la guardó así)
    if (isSecure) {
      headers.append(
        'Set-Cookie',
        `${name}=; Path=/; Expires=${EXPIRED}; HttpOnly; SameSite=Lax; Secure`,
      );
    }
  }

  return headers;
}

const handler: APIRoute = ({ request }) => {
  const isSecure = request.url.startsWith('https://');
  return new Response(null, {
    status: 302,
    headers: buildClearHeaders(isSecure),
  });
};

// Acepta GET (navegación directa) y POST (fetch desde JS)
export const GET  = handler;
export const POST = handler;
