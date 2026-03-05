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

const getProducts = async (req, res, next) => {
  try {
    const products = await productService.getAllProducts();
    res.status(200).json(products);
  } catch (err) {
    next(err); // 將錯誤傳遞給錯誤處理中間件
  }
};

/**
 * GET /api/products/:id
 * @param {Object} req - Express請求物件
 * @param {Object} res - Express回應物件
 */


// 非同步處理 回傳給 errorMiddleware.js
const getProductById = async (req, res, next) => {
  //將 id 轉為數字
  const productId = Number(req.params.id);
  try {
    if (isNaN(productId) || productId <= 0) {
      const err = new Error('產品ID必須為正整數')
      err.statusCode = 400
      throw err   // ← 同步 throw
    }
    // 直接 await 非同步結果，若有錯誤會被 catch 捕獲
    const data = await productService.getProductById(productId)  // ← 直接 await 非同步結果
    res.json(data)

  } catch (err) {
    next(err)  // ← 一樣丟給 middleware
  }
}

module.exports = { getProducts, getProductById };