import React, { useState, useEffect } from "react";
import "../../../Css/AdminMain.css";
import logo from "../../../images/logo.jpg";
import { useNavigate } from "react-router-dom";

const RemoveUsers = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const handleRemove = async (email) => {
    try {
      const response = await fetch(
        `https://my-agroprime-app.onrender.com/api/deleteUser/${email}`,
        { method: "Get" } // ensure backend accepts DELETE
      );
      if (response.ok) {
        // Remove user from state without refetching
        setUsers(users.filter((user) => user.email !== email));
      } else {
        console.log("Error deleting user");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getUsers = async () => {
    try {
      const response = await fetch(
        "https://my-agroprime-app.onrender.com/api/getAllUsers"
      );
      if (response.ok) {
        const data = await response.json();
        setUsers(data);
      } else {
        console.log("Error fetching users");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []); // Run once on component mount
  function getNavigate(){
      navigate('/AdminMain')
    }
  return (
    <>
      <nav className="Navbar">
        <img src={logo} alt="" className="logo" />
        <div onClick={getNavigate}><h1 className="nav-title">Admin Dashboard</h1></div>
      </nav>

      <div className="dashboard-container">
        <h2>Registered Users</h2>
        <div className="users-table">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.length > 0 ? (
                users.map((user, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      <button
                        className="remove-btn"
                        onClick={() => handleRemove(user.email)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4">No users available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default RemoveUsers;
