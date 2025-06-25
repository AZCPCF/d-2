import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.d2collection.com",
        pathname: "/uploads/*",
      },
    ],
  },
};


export default nextConfig;
