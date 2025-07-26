import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
    ],
  },
  env: {
    BUSINESS_EMAIL: process.env.BUSINESS_EMAIL,
    BUSINESS_EMAIL_PASS: process.env.BUSINESS_EMAIL_PASS,
  },
};

export default nextConfig;
