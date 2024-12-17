import "../pages/Shop.css";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";

import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { addToCard } from "../cardSlice";
import { useNavigate } from "react-router-dom";

const Shop = () => {
  const [input, setInput] = useState({});
  const [mydata, setMydata] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInput((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = () => {
    let api = "http://localhost:9000/product/shopproduct";
    axios.post(api, input).then((res) => {
      setMydata(res.data);
      console.log(res.data);
      
    });
  };

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
        <Card
          style={{ width: "18rem", marginTop: "20px", marginBottom: "20px" }}
        >
          <a
            href="#"
            onClick={() => {
              navigate(`/prodetail/${key._id}`);
            }}
          >
            <Card.Img
              variant="top"
              src={key.image}
              style={{ height: "300px" }}
            />
          </a>
          <Card.Body>
            <Card.Title>{key.name}</Card.Title>
            <Card.Text>
              {key.description}
              <br />
              {key.product}
              <br />
              <span style={{ color: "red", fontWeight: "bold" }}>
                {" "}
                Price :Rs {key.price}/-{" "}
              </span>
            </Card.Text>
            <Button
              variant="primary"
              onClick={() => {
                addcardData(
                  key._id,
                  key.name,
                  key.description,
                  key.product,
                  key.price,
                  key.image
                );
              }}
            >
              Add to Cart
            </Button>
          </Card.Body>
        </Card>
      </>
    );
  });
  return (
    <>
      <h1 align="center">Your Shopping Place</h1>
      <div className="shoppage">
        <div id="shopmenu">
          <h5>Set Your Pattern</h5>
          Low Price :{" "}
          <input
            type="number"
            name="lprice"
            value={input.lprice}
            onChange={handleInput}
          />
          <br /><br />
          High Price :{" "}
          <input
            type="number"
            name="hprice"
            value={input.hprice}
            onChange={handleInput}
          />
          <br />
          <input
            type="checkbox"
            value="leptop"
            name="leptoppro"
            onChange={handleInput}
          />{" "}
          Leptop
          <br />
          <input type="checkbox"
            value="mobile"
            name="mobilepro"
            onChange={handleInput}
          />{" "}
          Mobile
          <br />
          <input
            type="checkbox"
            value="computer"
            name="computerpro"
            onChange={handleInput}
          />{" "}
          Computer
          <br />
          <Button variant="primary" onClick={handleSubmit}>
            Search
          </Button>
        </div>

        <div id="shopData">
          <div id="cardData">{ans}</div>
        </div>
      </div>
    </>
  );
};

export default Shop;
