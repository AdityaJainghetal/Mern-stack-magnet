import "../pages/ProductDeatil.css"
import { useState,useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { useDispatch } from "react-redux";
import { addToCard } from '../cardSlice';

const ProductDeatil = () => {
    const { proid } = useParams();
    const[mydata,setMydata]=useState({});
    const dispatch = useDispatch();

    const loadData=()=>{
      let api = "http://localhost:9000/product/productdetail";
      axios.post(api,{id:proid}).then((res)=>{
        setMydata(res.data);
      })
    }
    useEffect(() => {
      loadData();
    },[]);


    const addcardData=(id, name, desc, pro, price, image)=>{
      dispatch(addToCard({id:id, name:name, description:desc, product:pro, price:price, image:image, qnty:1}))
     }
  return (
    <>
    
        {/* <h1> Welcom to Product Detail Page:{proid}</h1> */}
        <h1 align="center"> Product Detail</h1>
        <div id="proDetail">
          <div id="proImage">
            <img src={mydata.image} width="300px" height="300px" />
          </div>
          <div id="proData">
            <h2>{mydata.name}</h2>
            <h5>Product Deatil:{mydata.description}</h5>
            <h5>Price:{mydata.price}/-</h5>
            <h6>{mydata.product}</h6>
            <Button
             onClick={()=>{addcardData(mydata._id, mydata.name, mydata.description, mydata.product, mydata.price, mydata.image)}}
            >Add to Cart
            </Button>

          </div>

        </div>
    
    </>
  )
}

export default ProductDeatil;