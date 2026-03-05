/**
 * Express應用程式設定
 * 責任：建立Express實例，註冊全域中介軟體，掛載所有路由
 * 符合單一責任：只負責應用程式的初始化與設定
 */
const express = require('express');
const productRoutes = require('./routes/productRoutes');
const { errorMiddleware } = require('./middleware/errorMiddleware');

const app = express();

// 解析JSON請求主體（全域中介軟體）
app.use(express.json());

// 掛載產品相關路由，前綴 /api/products
app.use('/api/products', productRoutes);

// 全域錯誤處理中間件，應放在所有路由之後，確保能捕獲所有錯誤
app.use(errorMiddleware); 

// 健康檢查端點（可選）
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', timestamp: new Date().toISOString() });
});

module.exports = app;