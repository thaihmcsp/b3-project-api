const { getAllProducts, createProduct, getOneProduct } = require('../controllers/productController');
const { checkLogin, checkAdmin } = require('../middlewares/auth');
const router = require('express').Router();

router.get('/get-all-products', getAllProducts);
router.get('/get-one-product/:productId', getOneProduct);
router.post('/create-product', checkLogin, checkAdmin, createProduct);

module.exports = router;