const mongoose = require('mongoose');

const ProductDetailSchema = mongoose.Schema({
    productId: {type: String, ref: 'products', required: true},
    color: {type: String},
    ram: String,
    rom: String,
    storage: Number,
    price: {type: Number, required: true},
    listImg: [{type: String}],
    status:	{type: String, enum: ['disable', 'enable'], default: 'disable'}
}, {timestamps: true, collection: 'productDetails'});

const productDetail = mongoose.model('productDetails', ProductDetailSchema);

module.exports = productDetail;