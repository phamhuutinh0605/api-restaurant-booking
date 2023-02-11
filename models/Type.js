const mongoose=require("mongoose");

const TypeSchema=mongoose.Schema({
  type:{
    type:String,
    required:true
  }
})
const Type=mongoose.model("Type",TypeSchema);
module.exports={
  Type
};