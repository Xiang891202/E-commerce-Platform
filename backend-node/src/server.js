/**
 * 伺服器啟動點
 * 責任：啟動HTTP伺服器，監聽指定埠號
 * 符合單一責任：只負責啟動伺服器，不包含業務邏輯
 */
const app = require('./app');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`伺服器已啟動：http://localhost:${PORT}`);
  console.log(`可用API：
  GET /api/products
  GET /api/products/:id
  GET /health`);
});