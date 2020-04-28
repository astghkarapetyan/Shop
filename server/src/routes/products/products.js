const express = require('express');
const router = new express.Router();
const { upload } = require('../../helpers/index');

const { allProducts,
    allProductsById,
    productById,
    addProduct,
    allCategories,
    deleteProductById } = require('./requestFunctions');

router.get('/all-products', allProducts );
router.get('/all-products/:id',allProductsById);
router.get('/product/:id',productById);
router.post('/add-product',upload.array('images',(req)=>req.files.length),addProduct);
router.get('/all-categories',allCategories);
router.get('/delete/:id',deleteProductById );

module.exports = router;