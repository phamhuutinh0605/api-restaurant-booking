const mongoose = require("mongoose");
const OrderSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  date: {
    type: [Date],
    required: true,
  },
  product: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
  totalPrice: {
    type: Number,
  },
});
const Order = mongoose.model("Order", OrderSchema);
module.exports = {
  Order,
};
