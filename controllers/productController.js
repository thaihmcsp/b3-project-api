const Product = require("../models/Product");
const ProductDetail = require("../models/ProductDetail");

exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find().populate('listDtail.productDetails').populate('categoryId');
        res.status(200).json({products})
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'server error', error})
    }
}

exports.createProduct = async (req, res ) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json({product});
    } catch (error) {
        res.status(500).json({message: 'server error', error});
    }
}

exports.getOneProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.productId).populate('listDtail.productDetails').populate('categoryId');
        res.status(200).json({product});
    } catch (error) {
        res.status(500).json({message: 'server error', error});
    }
}