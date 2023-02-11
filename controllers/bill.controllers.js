const { Bill } = require("../models/Bill.js")

const getAllBill=async(req,res)=>{
  const getList=await Bill.find();
  try {
    res.status(200).send(getList);
  } catch (error) {
    res.status(404).send(error);
  }
}
const getDetailBill=async(req,res)=>{
  const getDetail=await Bill.findById(req.params.id);
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
const createBill=async(req,res)=>{
  const newBill=new Bill(req.body);
  try {
    if(newBill){
      await newBill.save();
      res.status(201).send(newBill);
    }else{
      res.status(404).send("Not found");
    }
  } catch (error) {
    res.status(500).send(error)
  }
}
const updateBill=async(req,res)=>{
  const updatedBill=await Bill.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
  try {
    res.status(200).send(updatedBill);
  } catch (error) {
    res.status(500).send(error)
  }
}

const deleteBill=async(req,res)=>{
  try {
    const delBill=await Bill.findByIdAndDelete(req.params.id);
    if(delBill){
      res.status(200).send("Xoa thanh cong")
    }else{
      res.status(404).send("Id khong ton tai");
    }
  } catch (error) {
    res.status(500).send(error);
  }
}
module.exports={
  getAllBill,
  getDetailBill,
  createBill,
  updateBill,
  deleteBill
}