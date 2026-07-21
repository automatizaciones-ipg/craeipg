/**
 * Devuelve true si el email tiene privilegios de administrador.
 *
 * Lee la variable ADMIN_EMAILS (lista separada por comas) en runtime para
 * permitir rotación de personal sin redeploy. Fuentes en orden de prioridad:
 *   1. import.meta.env.ADMIN_EMAILS   → dev (.env local)
 *   2. process.env.ADMIN_EMAILS       → producción (variable de entorno en Hostinger)
 *   3. Fallback hardcodeado           → seguridad en caso de que aún no esté configurado el secret
 */
export function isAdmin(email: string): boolean {
  const raw: string =
    import.meta.env.ADMIN_EMAILS ??
    (typeof process !== 'undefined' ? process.env?.ADMIN_EMAILS : undefined) ??
    '';

  if (raw.trim()) {
    return raw
      .split(',')
      .map((e: string) => e.trim().toLowerCase())
      .includes(email.toLowerCase());
  }

  return email.toLowerCase() === 'luis.rivera@ipg.cl';
}
