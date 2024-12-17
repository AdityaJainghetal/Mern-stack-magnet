import { useState, useEffect } from "react";
import axios from "axios";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from 'react-redux';
import { addToCard } from '../cardSlice';
import { useNavigate } from "react-router-dom";



const Mobile = () => {
    const [mydata, setMydata] = useState([]);
    const dispatch=useDispatch();
    const navigate=useNavigate();
  
  
    const loadData=()=>{
      let api = "http://localhost:9000/product/showoneproduct?product=mobile";
      axios.get(api).then((res)=>{
        setMydata(res.data);
        console.log
      })
      
    }
    useEffect(()=>{
      loadData();
    },[]);
  
  
  
    const addcardData=(id, name, desc, pro, price, image)=>{
      dispatch(addToCard({id:id, name:name, description:desc, product:pro, price:price, image:image, qnty:1}))
  
    }
    const ans=mydata.map((key)=>{
      return(
        <>
          <Card style={{ width: '18rem', marginTop:'20px', marginBottom:"20px"}}>
            <a href="#" onClick={()=>{navigate(`/prodetail/${key._id}`)}}>
            <Card.Img variant="top" src={key.image} style={{height:'300px'}} />
            </a>
        <Card.Body>
          <Card.Title>{key.name}</Card.Title>
          <Card.Text>
            {key.description}
            <br/>
            {key.product}
            <br/>
           <span style={{color:'red', fontWeight:'bold'}}> Price :Rs {key.price}/- </span> 
          </Card.Text>
          <Button variant="primary"
           onClick={()=>{addcardData(key._id, key.name, key.description, key.product, key.price, key.image)}}
          >Add to Cart</Button>
        </Card.Body>
      </Card>
        </>
        )
       })
  
  return (
    <>
    <h1 align ="center">Our Trending Mobile</h1>
    <div
        id="cardData"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          marginTop: "30px",
          padding: "0 20px",
        }}
      >
        {ans}
      </div>
    </>
  )
}

export default Mobile