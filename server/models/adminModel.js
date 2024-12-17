const mongoose=require("mongoose");

const adminSchema=new mongoose.Schema({
    user:String,
    password:String
})
module.exports=mongoose.model("adminuser",adminSchema);