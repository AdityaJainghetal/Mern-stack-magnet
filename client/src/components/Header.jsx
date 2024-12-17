import "../components/Header.css";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { GrUserAdmin } from "react-icons/gr";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { message } from 'antd';
import { useSelector } from "react-redux";

const Header = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const CardData = useSelector((state) => state.mycard.card);
  const cardLength = CardData.length;

  const handleSubmit = () => {
    const api = "http://localhost:9000/adminuser/usercheck";
    axios.post(api, { user: username, password: password })
      .then((res) => {
        if (res.status === 200) {
          message.success("You are Successfully Logged In!");
          navigate("/admin");
        } else {
          message.error("Login failed. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Login error: ", error);
        message.error("Network error. Please try again later.");
      });
  };

  return (
    <>
      <div id="header">
        <div className="header-center">
          <div className="search-wrapper">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <a href="#" onClick={()=>{navigate("/search")}}>
            <FaSearch className="search-icon-inside" size={20} color="black" />
            </a>
          </div>
        </div>
        <div className="header-right">
          <a href="#" onClick={() => { navigate("/carddata") }}>
            <FaShoppingCart size={20} color="black" />
            <span className="cart-count">{cardLength}</span>
          </a>
          <a href="#" onClick={handleShow}>
            <GrUserAdmin className="space" size={20} color="black" />
          </a>
        </div>
      </div>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title style={{ fontWeight: 'bold', color: '#343a40' }}>Admin Login Area</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p style={{ marginBottom: '15px', color: '#6c757d' }}>
            Admin Area for managing your website
          </p>
          <div className="form-group mb-3">
            <label htmlFor="admin-username" style={{ fontWeight: '500' }}>Enter Admin:</label>
            <input
              type="text"
              id="admin-username"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
              style={{ marginTop: '5px' }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="admin-password" style={{ fontWeight: '500' }}>Enter Password:</label>
            <input
              type="password"
              id="admin-password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              style={{ marginTop: '5px' }}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} style={{ borderRadius: '5px' }}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={handleSubmit}
            style={{
              backgroundColor: '#007bff',
              borderColor: '#007bff',
              borderRadius: '5px',
              padding: '8px 15px',
              fontWeight: 'bold',
            }}
          >
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Header;
