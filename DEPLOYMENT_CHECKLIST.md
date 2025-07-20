# 部署檢查清單 - 圖片資源確認

## 🎯 問題解決

### 原始問題
在部署到GitHub Pages等需要basePath的環境時，圖片路徑缺少basePath前綴，導致圖片無法正常載入。

### 解決方案
1. **創建路徑工具函數** (`src/utils/paths.ts`)
   - `getImagePath()`: 為圖片路徑添加basePath前綴
   - `getLinkPath()`: 為內部連結添加basePath前綴

2. **更新Next.js配置** (`next.config.ts`)
   - 修正assetPrefix配置，移除尾部斜線
   - 添加trailingSlash配置

3. **更新所有圖片引用**
   - Header組件: ✅ 已更新
   - Sidebar組件: ✅ 已更新  
   - 主頁面: ✅ 已更新
   - Projects頁面: ✅ 已更新
   - Ecommerce-trend頁面: ✅ 已更新

## 🔍 部署前檢查

### 1. 本地構建測試
```bash
npm run build
```

### 2. 檢查生成的HTML文件
確認圖片路徑包含正確的basePath前綴：
```bash
# 檢查主頁面
grep -o 'src="/[^"]*images/[^"]*"' out/index.html

# 檢查專案頁面
grep -o 'src="/[^"]*images/[^"]*"' out/projects/index.html
```

### 3. 驗證圖片文件存在
```bash
ls -la out/images/
```

### 4. 測試圖片載入（部署後）
```bash
node scripts/test-images.js https://your-domain.github.io/nextjs-blog
```

## 📁 文件結構確認

### 構建輸出結構
```
out/
├── images/
│   ├── logo.png
│   ├── github-icon.png
│   ├── Medium-Icon-Black.png
│   └── ecommerce-preview.png
├── index.html
├── projects/
│   ├── index.html
│   └── ecommerce-trend/
│       └── index.html
└── _next/
    └── static/
```

### 圖片路徑映射
| 開發環境 | 生產環境 |
|---------|---------|
| `/images/logo.png` | `/nextjs-blog/images/logo.png` |
| `/images/github-icon.png` | `/nextjs-blog/images/github-icon.png` |
| `/images/Medium-Icon-Black.png` | `/nextjs-blog/images/Medium-Icon-Black.png` |
| `/images/ecommerce-preview.png` | `/nextjs-blog/images/ecommerce-preview.png` |

## 🚀 部署步驟

### GitHub Pages 部署
1. 確保repository設定正確
2. 推送代碼到main分支
3. GitHub Actions會自動構建和部署
4. 檢查部署狀態

### 手動部署驗證
```bash
# 1. 構建項目
npm run build

# 2. 檢查輸出文件
ls -la out/

# 3. 本地測試（可選）
npx serve out -p 3000

# 4. 部署後測試圖片載入
node scripts/test-images.js https://your-domain.github.io/nextjs-blog
```

## ✅ 驗證清單

- [ ] 本地構建成功
- [ ] 圖片文件正確複製到out/images/
- [ ] HTML中的圖片路徑包含basePath前綴
- [ ] 所有頁面的圖片路徑都已更新
- [ ] 部署後圖片可以正常載入
- [ ] 不同設備和瀏覽器測試通過

## 🔧 故障排除

### 圖片仍然無法載入
1. 檢查basePath配置是否正確
2. 確認圖片文件是否存在於out/images/目錄
3. 檢查服務器是否正確提供靜態文件
4. 驗證圖片路徑大小寫是否正確

### 開發環境圖片顯示異常
1. 確認public/images/目錄中有所需圖片
2. 檢查getImagePath函數是否正確處理開發環境路徑
3. 重啟開發服務器

## 📝 注意事項

1. **路徑一致性**: 確保所有圖片引用都使用getImagePath()函數
2. **大小寫敏感**: 某些部署環境對文件名大小寫敏感
3. **圖片優化**: 考慮使用Next.js的Image組件進行自動優化
4. **緩存問題**: 部署後如果圖片未更新，可能需要清除瀏覽器緩存
