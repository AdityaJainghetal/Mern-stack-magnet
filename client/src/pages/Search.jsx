
import { useState } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { addToCard } from '../cardSlice';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const [mypro,setMyPro]=useState("");
  const [mydata,setMydata]=useState([]);
  const dispatch=useDispatch();
  const navigate=useNavigate();

 const handleChange=(e)=>{
  setMyPro(e.target.value);
  let api = `http://localhost:9000/product/searchproduct/?product=${mypro}`;
  axios.get(api).then((res) => {
    setMydata(res.data);
    console.log(res.data);
  })

 }
 const addcardData = (id, name, desc, pro, price, image) => {
  dispatch(
    addToCard({
      id: id,
      name: name,
      description: desc,
      product: pro,
      price: price,
      image: image,
      qnty: 1,
    })
  );
};

const ans = mydata.map((key) => {
  return (
    <>
      <Card style={{ width: '18rem', marginTop:'20px' ,marginBottom:"20px"}}>
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
    );
  })



  return (
    <>
    <center> 
    <h1 align="center">Search Product</h1>
    Enter Product Name :<input type="text" 
    value={mypro} onChange={handleChange}/>
    </center>
    <hr />
    <div
     id="cardData">
     {ans}
   </div>
    </>
  )
}

export default Search;