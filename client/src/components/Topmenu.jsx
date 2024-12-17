import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from 'react-bootstrap/NavDropdown';

const Topmenu = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" className="custom-navbar">
        <Container>
          <Navbar.Brand
            as={Link}
            to="/home"
            className="navbar-brand-custom"
            style={{
              color: "white",
              fontWeight: "1000",
              letterSpacing: "2px",
              fontStyle: "italic",
            }}
          >
            ElectronixZone
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/home" className="nav-link-custom">Home</Nav.Link>
              <Nav.Link as={Link} to="/shop" className="nav-link-custom">Shop</Nav.Link>
              <Nav.Link as={Link} to="/search" className="nav-link-custom">Search</Nav.Link>

              {/* Products Dropdown Menu */}
              <NavDropdown title="Products" id="basic-nav-dropdown" className="nav-link-custom">
                <NavDropdown.Item as={Link} to="products/leptop">Laptop</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="products/mobile">Mobile</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="products/computer">Computer</NavDropdown.Item>
                {/* <NavDropdown.Item as={Link} to="/products/headphone">Headphone</NavDropdown.Item> */}
                {/* <NavDropdown.Item as={Link} to="/products/watch">Watch</NavDropdown.Item> */}
                <NavDropdown.Item as={Link} to="/products/airbuds">Airbuds</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/products/tv">TV</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/products/cctv">CCTV</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/products/ac">AC</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/products/all">All</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link as={Link} to="/cart" className="nav-link-custom">Cart</Nav.Link>
              <Nav.Link as={Link} to="/blog" className="nav-link-custom">Blogs</Nav.Link>
              <Nav.Link as={Link} to="/contact" className="nav-link-custom">Contact us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Moved CSS styles to standard styling */}
      <style>{`
        .custom-navbar {
          // padding: 1rem;
          font-size: 1.2rem;
          // font-weight: bold;
          // background: linear-gradient(90deg, rgba(33, 150, 243, 1) 0%, rgba(0, 123, 255, 1) 100%);
        }

        .navbar-brand-custom {
          font-family: 'Arial', sans-serif;
          font-size: 1.6rem;
          color: #fff !important;
          letter-spacing: 1px;
          transition: color 0.3s ease;
        }

        .navbar-brand-custom:hover {
          color: #ddd !important;
        }

        .nav-link-custom {
          color: white !important;
          margin-left: 20px;
          transition: color 0.3s ease;
        }

        .nav-link-custom:hover {
          color: #ffc107 !important;
        }

        .nav-link-custom.active {
          color: #ffc107 !important;
        }

        @media screen and (max-width: 768px) {
          .custom-navbar {
            font-size: 1rem;
          }

          .navbar-brand-custom {
            font-size: 1.3rem;
          }

          .nav-link-custom {
            margin-left: 10px;
          }
        }
      `}</style>
    </>
  );
};

export default Topmenu;
