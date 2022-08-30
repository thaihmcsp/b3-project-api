const { changePassword } = require('../controllers/userController');
const { checkLogin } = require('../middlewares/auth');
const router = require('express').Router();

router.patch('/change-password', checkLogin, changePassword);

module.exports = router;