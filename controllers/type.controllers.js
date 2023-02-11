const { Type } = require("../models/Type.js")

const getAllType=async(req,res)=>{
  const getList=await Type.find();
  try {
    res.status(200).send(getList);
  } catch (error) {
    res.status(404).send(error);
  }
}
const getDetailType=async(req,res)=>{
  const getDetail=await Type.findById(req.params.id);
  try {
   if(getDetail){
    res.status(200).send(getDetail);
   }else{
    res.status(404).send("Khong ton tai id nay");
   }
  } catch (error) {
    res.status(500).send(error);
  }
}
const createType=async(req,res)=>{
  const newType=new Type(req.body);
  try {
    if(newType){
      await newType.save();
      res.status(201).send(newType);
    }else{
      res.status(404).send("Not found");
    }
  } catch (error) {
    res.status(500).send(error)
  }
}
const updateType=async(req,res)=>{
  const updatedType=await Type.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
  try {
    res.status(200).send(updatedType);
  } catch (error) {
    res.status(500).send(error)
  }
}

const deleteType=async(req,res)=>{
  try {
    const delType=await Type.findByIdAndDelete(req.params.id);
    if(delType){
      res.status(200).send("Xoa thanh cong")
    }else{
      res.status(404).send("Id khong ton tai");
    }
  } catch (error) {
    res.status(500).send(error);
  }
}
module.exports={
  getAllType,
  getDetailType,
  createType,
  updateType,
  deleteType
}