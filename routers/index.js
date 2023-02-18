const express=require("express");
const { orderRouter } = require("./order.routers");
const { productRouter } = require("./product.routers");
const { typeRouter } = require("./type.routers");
const rootRouter=express.Router();

rootRouter.use("/types",typeRouter)
rootRouter.use("/products",productRouter)
rootRouter.use("/orders",orderRouter)


module.exports={
  rootRouter
}