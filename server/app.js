const express=require("express")
const Stripe = require('stripe')
const app=express();
const mongoose=require("mongoose");
const cors=require("cors");
const bodyParser = require('body-parser');
const adminRoute=require("./routes/adminRoute")
const productRoute=require("./routes/productRoute")
const paymentRoute=require("./routes/payment");
const userRoute=require("./routes/userRoute")
// const Stripe=require("./node_modules/stripe/esm/stripe.esm.node")

require("dotenv").config();
const PORT=process.env.PORT || 9000

const stripe = Stripe("sk_test_51QWz5HCY7kDIKPcgVNWJpSLxWuKqCQzu1Hm6l9Ejxhj93VhQDCOqA5jSxx2ZyEHbDvlhyZIfuUaWBQsQNAYHFITA00rOxbVnUn")

app.use(cors());
// Body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use("/adminuser",adminRoute)
app.use("/product",productRoute)


app.use("/users",userRoute)



app.use("/api/payment",paymentRoute)

mongoose.connect("mongodb://127.0.0.1:27017/magnetbrains" ).then(()=>{
    console.log("Connected to MongoDB !!!")
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
});