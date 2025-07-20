import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // 只在生產環境使用 export 和 basePath
  ...(process.env.NODE_ENV === 'production' && {
    output: 'export',
    basePath: '/nextjs-blog',
    assetPrefix: '/nextjs-blog/',
  }),
  images: {
    unoptimized: true, // GitHub Pages 不支援 Next.js 圖片最佳化
  },
};

export default nextConfig;
