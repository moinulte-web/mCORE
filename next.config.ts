import type { NextConfig } from "next";

/**
 * mCORE Next.js configuration.
 *
 * Kept intentionally minimal at project initialization.
 * Add domain-specific config (image domains, redirects, headers)
 * only through approved engineering tasks.
 */
const nextConfig: NextConfig = {
  reactStrictMode: true,

  // Supabase Storage will serve images from a project-specific subdomain.
  // Populate this once the Supabase project is provisioned (CORE-00X).
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.supabase.co",
      },
    ],
  },

  experimental: {
    typedRoutes: true,
  },
};

export default nextConfig;
