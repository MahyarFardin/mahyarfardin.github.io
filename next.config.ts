import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/personal_page",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
