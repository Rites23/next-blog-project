import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "images.unsplash.com",
        port: "",
        protocol: "https",
      },
      {
        hostname: "avatars.githubusercontent.com",
        port: "",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
