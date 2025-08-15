import React from "react";
import { useNavigate } from "react-router-dom";
import "../../../Css/AdminMain.css";
import logo from "../../../images/logo.jpg";

const UserOptions = () => {
  const navigate = useNavigate();

  const options = [
    {
      title: "View Users",
      desc: "See and manage all registered users",
      icon: "👤",
      path: "/ViewUsers"
    },
    {
      title: "Remove Users",
      desc: "Delete user accounts from the system",
      icon: "❌",
      path: "/RemoveUsers"
    },
    {
      title: "Export CSV",
      desc: "Download all user data as CSV",
      icon: "⬇️",
      path: "/ExportUsersCSV"
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

export default UserOptions;
