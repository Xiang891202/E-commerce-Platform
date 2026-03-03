/**
 * 產品控制器
 * 責任：處理HTTP請求與回應，解析輸入，呼叫服務層，設定HTTP狀態碼與回應主體
 * 符合單一責任：只處理HTTP層面，不包含業務邏輯或資料存取
 */
const productService = require('../services/productService');

/**
 * GET /api/products
 * @param {Object} req - Express請求物件
 * @param {Object} res - Express回應物件
 */
const getProducts = (req, res) => {
  const products = productService.getAllProducts();
  res.status(200).json(products);
};

/**
 * GET /api/products/:id
 * @param {Object} req - Express請求物件
 * @param {Object} res - Express回應物件
 */
const getProductById = (req, res) => {
  const id = parseInt(req.params.id, 10);

  // 驗證ID是否為有效數字
  if (isNaN(id) || id <= 0) {
    return res.status(400).json({ error: '產品ID必須為正整數' });
  }

  const product = productService.getProductById(id);

  if (!product) {
    return res.status(404).json({ error: '找不到該產品' });
  }

  res.status(200).json(product);
};

module.exports = { getProducts, getProductById };