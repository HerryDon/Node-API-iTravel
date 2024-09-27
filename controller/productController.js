const mongoose = require("mongoose");
const express = require("express");
const { Product } = require("../model/productModel");

//Adding a product
const addProduct = async (req, res) => {
  try {
    const { name, price, colour } = req.body;
    const product = await Product.create({
      name,
      price,
      colour,
    });
    if (product) {
      res.status(200).json(product);
      console.log(product);
    } else {
      res.status(500).json({ message: "Error creating product" });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { addProduct };
