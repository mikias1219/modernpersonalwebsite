import type { NextConfig } from "next";

/** Canonical origin (no trailing slash). Matches lib/site.ts default when env unset. */
const siteOrigin = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://mikiasabatesite.vercel.app"
).replace(/\/$/, "");

/** Old Vercel hostnames that should 301 to the current production URL (when traffic still hits this app). */
const legacyVercelHosts = ["website-sigma-azure-nb9kb6fh0z.vercel.app"];

const nextConfig: NextConfig = {
  output: "standalone",
  poweredByHeader: false,
  compress: true,
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return legacyVercelHosts.map((host) => ({
      source: "/:path*",
      has: [{ type: "host" as const, value: host }],
      destination: `${siteOrigin}/:path*`,
      permanent: true,
    }));
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
