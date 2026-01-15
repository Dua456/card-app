import express from 'express';
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  createProductReview,
  getTopProducts,
} from '../controllers/productController.js';

const router = express.Router();

// @desc    Routes for products
// @route   GET/POST /api/products
router.route('/').get(getProducts).post(createProduct);

// @desc    Routes for single product
// @route   GET/PUT/DELETE /api/products/:id
router.route('/:id').get(getProductById).put(updateProduct).delete(deleteProduct);

// @desc    Routes for product reviews
// @route   POST /api/products/:id/reviews
router.route('/:id/reviews').post(createProductReview);

// @desc    Route for top-rated products
// @route   GET /api/products/top
router.route('/top').get(getTopProducts);

export default router;