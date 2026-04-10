import type { NextConfig } from "next";

/** Sin slash inicial/final; p. ej. inalfu2006 para https://usuario.github.io/inalfu2006/ */
const rawBase = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").trim();
const basePath = rawBase ? `/${rawBase.replace(/^\/+|\/+$/g, "")}` : "";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  ...(basePath
    ? {
        basePath,
        assetPrefix: basePath,
        trailingSlash: true,
      }
    : {}),
};

export default nextConfig;
