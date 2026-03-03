/**
 * 產品資料模型
 * 責任：定義產品結構，提供資料存取方法（目前使用記憶體陣列模擬）
 * 符合單一責任：只處理資料層操作，不涉及業務邏輯或HTTP
 */

// 模擬資料庫中的產品資料
const products = [
  { id: 1, name: '無線滑鼠', price: 599, stock: 20 },
  { id: 2, name: '機械鍵盤', price: 1999, stock: 10 },
  { id: 3, name: 'HDMI 線', price: 299, stock: 50 }
];

/**
 * 取得所有產品
 * @returns {Array} 產品陣列
 */
const findAll = () => {
  return products;
};

/**
 * 依ID查詢產品
 * @param {number} id - 產品ID
 * @returns {Object|undefined} 產品物件，若不存在則回傳 undefined
 */
const findById = (id) => {
  return products.find(product => product.id === id);
};

module.exports = { findAll, findById };