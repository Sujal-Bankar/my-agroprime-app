import React, { useEffect, useState } from 'react';
import logo from '../images/logo.jpeg';
import '../Css/UsersData.css';
import { useNavigate } from 'react-router-dom';

const UsersData = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [users, setUsers] = useState([]);
    const navigate = useNavigate();

  const getUsers = async () => {
    const response = await fetch('https://my-agroprime-app.onrender.com/api/getAllUsers');
    const data = await response.json();
    if (response.ok) {
      setUsers(data);
    } else {
      console.log('Error fetching users');
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  async function viewUser(email) {
    try {
      const response = await fetch(`https://my-agroprime-app.onrender.com/api/getOneUser/${email}`);
      const data = await response.json();
      if (response.ok) {
        setSelectedUser(data);
        setShowPopup(true);
      } else {
        console.log('Error fetching user details');
      }
    } catch (error) {
      console.log('Fetch error:', error);
    }
  }

  function closePopup() {
    setShowPopup(false);
    setSelectedUser(null);
  }
  function getNavigate(){
      navigate('/AdminMain')
    }
  return (
    <div>
      <nav className="Navbar">
        <img src={logo} alt="" className="logo" />
        <div onClick={getNavigate}><h1 className="nav-title">Admin Dashboard</h1></div>
      </nav>

      <div className="userList-main">
        {users.map((user, index) => (
          <div key={index} className="userList">
            <img src="/images/profile-image.jpg" alt="" className="profile-pic" />
            <div className="title-main">
              <h2 className="user-name">{user.name}</h2>
              <p className="user-phoneno">Phone No. {user.phoneno}</p>
            </div>
            <p onClick={() => viewUser(user.email)} className="view-user">View User</p>
          </div>
        ))}
      </div>

      {showPopup && selectedUser && (
        <div className="popup-main">
          <div className="popup-box">
            <h2>User Details</h2>
            <p><strong>Name:</strong> {selectedUser.name}</p>
            <p><strong>Phone:</strong> {selectedUser.phoneno}</p>
            <p><strong>Email:</strong> {selectedUser.email}</p>
            <p><strong>Address:</strong> {selectedUser.createdAt}</p>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UsersData;
