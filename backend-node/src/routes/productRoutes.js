/**
 * 產品路由
 * 責任：定義API端點與HTTP方法，並將端點對應至控制器方法
 * 符合單一責任：只負責路由映射，不處理請求/回應細節
 */
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// GET /api/products
router.get('/', productController.getProducts);

// GET /api/products/:id
router.get('/:id', productController.getProductById);

module.exports = router;