import React from "react";
import { useNavigate } from "react-router-dom";
import "../Css/AdminMain.css";
import logo from "../images/logo.jpeg";

const AdminMain = () => {
  const navigate = useNavigate();

  return (
    <>
      
      <nav className="Navbar">
        <img src={logo} alt="Logo" className="logo" />
        <h1 className="nav-title">Admin Dashboard</h1>
      </nav>

      
      <div className="admin-dashboard">
        <h2>Select an Option</h2>

        <div className="admin-options">
          <div
            className="admin-card"
            onClick={() => navigate("/UsersData")}
          >
            <h3>👤 View Users</h3>
            <p>See and manage all registered users</p>
          </div>

          <div
            className="admin-card"
            onClick={() => navigate("/OrderData")}
          >
            <h3>📦 View Orders</h3>
            <p>Track and manage all customer orders</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminMain;
