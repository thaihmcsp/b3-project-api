const { getLogedInCart } = require('../controllers/cartController');
const { checkLogin } = require('../middlewares/auth');
const router = require('express').Router();

router.get('/get-loged-in-cart', checkLogin, getLogedInCart);

module.exports = router;