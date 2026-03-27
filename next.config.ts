import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Avoid server-side fetching of remote images at request time.
    // This prevents ECONNRESET noise from external image hosts in `next start`.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
