import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isProd ? '/nextjs-blog' : '',
  assetPrefix: isProd ? '/nextjs-blog' : '',
  images: {
    unoptimized: true, // GitHub Pages 不支援 next/image 最佳化
  },
  trailingSlash: true,
};

export default nextConfig;
