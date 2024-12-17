import { useSelector, useDispatch } from "react-redux";
import Table from 'react-bootstrap/Table';
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";

import {qntyIncrement, qntyDecrement, dataRemove} from "../cardSlice";
import { Button } from "antd";



import { useNavigate } from "react-router-dom";



const CardData=()=>{
    const myCard= useSelector((state)=>state.mycard.card);
    const dispatch= useDispatch();

        const navigate= useNavigate();



    const qntyInc=(id)=>{
        dispatch(qntyIncrement({id:id}))
    }

    const qntyDec=(id)=>{
        dispatch(qntyDecrement({id:id}))
    }



  let sno=0;
  let totalAmount=0;
    const ans= myCard.map((key)=>{

        
        totalAmount+=key.price*key.qnty;
        sno++;
        return(
            <>
               <tr>
                <td>{sno} </td>
                <td>
                 <img src={key.image} width="100" height="100" /> </td>
                <td> {key.name} </td>
                <td> {key.description} </td>
                <td> {key.product} </td>
                <td> {key.price}</td>
                <td> 
                <a href="#" onClick={()=>{qntyDec(key.id)}}>
                   <FaMinusCircle />
                   </a>
                   <span  style={{marginLeft:"10px" , marginRight:"10px",fontWeight:"bold",cursor:"pointer"}}> 

                      {key.qnty}
                   </span>
                   <a href="#" onClick={()=>{qntyInc(key.id)}}>

                   <FaPlusCircle />
                   </a>
                      
                    </td>
                <td> 
                
                    {key.price * key.qnty} 
                
                </td>
                <td>
                   <Button onClick={()=>{dispatch(dataRemove(key.id))}}> Remove</Button>

                </td>
               </tr>
            
            </>
        )
    })



    return(
        <>
         {/* <h5 align="center" > My Cart Data</h5> */}
         <center>
         <h1>My Cart Data</h1>
         </center>

         <Table striped bordered hover>
      <thead>
        <tr>
          <th> S.No.</th>
          <th> </th>
          <th>Name</th>
          <th>Description</th>
          <th>Product</th>
          <th> Price </th>
          <th> Quantity</th>
          <th> Total Price</th>
          <th>Action</th>
        </tr>

      </thead>
      <tbody>
          {ans}
          <tr>
          <th> </th>
          <th> </th>
          <th></th>
          <th></th>
          <th></th>
          <th>  </th>
          <th> Net Amount</th>
          <th> {totalAmount}/-</th>
          <th> </th>
          </tr>
        
        <tr>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th>
            <button onClick={()=>{navigate("/checkout")}} style={{background:"yellow", padding:"6px 12px", borderRadius:"10px"}}>Checkout</button>
            </th>
            <th></th>
        </tr>


        </tbody>
        </Table>

        </>
    )
}

export default CardData;