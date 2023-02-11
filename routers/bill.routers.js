const express=require("express");
const { getAllBill, createBill, getDetailBill, updateBill, deleteBill } = require("../controllers/Bill.controllers");
const billRouter=express.Router();

billRouter.get("/",getAllBill)
billRouter.get("/:id",getDetailBill)
billRouter.post("/",createBill)
billRouter.put("/:id",updateBill)
billRouter.delete("/:id",deleteBill)

module.exports={
  billRouter
}