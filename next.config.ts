import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  images: {
    unoptimized: true, // GitHub Pages 不支援 Next.js 圖片最佳化
  },
  basePath: '/nextjs-blog',      // 這裡必須和 GitHub repo 名稱相同
  assetPrefix: '/nextjs-blog/',  // 靜態資源路徑前綴
};

export default nextConfig;
