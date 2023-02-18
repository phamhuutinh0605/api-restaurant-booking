const { Order } = require("../models/Order.js");

const getAllOrder = async (req, res) => {
  const getList = await Order.find().populate("product");
  try {
    res.status(200).send(getList);
  } catch (error) {
    res.status(404).send(error);
  }
};
const getDetailOrder = async (req, res) => {
  const getDetail = await Order.findById(req.params.id);
  try {
    if (getDetail) {
      res.status(200).send(getDetail);
    } else {
      res.status(404).send("Khong ton tai id nay");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};
const createOrder = async (req, res) => {
  const newOrder = new Order(req.body);
  try {
    if (req.body.product) {
      if (newOrder) {
        await newOrder.save();
        res.status(201).send(newOrder);
      } else {
        res.status(404).send("Not found");
      }
    }
  } catch (error) {
    res.status(500).send(error);
  }
};
const updateOrder = async (req, res) => {
  const updatedOrder = await Order.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    { new: true }
  );
  try {
    res.status(200).send(updatedOrder);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteOrder = async (req, res) => {
  try {
    const delOrder = await Order.findByIdAndDelete(req.params.id);
    if (delOrder) {
      res.status(200).send("Xoa thanh cong");
    } else {
      res.status(404).send("Id khong ton tai");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};
module.exports = {
  getAllOrder,
  getDetailOrder,
  createOrder,
  updateOrder,
  deleteOrder,
};
