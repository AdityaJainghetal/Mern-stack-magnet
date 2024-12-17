const UserModel= require("../models/userModel");


const customerSave=async(req, res)=>{
    const {name, address, city, pincode, mobile, proname, price}=req.body;
    console.log(name, address, city, pincode, mobile, proname, price,"lkjhgcxzxcgbhjjkhg lkgjfhgf")
    await UserModel.create({

        name:name,
        address:address, 
        city: city,
        pin:pincode,
        mobile: mobile,
        product:proname,
        price:price
    })
  res.send(name, address, city, pincode, mobile,proname, price);
  
}

module.exports={
    customerSave
}