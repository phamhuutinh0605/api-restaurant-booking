const mongoose=require("mongoose");

const BillSchema=mongoose.Schema({
  email:{
    type:String,
    required:true
  },
  date:{
    type:[Date],
    required:true
  },
  totalPrice:{
    type:Number,
    required:true
  }
})
const Bill=mongoose.model("Bill",BillSchema);
module.exports={
  Bill
};