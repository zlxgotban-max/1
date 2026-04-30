import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configuração básica para otimização do Next.js
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
};

export default nextConfig;
