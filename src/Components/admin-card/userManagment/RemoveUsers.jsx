import React, { useState, useEffect } from "react";
import "../../../Css/AdminMain.css";
import logo from "../../../images/logo.jpg";

const RemoveUsers = () => {
 
    const [users, setUsers] = useState([]);

  const handleRemove = async (email) => {
    const response2 = await fetch(`https://my-agroprime-app.onrender.com/api/getAllUsers/deleteUser/${email}`);
    const data = await response2.json();
    if (response2.ok) {
      setUsers(data);
    } else {
      console.log('Error fetching users');
    }
  };
  const getUsers = async () => {
    const response = await fetch('https://my-agroprime-app.onrender.com/api/getAllUsers');
    const data = await response.json();
    if (response.ok) {
      setUsers(data);
    } else {
      console.log('Error fetching users');
    }
  };
useEffect(()=>{
    getUsers();
})
  return (
    <>
      <nav className="admin-navbar">
        <img src={logo} alt="Logo" className="logo" />
        <h1 className="nav-title">Remove Users</h1>
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
                users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
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
