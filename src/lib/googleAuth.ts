import { SignJWT, importPKCS8 } from 'jose';

// Cache de token compartido entre search.ts y download.ts dentro del mismo Worker isolate.
// Al estar en un módulo independiente, ambos endpoints comparten una única entrada de caché,
// eliminando el doble fetch a Google OAuth cuando el mismo Worker atiende los dos endpoints.
let _tokenCache: { token: string; expiry: number } | null = null;

export async function getGoogleToken(
  privateKeyPem: string,
  clientEmail: string,
): Promise<string> {
  const now = Date.now();
  if (_tokenCache && now < _tokenCache.expiry) return _tokenCache.token;

  const privateKey = await importPKCS8(privateKeyPem.replace(/\\n/g, '\n'), 'RS256');

  const jwt = await new SignJWT({
    iss: clientEmail,
    scope: 'https://www.googleapis.com/auth/drive.readonly',
    aud: 'https://oauth2.googleapis.com/token',
  })
    .setProtectedHeader({ alg: 'RS256', typ: 'JWT' })
    .setIssuedAt()
    .setExpirationTime('1h')
    .sign(privateKey);

  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${jwt}`,
  });

  const data = await res.json();
  if (!data.access_token) throw new Error('Google rechazó el Service Account JWT.');

  _tokenCache = { token: data.access_token, expiry: now + 55 * 60 * 1000 };
  return _tokenCache.token;
}
