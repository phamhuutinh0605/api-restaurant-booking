const express=require("express");
const { getAllOrder, createOrder, getDetailOrder, updateOrder, deleteOrder } = require("../controllers/Order.controllers");
const orderRouter=express.Router();

orderRouter.get("/",getAllOrder)
orderRouter.get("/:id",getDetailOrder)
orderRouter.post("/",createOrder)
orderRouter.put("/:id",updateOrder)
orderRouter.delete("/:id",deleteOrder)

module.exports={
  orderRouter
}