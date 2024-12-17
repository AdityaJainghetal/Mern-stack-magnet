const express=require("express");
const route=express.Router();

const ProductController=require("../controllers/productController") ;

route.post("/productsave",ProductController.productSave);
route.get("/showproduct", ProductController.showProduct);
route.post("/productdetail", ProductController.productDetail);
route.get("/showoneproduct", ProductController.showOneProduct);
route.get("/searchproduct", ProductController.searchProduct);
route.post("/shopproduct", ProductController.shopProduct);




module.exports=route;