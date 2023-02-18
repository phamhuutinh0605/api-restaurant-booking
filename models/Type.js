const mongoose=require("mongoose");
const TypeSchema=mongoose.Schema({
  type:{
    type:String,
    required:true
  },
  product:[
   {
    type:mongoose.Schema.Types.ObjectId,
    ref:'Product'
   }
  ]
})
const Type=mongoose.model("Type",TypeSchema);
module.exports={
  Type
};