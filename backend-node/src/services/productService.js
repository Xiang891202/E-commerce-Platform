/**
 * 產品服務層
 * 責任：封裝產品相關業務邏輯，呼叫資料模型層
 * 符合單一責任：只專注於業務邏輯處理，不處理HTTP細節
 */
const productModel = require('../models/productModel');

/**
 * 取得所有產品（未來可加入排序、過濾等邏輯）
 * @returns {Promise<Array>} 產品列表
 */
const getAllProducts = async () => {
  // 直接回傳所有產品，無額外邏輯；使用 await 等待結果（或直接回傳 Promise）
  return await productModel.findAll();
};

/**
 * 依ID取得產品
 * @param {number} id - 產品ID
 * @returns {Promise<Object>} 產品物件
 * @throws {Error} 當產品不存在時拋出帶有 statusCode 的錯誤
 */
const getProductById = async (id) => {
  // 呼叫 Model 層取得產品（假設 findById 回傳 product 或 null）
  const product = await productModel.findById(id);
  if (!product) {
    const error = new Error('Product not found');
    error.statusCode = 404;
    throw error; // 拋出錯誤，由 Controller 捕獲並傳遞給錯誤處理中介軟體
  }
  return product;
};

module.exports = {
  getAllProducts,
  getProductById,
};