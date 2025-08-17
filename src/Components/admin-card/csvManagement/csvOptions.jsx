import React from "react";
import { useNavigate } from "react-router-dom";
import "../../../Css/AdminMain.css";
import logo from "../../../images/logo.jpg";

const CsvOptions = () => {
  const navigate = useNavigate();

   const handleProduct = () => {
    fetch("https://my-agroprime-app.onrender.com/api/export-csv-product") 
      .then((res) => res.blob())
      .then((blob) => {
        
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "products.csv";
        document.body.appendChild(a);
        a.click();
        a.remove();
      });
  };
  const handleUser = () => {
    fetch("https://my-agroprime-app.onrender.com/api/export-csv-user") 
      .then((res) => res.blob())
      .then((blob) => {
        
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "users.csv";
        document.body.appendChild(a);
        a.click();
        a.remove();
      });
  };
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
      title: "Users CSV",
      desc: "Download all registered users as CSV",
      icon: "👤",
      path: "/ExportUsersCSV",
      call: handleUser
    },
    {
      title: "Products CSV",
      desc: "Download all products as CSV",
      icon: "🛒",
      path: "/ExportProductsCSV",
      call: handleProduct
    },
    {
      title: "Orders CSV",
      desc: "Download all orders as CSV",
      icon: "📦",
      path: "/ExportOrdersCSV",
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
        <h2>Select CSV to Download</h2>
        <div className="options-grid">
          {options.map((option) => (
            <div
              key={option.title}
              className="option-card"
              onClick={option.call}
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

export default CsvOptions;
