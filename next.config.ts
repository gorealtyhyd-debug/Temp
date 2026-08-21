import type { NextConfig } from "next";
import path from "node:path";

const extraOrigins =
  process.env.ALLOWED_DEV_ORIGINS?.split(",")
    .map((origin) => origin.trim())
    .filter(Boolean) ?? [];

const nextConfig: NextConfig = {
  // Allow opening the dev server from this PC's LAN IP (phone / other devices).
  allowedDevOrigins: ["localhost", "127.0.0.1", "192.168.13.97", ...extraOrigins],
  // Keep Turbopack rooted on this app, not a parent folder that has bun.lock.
  turbopack: {
    root: path.resolve(__dirname),
  },
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
