import React from "react";
import { useNavigate } from "react-router-dom";
import "../../../Css/AdminMain.css";
import logo from "../../../images/logo.jpg";

const UserOptions = () => {
  const navigate = useNavigate();
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
  const options = [
    {
      title: "View Users",
      desc: "See and manage all registered users",
      icon: "👤",
      path: "/ViewUsers",
      call: null
    },
    {
      title: "Remove Users",
      desc: "Delete user accounts from the system",
      icon: "❌",
      path: "/RemoveUsers",
      call: null
    },
    {
      title: "Export CSV",
      desc: "Download all user data as CSV",
      icon: "⬇️",
      path: null,
      call: handleUser

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
              onClick={() => {option.path? navigate(option.path) : option.call()  }}
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

export default UserOptions;
