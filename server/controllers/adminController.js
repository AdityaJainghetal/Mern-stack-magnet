const AdminModel=require("../models/adminModel");



const adminDataCheck=async(req,res)=>{
    const {user,password}=req.body;
    console.log(user,password);
    // res.send("ok")


    const Admin=await AdminModel.find({user:user});
    console.log(Admin)
    if(Admin.length<1)
    {   
        res.status(404).send({msg:"Invalid Username !"})
    }
    else
    {
        if(Admin[0].password=password)
        {
            res.status(200).send(Admin)
        }
        else
        {
            res.status(404).send({msg:"Invalid Password !"})
        }
    }
}


module.exports={
    adminDataCheck
}



