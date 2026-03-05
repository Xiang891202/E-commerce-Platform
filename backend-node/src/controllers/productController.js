/**
 * 產品控制器
 * 責任：處理HTTP請求與回應，解析輸入，呼叫服務層，設定HTTP狀態碼與回應主體
 * 符合單一責任：只處理HTTP層面，不包含業務邏輯或資料存取
 */
const productService = require('../services/productService');
const { successResponse } = require('../utils/responseHelper');
const { asyncHandler } = require('../middleware/errorMiddleware'); // 引入 asyncHandler

/**
 * GET /api/products
 * @param {Object} req - Express請求物件
 * @param {Object} res - Express回應物件
 */

const getProducts = async (req, res, next) => {
  asyncHandler(async () => {
     const products = await productService.getAllProducts();
     successResponse(res, products);
  }).catch(next); // 捕获 asyncHandler 中的错误并传递给错误处理中间件
};

/**
 * GET /api/products/:id
 * @param {Object} req - Express請求物件
 * @param {Object} res - Express回應物件
 */


// 非同步處理 回傳給 errorMiddleware.js
const getProductById = async (req, res, next) => {
  // 驗證ID參數（基本驗證，實際可根據需求加強）
  const productId = Number(req.params.id);
  if (isNaN(productId) || productId <= 0) {
    const err = new Error('產品ID必須為正整數');
    err.statusCode = 400;
    throw err;  // 直接拋出，asyncHandler 會捕獲
  }
  const data = await productService.getProductById(productId);
  successResponse(res, data);
};

module.exports = { getProducts, getProductById };