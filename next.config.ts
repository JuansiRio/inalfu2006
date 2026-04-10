import type { NextConfig } from "next";

/**
 * Solo para export estático en subruta (p. ej. GitHub Pages: /inalfu2006).
 * Definir en CI (ver workflow). NO lo pongas en .env local: en desarrollo debe estar vacío.
 */
const raw = (process.env.NEXT_PUBLIC_SITE_BASE_PATH ?? "").trim();
const segment = raw.replace(/^\/+|\/+$/g, "");
const isDev = process.env.NODE_ENV === "development";
const basePath = !isDev && segment ? `/${segment}` : "";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  ...(basePath ? { basePath, trailingSlash: true } : {}),
};

export default nextConfig;
