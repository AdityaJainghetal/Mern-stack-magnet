const mongoose=require("mongoose");

const productSchema=new mongoose.Schema({
    name:String,
    description:String, 
    product: String,
    price: Number, 
    image: String
})
module.exports=mongoose.model("product",productSchema);