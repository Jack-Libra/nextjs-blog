/**
 * 工具函數：處理圖片路徑，確保在部署環境中正確添加basePath
 */

const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/nextjs-blog' : '';

/**
 * 為圖片路徑添加basePath前綴
 * @param imagePath - 圖片路徑，例如 "/images/logo.png"
 * @returns 完整的圖片路徑
 */
export function getImagePath(imagePath: string): string {
  // 如果路徑已經包含basePath，直接返回
  if (imagePath.startsWith(basePath)) {
    return imagePath;
  }
  
  // 確保路徑以 / 開頭
  const normalizedPath = imagePath.startsWith('/') ? imagePath : `/${imagePath}`;
  
  return `${basePath}${normalizedPath}`;
}

/**
 * 為內部連結添加basePath前綴
 * @param linkPath - 連結路徑，例如 "/projects"
 * @returns 完整的連結路徑
 */
export function getLinkPath(linkPath: string): string {
  // 如果路徑已經包含basePath，直接返回
  if (linkPath.startsWith(basePath)) {
    return linkPath;
  }
  
  // 確保路徑以 / 開頭
  const normalizedPath = linkPath.startsWith('/') ? linkPath : `/${linkPath}`;
  
  return `${basePath}${normalizedPath}`;
}
