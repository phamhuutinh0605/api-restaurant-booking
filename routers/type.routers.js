const express=require("express");
const { getAllType, createType, getDetailType, updateType, deleteType } = require("../controllers/type.controllers");
const typeRouter=express.Router();

typeRouter.get("/",getAllType)
typeRouter.get("/:id",getDetailType)
typeRouter.post("/",createType)
typeRouter.put("/:id",updateType)
typeRouter.delete("/:id",deleteType)

module.exports={
  typeRouter
}