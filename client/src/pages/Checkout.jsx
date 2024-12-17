import "../pages/Checkout.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { useSelector } from "react-redux";
import Table from "react-bootstrap/Table";

import { useState } from "react";

import axios from "axios";

const Checkout = () => {
  const myCard = useSelector((state) => state.mycard.card);
  const products = myCard?.map((data)=> {
    return data.name
  })


  const [input, setInput] = useState({});
  const [mypro, setMypro] = useState({
    name: "",
    creator: "",
    img: "",
    proname: [],
    price: "",
  });
  console.log(mypro,"mypro")
  const initPay = (data) => {
    const options = {
      key: "rzp_test_PaZKuQKOFylYje",
      amount: data.amount,
      currency: data.currency,
      name: mypro.name,
      description: "Test",
      image: mypro.img,
      order_id: data.id,
      handler: async (response) => {
        try {
          const verifyURL = "https://localhost:9000/api/payment/verify";
          const { data } = await axios.post(verifyURL, response);
        } catch (error) {
          console.log(error);
        }
      },
      theme: {
        color: "#3399cc",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };
  const handlePay = async () => {
    await setMypro({
      creator: brand,
      img: proimg,
      price: totalAmount,
      proname: products,
    });

    try {
      const orderURL = "http://localhost:9000/api/payment/orders";
      const { data } = await axios.post(orderURL, { amount: mypro.price });

      initPay(data.data);
    } catch (error) {
      console.log(error);
    }

    const api = "http://localhost:9000/users/usersave";
    const strip = "pk_test_51QWz5HCY7kDIKPcgOBDYgkfU8sO66HA5lGhYmeHvVciTncnPCmVXPZZHVr7NefG0bEOwOy2Jfp47zOwn1NsYDaiO007THBOiDc";
    axios
      .post(api, { ...input, proname: mypro.proname, price: mypro.price })
      .then((res) => {
        console.log("Data Save!!");
      });
  };

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInput((values) => ({ ...values, [name]: value }));
  };

  let sno = 0;
  let totalAmount = 0;

  let proname = " ";
  let brand = "Testing";
  let proimg = " ";

  const ans = myCard.map((key) => {

    totalAmount += key.price * key.qnty;
    sno++;
    return (
      <>
        <tr>
          <td>{sno} </td>
          <td>
            <img src={key.image} width="100" height="100" />{" "}
          </td>
          <td> {key.name} </td>
          <td> {key.description} </td>
          <td> {key.product} </td>
          <td> {key.price}</td>
          <td>{key.qnty}</td>
          <td>{key.price * key.qnty}</td>
          <td></td>
        </tr>
      </>
    );
  });

  return (
    <>
      <div id="payPage">
        <div id="payForm">
          <h4 align="center">Fill Your Shipping Address</h4>
          <Form style={{ width: "90%" }}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Enter Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={input.name}
                onChange={handleInput}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Enter Address</Form.Label>
              <Form.Control
                type="text"
                name="address"
                value={input.address}
                onChange={handleInput}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Enter City</Form.Label>
              <Form.Control
                type="text"
                name="city"
                value={input.city}
                onChange={handleInput}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Enter Pin Code</Form.Label>
              <Form.Control
                type="text"
                name="pincode"
                value={input.pincode}
                onChange={handleInput}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Enter Mobile</Form.Label>
              <Form.Control
                type="text"
                name="mobile"
                value={input.mobile}
                onChange={handleInput}
              />
            </Form.Group>
            <Button variant="primary" type="button" onClick={handlePay}>
              Submit
            </Button>
          </Form>
        </div>

        <div id="payMethod">
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
                <th> </th>
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
                <th> </th>
                <th> Net Amount</th>
                <th> {totalAmount}</th>
              </tr>
              <tr>
                <th> </th>
                <th> </th>
                <th></th>
                <th></th>
                <th></th>
                <th> </th>
                <th></th>
                <th> </th>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default Checkout;










