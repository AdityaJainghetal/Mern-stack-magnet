import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import AdminDashboard from "./admin/AdminDashboard";
import InsertProduct from "./admin/InsertProduct";
import CardData from "./pages/CardData";
import ProductDetail from "./pages/ProductDeatil";
import Cart from "./pages/Cart";
import Leptop from "./pages/Leptop";
import Mobile from "./pages/Mobile";
import Search from "./pages/Search";
import Shop from "./pages/Shop";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Checkout from "./pages/Checkout";

// import Header from './components/Header'

const App = () => {
  return (
    <>
      {/* <h1>Welcome to E-commerceWeb!!!</h1> */}
      {/* <Header/> */}
      
      <BrowserRouter>
        <Routes>
          {/* Main Routes */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="carddata" element={<CardData />} />
            <Route path="prodetail/:proid" element={<ProductDetail />} />
            <Route path="cart" element={<Cart />} />
            <Route path="products/leptop" element={<Leptop/>}/>
            <Route path="products/mobile" element={<Mobile/>}/>
            <Route path="search" element={<Search/>}/>
            <Route path="shop" element={<Shop/>}/>
            <Route path="blog" element={<Blogs/>}/>
            <Route path="contact" element={<Contact/>}/>
            <Route path="checkout" element={<Checkout/>}/>
            
          </Route>
          
          {/* Admin Routes */}
          <Route path="/admin" element={<AdminDashboard />}>
            <Route path="insertpro" element={<InsertProduct />} />
            <Route path="ahome" element={<Home/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
