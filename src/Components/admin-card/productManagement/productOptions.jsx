import React from "react";
import { useNavigate } from "react-router-dom";
import "../../../Css/AdminMain.css";
import logo from "../../../images/logo.jpg";

const ProductsOptions = () => {
  const navigate = useNavigate();

  const options = [
    { title: "Add Product", desc: "Add a new product to your catalog", icon: "➕", path: "/AddProduct" },
    { title: "Remove Product", desc: "Delete a product from your catalog", icon: "❌", path: "/RemoveProduct" },
    { title: "Edit Product", desc: "Modify existing product details", icon: "✏️", path: "/EditProduct" }
  ];

  return (
    <>
      <nav className="admin-navbar">
        <img src={logo} alt="Logo" className="logo" />
               <div onClick={()=>navigate("/AdminMain")} className="nav-title">Admin Dashboard</div>
      </nav>

      <div className="dashboard-container">
        <h2>Product Management</h2>
        <div className="options-grid">
          {options.map((option) => (
            <div
              key={option.title}
              className="option-card"
              onClick={() => navigate(option.path)}
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

export default ProductsOptions;
