// import "../admin/AdminDashboard.css";
// import { Link, Outlet } from "react-router-dom";

// const AdminDashboard = () => {
//   return (
//     <>
//       <div id="adminHeader">
//         <h4>Welcome to Admin Dashboard</h4>
//       </div>
//       <div id="adminContainer">
//         <div id="adminMenu">
//           <h4 className="menuTitle">Admin Menu</h4>
//           <Link to="ahome" className="menuLink">Home</Link>
//           <Link to="insertpro" className="menuLink">Insert Product</Link>
//           <Link to="viewproducts" className="menuLink">View Products</Link>
//           <Link to="manageusers" className="menuLink">Manage Users</Link>
//           <Link to="orders" className="menuLink">View Orders</Link>
//         </div>
//         <div id="adminContent">
//           <Outlet />
//         </div>
//       </div>
//     </>
//   );
// };

// export default AdminDashboard;


import React, { useState } from "react";
import "../admin/AdminDashboard.css";
import { Link, Outlet } from "react-router-dom";

const AdminDashboard = () => {
  const [menuOpen, setMenuOpen] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div id="adminHeader">
        <button id="hamburgerMenu" onClick={toggleMenu} >
          ☰
        </button>
        <h4> Welcome to Admin Dashboard</h4>
      </div>
      <div id="adminContainer">
        {menuOpen && (
          <div id="adminMenu">
            <h4 className="menuTitle">Admin Menu</h4>
            <Link to="ahome" className="menuLink">Home</Link>
            <Link to="insertpro" className="menuLink">Insert Product</Link>
            <Link to="viewproducts" className="menuLink">View Products</Link>
            <Link to="manageusers" className="menuLink">Manage Users</Link>
            <Link to="orders" className="menuLink">View Orders</Link>
          </div>
        )}
        <div id="adminContent">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;

