const express = require('express');
const router = express.Router();
const { protect, authorize } = require('../middleware/auth');

// NOTE: Create controller/Productcontroller.js if it doesn't exist
// For now this file will let the server boot without errors
// Replace the placeholder functions below once you have the controller

let getProducts, getProduct, createProduct, updateProduct, deleteProduct;

try {
  ({
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct,
  } = require('../controller/Productcontroller'));
} catch (e) {
  // Placeholder until controller is created
  const placeholder = (req, res) =>
    res.status(501).json({ success: false, message: 'Product controller not implemented yet' });
  getProducts = getProduct = createProduct = updateProduct = deleteProduct = placeholder;
}

router.get('/', getProducts);
router.get('/:id', getProduct);
router.post('/', protect, authorize('admin'), createProduct);
router.put('/:id', protect, authorize('admin'), updateProduct);
router.delete('/:id', protect, authorize('admin'), deleteProduct);

module.exports = router;
