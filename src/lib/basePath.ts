import { siteUrl } from "@/lib/site";

/** Segmento del repo en GitHub Pages (sin slashes). Vacío en dominio raíz / Vercel. */
const segment = (process.env.NEXT_PUBLIC_BASE_PATH ?? "")
  .trim()
  .replace(/^\/+|\/+$/g, "");

/** Prefija rutas absolutas de `public/` cuando hay subruta (p. ej. /inalfu2006). */
export function withBasePath(path: string): string {
  if (!path.startsWith("/") || !segment) return path;
  return `/${segment}${path}`;
}

/** URL absoluta a un archivo en `public/` (metadatos, JSON-LD). */
export function absolutePublicAsset(path: string): string {
  const base = siteUrl.endsWith("/") ? siteUrl : `${siteUrl}/`;
  return new URL(withBasePath(path), base).href;
}
