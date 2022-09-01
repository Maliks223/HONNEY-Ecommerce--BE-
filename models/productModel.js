const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String, required: true },
    img: { type: String, required: true },
    categories: { type: Array },
    weight: { type: String },
    type: { type: String },
    price: { type: Number, required: true },
    stockQuantity: { type: Number },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);