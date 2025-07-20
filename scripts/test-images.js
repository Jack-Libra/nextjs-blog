#!/usr/bin/env node

/**
 * 測試腳本：檢查部署後的圖片是否能正常載入
 * 使用方法：node scripts/test-images.js [base-url]
 * 例如：node scripts/test-images.js https://jack-libra.github.io/nextjs-blog
 */

const https = require('https');
const http = require('http');
const { URL } = require('url');

// 需要測試的圖片路徑
const imagePaths = [
  '/images/logo.png',
  '/images/github-icon.png',
  '/images/Medium-Icon-Black.png',
  '/images/ecommerce-preview.png'
];

// 從命令行參數獲取基礎URL，默認為GitHub Pages URL
const baseUrl = process.argv[2] || 'https://jack-libra.github.io/nextjs-blog';

console.log(`🔍 測試圖片載入 - 基礎URL: ${baseUrl}`);
console.log('=' .repeat(60));

/**
 * 檢查單個圖片是否可以載入
 */
function checkImage(imagePath) {
  return new Promise((resolve) => {
    const fullUrl = `${baseUrl}${imagePath}`;
    const url = new URL(fullUrl);
    const client = url.protocol === 'https:' ? https : http;
    
    const req = client.request(url, (res) => {
      const status = res.statusCode;
      const contentType = res.headers['content-type'] || '';
      
      if (status === 200 && contentType.startsWith('image/')) {
        console.log(`✅ ${imagePath} - OK (${status}, ${contentType})`);
        resolve({ path: imagePath, success: true, status, contentType });
      } else {
        console.log(`❌ ${imagePath} - FAIL (${status}, ${contentType})`);
        resolve({ path: imagePath, success: false, status, contentType });
      }
    });
    
    req.on('error', (error) => {
      console.log(`❌ ${imagePath} - ERROR: ${error.message}`);
      resolve({ path: imagePath, success: false, error: error.message });
    });
    
    req.setTimeout(10000, () => {
      console.log(`❌ ${imagePath} - TIMEOUT`);
      req.destroy();
      resolve({ path: imagePath, success: false, error: 'Timeout' });
    });
    
    req.end();
  });
}

/**
 * 主測試函數
 */
async function testAllImages() {
  const results = [];
  
  for (const imagePath of imagePaths) {
    const result = await checkImage(imagePath);
    results.push(result);
  }
  
  console.log('\n' + '=' .repeat(60));
  console.log('📊 測試結果摘要:');
  
  const successful = results.filter(r => r.success).length;
  const total = results.length;
  
  console.log(`✅ 成功: ${successful}/${total}`);
  console.log(`❌ 失敗: ${total - successful}/${total}`);
  
  if (successful === total) {
    console.log('\n🎉 所有圖片都可以正常載入！');
    process.exit(0);
  } else {
    console.log('\n⚠️  部分圖片載入失敗，請檢查部署配置。');
    process.exit(1);
  }
}

// 執行測試
testAllImages().catch(console.error);
