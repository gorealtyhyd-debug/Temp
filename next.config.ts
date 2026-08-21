import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.srmoe.com",
      },
      {
        protocol: "http",
        hostname: "www.srmoe.com",
      },
    ],
  },
};

export default nextConfig;
