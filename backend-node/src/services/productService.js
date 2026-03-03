/**
 * 產品服務層
 * 責任：封裝產品相關業務邏輯，呼叫資料模型層
 * 符合單一責任：只專注於業務邏輯處理，不處理HTTP細節
 */
const productModel = require('../models/productModel');

/**
 * 取得所有產品（未來可加入排序、過濾等邏輯）
 * @returns {Array} 產品列表
 */
const getAllProducts = () => {
  // 目前直接回傳所有產品，無額外邏輯
  return productModel.findAll();
};

/**
 * 依ID取得產品
 * @param {number} id - 產品ID
 * @returns {Object|null} 產品物件，若不存在則回傳 null
 */
const getProductById = (id) => {
  const product = productModel.findById(id);
  // 若找不到產品，回傳 null 讓控制器處理404
  return product || null;
};

module.exports = { getAllProducts, getProductById };