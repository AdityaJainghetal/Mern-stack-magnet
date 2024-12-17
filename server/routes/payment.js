// const router = require("express").Router();
// const Razorpay = require("razorpay");
// const crypto = require("crypto");

// //Creating Order



// router.post("/orders",async(req,res) => {
//     try {
//         const instance = new Razorpay({
//             key_id: process.env.KEY_ID,
//             key_secret: process.env.KEY_SECRET,
//         });

//         const options = {
//             amount: req.body.amount * 100,
//             currency:"INR",
//             receipt:crypto.randomBytes(10).toString("hex"),
//         }
//         instance.orders.create(options,(error,order) => {
//             if(error) {
//                 console.log(error);
//                 return res.status(500).json({message:"Something Went Wrong!"});
//             }
//             res.status(200).json({data:order});
//         });

//     } catch(error) {
//         console.log(error);
//         res.status(500).json({message:"Internal Server Error!"});
//     }

// });

// //Verifying the payment
// router.post("/verify",async(req,res) => {
//     try {
//         const {
//             razorpay_orderID,
//             razorpay_paymentID,
//             razorpay_signature } = req.body;
//         const sign = razorpay_orderID + "|" + razorpay_paymentID;
//         const resultSign = crypto
//         .createHmac("sha256",process.env.KEY_SECRET)
//         .update(sign.toString())
//         .digest("hex");

//         if (razorpay_signature == resultSign){
//             return res.status(200).json({message:"Payment verified successfully"});
//         }

//     } catch(error) {
//         console.log(error);
//         res.status(500).json({message:"Internal Server Error!"});
//     }
// });

// module.exports = router;



// ----------------------------------------------------------------------------------------


// const router = require("express").Router();
// const Razorpay = require("razorpay");
// const crypto = require("crypto");
// const Stripe = require('stripe')

// // Minimum order amount check (in INR, converted to paise)
// const MIN_ORDER_AMOUNT = 1; // Minimum amount in INR (1 INR = 100 paise)

// router.post("/orders", async (req, res) => {
//     try {
//         const { amount } = req.body;

//         // Check if the amount is valid and greater than or equal to the minimum allowed
//         if (!amount || amount < MIN_ORDER_AMOUNT) {
//             return res.status(400).json({ message: "Order amount must be at least ₹1" });
//         }

//         const instance = new Razorpay({
//             key_id: process.env.KEY_ID,
//             key_secret: "sk_test_51QWz5HCY7kDIKPcgVNWJpSLxWuKqCQzu1Hm6l9Ejxhj93VhQDCOqA5jSxx2ZyEHbDvlhyZIfuUaWBQsQNAYHFITA00rOxbVnUn",
//         });

//         const options = {
//             amount: amount * 100,  // Convert amount to paise
//             currency: "INR",
//             receipt: crypto.randomBytes(10).toString("hex"),
//         };

//         instance.orders.create(options, (error, order) => {
//             if (error) {
//                 console.log(error);
//                 return res.status(500).json({ message: "Something Went Wrong!" });
//             }
//             res.status(200).json({ data: order });
//         });

//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ message: "Internal Server Error!" });
//     }
// });

// // Verifying the payment
// router.post("/verify", async (req, res) => {
//     try {
//         const { razorpay_orderID, razorpay_paymentID, razorpay_signature } = req.body;

//         const sign = razorpay_orderID + "|" + razorpay_paymentID;
//         const resultSign = crypto
//             .createHmac("sha256", process.env.KEY_SECRET)
//             .update(sign.toString())
//             .digest("hex");

//         if (razorpay_signature === resultSign) {
//             return res.status(200).json({ message: "Payment verified successfully" });
//         } else {
//             return res.status(400).json({ message: "Payment verification failed" });
//         }

//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ message: "Internal Server Error!" });
//     }
// });

// module.exports = router;




const router = require("express").Router();
const Stripe = require('stripe');
const crypto = require("crypto");

// Initialize Stripe with your secret key
const stripe = new Stripe("sk_test_51QWz5HCY7kDIKPcgVNWJpSLxWuKqCQzu1Hm6l9Ejxhj93VhQDCOqA5jSxx2ZyEHbDvlhyZIfuUaWBQsQNAYHFITA00rOxbVnUn");

// Minimum order amount check (in INR, converted to paise)
const MIN_ORDER_AMOUNT = 1; // Minimum amount in INR (1 INR = 100 paise)

// Route to create a payment intent
router.post("/orders", async (req, res) => {
    try {
        const { amount, currency = "INR" } = req.body;

        // Validate amount
        if (!amount || amount < MIN_ORDER_AMOUNT) {
            return res.status(400).json({ message: "Order amount must be at least ₹1" });
        }

        // Create a PaymentIntent
        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount * 100, // Convert amount to paise
            currency: currency.toLowerCase(), // Stripe expects lowercase currency codes
            description: "Payment for your order",
            metadata: { order_id: crypto.randomBytes(10).toString("hex") },
        });

        res.status(200).json({
            clientSecret: paymentIntent.client_secret,
            message: "Payment intent created successfully",
        });

    } catch (error) {
        console.error("Error creating payment intent:", error.message);
        res.status(500).json({ message: "Internal Server Error!" });
    }
});

// Verifying the payment
router.post("/verify", async (req, res) => {
    try {
        const { paymentIntentId } = req.body;

        // Retrieve the PaymentIntent to check its status
        const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);

        if (paymentIntent.status === "succeeded") {
            return res.status(200).json({ message: "Payment verified successfully" });
        } else {
            return res.status(400).json({ message: "Payment verification failed", status: paymentIntent.status });
        }

    } catch (error) {
        console.error("Error verifying payment:", error.message);
        res.status(500).json({ message: "Internal Server Error!" });
    }
});

module.exports = router;
