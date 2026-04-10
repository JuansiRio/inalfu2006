import { siteUrl } from "@/lib/site";

/**
 * Igual que en next.config: solo GitHub Pages / subruta en build de producción.
 * En `next dev` siempre vacío → la app vive en http://localhost:3000/ (no /inalfu2006).
 */
const segment = (process.env.NEXT_PUBLIC_SITE_BASE_PATH ?? "")
  .trim()
  .replace(/^\/+|\/+$/g, "");
const isDev = process.env.NODE_ENV === "development";

/** Prefija rutas de `public/` cuando el sitio se publica bajo una subruta. */
export function withBasePath(path: string): string {
  if (!path.startsWith("/") || !segment || isDev) return path;
  return `/${segment}${path}`;
}

/** URL absoluta a un archivo en `public/` (metadatos, JSON-LD). */
export function absolutePublicAsset(path: string): string {
  const base = siteUrl.endsWith("/") ? siteUrl : `${siteUrl}/`;
  return new URL(withBasePath(path), base).href;
}
