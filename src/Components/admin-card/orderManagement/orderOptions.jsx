import React from "react";
import { useNavigate } from "react-router-dom";
import "../../../Css/AdminMain.css";
import logo from "../../../images/logo.jpg";

const OrderOptions = () => {
  const navigate = useNavigate();
    const handleOrder = () => {
    fetch("https://my-agroprime-app.onrender.com/api/export-csv-order") 
      .then((res) => res.blob())
      .then((blob) => {
        
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "orders.csv";
        document.body.appendChild(a);
        a.click();
        a.remove();
      });
  };

  const options = [
    {
      title: "View Orders",
      desc: "See and manage all registered orders",
      icon: "👤",
      path: "/ViewOrdersAdmin",
      call: null
    },
    {
      title: "Cancel Orders",
      desc: "Delete Order from the system",
      icon: "❌",
      path: "/CancelOrders",
      call: null
    },
    {
      title: "Export CSV",
      desc: "Download all order data as CSV",
      icon: "⬇️",
      path: null,
      call: handleOrder
    }
  ];

  return (
    <>
      <nav className="admin-navbar">
        <img src={logo} alt="Logo" className="logo" />
        <div onClick={()=>navigate("/AdminMain")} className="nav-title">Admin Dashboard</div>
      </nav>

      <div className="dashboard-container">
        <h2>User Management</h2>
        <div className="options-grid">
          {options.map((option) => (
            <div
              key={option.title}
              className="option-card"
              onClick={() => {option.path? navigate(option.path) : option.call()}}
            >
              <div className="option-icon">{option.icon}</div>
              <h3>{option.title}</h3>
              <p>{option.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OrderOptions;
