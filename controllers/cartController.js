const Cart = require('../models/Cart');

exports.getLogedInCart = async (req, res) => {
    console.log(req.user);
}