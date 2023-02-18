const express=require("express");
const { getAllProduct, createProduct, getDetailProduct, updateProduct, deleteProduct } = require("../controllers/product.controllers");

const productRouter=express.Router();

productRouter.get("/",getAllProduct)
productRouter.get("/:id",getDetailProduct)
productRouter.post("/",createProduct)
productRouter.put("/:id",updateProduct)
productRouter.delete("/:id",deleteProduct)


module.exports={
  productRouter
}