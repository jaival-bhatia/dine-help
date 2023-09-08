const express = require("express");
const Product = require("../models/Product");
const router = express.Router();
const {getAllProduct , getSpecific ,updateProduct, createProduct, deleteProduct} = require('../controller/product-controller')


// create product list 
router.post("/api/v1/product", createProduct );

// get product list
router.get("/api/v1/product", getAllProduct )

// get product from id
router.get("/api/v1/product/:id", getSpecific)

//update product 
router.put("/api/v1/product/:id", updateProduct)

//delte product
router.delete("/api/v1/product/:id", deleteProduct)
module.exports = router;