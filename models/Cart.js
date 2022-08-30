const mongoose = require('mongoose');

const CartSchema = mongoose.Schema({
    userId: {type: String, ref: 'users', required: true},
    listProduct:[{ 
        productDetailId: {type: String, ref: 'productDetails'},  
        quantity: Number,
        select: {type: Boolean, default: false}
    }]
},{timestamps: true, collection: 'carts'});

const Cart = mongoose.model('carts', CartSchema);

module.exports = Cart;