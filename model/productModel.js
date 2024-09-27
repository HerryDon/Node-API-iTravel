const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  price: {
    type: Number,
  },
  colour: {
    type: String,
  },
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = {
  Product,
};
