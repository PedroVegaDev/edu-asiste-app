import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  redirects: async () => [
    {
      source: "/",
      destination: "/escanear-qr",
      permanent: true,
    },
  ],
};

export default nextConfig;
