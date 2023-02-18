const mongoose = require("mongoose");
const ProductSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  img: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  type: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Type",
  },
  order: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Order",
  },
});
const Product = mongoose.model("Product", ProductSchema);
module.exports = {
  Product,
};
