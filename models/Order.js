const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  products: [{
      productName: String,
      amount: {
        type: Number
    }
  }]
});
const Order = mongoose.model("Order", OrderSchema);
module.exports = {
  Order,
};
