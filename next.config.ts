import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.d2collection.com",
        pathname: "/uploads/*",
      },
      {
        protocol: "https",
        hostname: "trustseal.enamad.ir",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
