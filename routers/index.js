const express=require("express");
const { productRouter } = require("./product.routers");
const { typeRouter } = require("./type.routers");
const rootRouter=express.Router();

rootRouter.use("/types",typeRouter)
rootRouter.use("/products",productRouter)


module.exports={
  rootRouter
}