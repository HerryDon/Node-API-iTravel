const express = require("express");
const { addProduct } = require("../controller/productController");

const router = express.Router();
router.use(express.json());

//allowing url encoding
router.use(express.urlencoded({ extended: false }));

//Adding a product
router.post("/addproduct", addProduct)


module.exports = router;