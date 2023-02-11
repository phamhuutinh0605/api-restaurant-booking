const express=require("express");
const { getAllProduct, createProduct, getDetailProduct, updateProduct, deleteProduct, uploadAvatar } = require("../controllers/Product.controllers");
const { uploadImages } = require("../middlewares/upload-images");
const productRouter=express.Router();

productRouter.get("/",getAllProduct)
productRouter.get("/:id",getDetailProduct)
productRouter.post("/",createProduct)
productRouter.put("/:id",updateProduct)
productRouter.delete("/:id",deleteProduct)

//upload img
productRouter.post("/upload-avatar",uploadImages("product"),uploadAvatar);
module.exports={
  productRouter
}