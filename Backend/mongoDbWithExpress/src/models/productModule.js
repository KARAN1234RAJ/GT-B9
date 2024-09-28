// const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");

const productSchema = new Schema({
  name: String,
  price: Number,
  quantity: Number,
  category: String,
  rating: Number,
  description: String,
});

const Product = model("products", productSchema);
module.exports = Product;
