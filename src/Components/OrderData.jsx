import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../Css/UsersData.css"; 
import logo from '../images/logo.jpg';
import { useNavigate } from "react-router-dom";

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  
    const fetchOrders = async () => {
      try {
        const res = await fetch("https://my-agroprime-app.onrender.com/api/getAllOrders");
        const data = await res.json();
        setOrders(data);
      } catch (err) {
        console.error(err);
      }
    };
    useEffect(()=>{
    fetchOrders();
    })

    const deliveryDone = async(email)=>{
      try {
        const response = await fetch(`https://my-agroprime-app.onrender.com/api/deleteProduct/${email}`);
        const data = await response.json();
        if(response.ok){
          alert('Delivery Data Updated')
        }
      } catch (error) {
        console.error(error.message);
      }
    }
    function getNavigate(){
      navigate('/AdminMain')
    }
  return (
    <>
     <nav className="Navbar">
        <img src={logo} alt="" className="logo" />
        <div onClick={getNavigate}><h1 className="nav-title">Admin Dashboard</h1></div>
      </nav>
      <div className="userList-main">
        <h1 className="page-title">Admin - All Orders</h1>

        {orders.length > 0 ? (
          orders.map((order) => (
            <div key={order._id} className="userdata-card">
              <h2>Order ID: {order._id}</h2>
              <button onClick={deliveryDone(order.email)}>Confirm Delivery</button>
              <p><strong>Customer:</strong> {order.shippingInfo.firstName} {order.shippingInfo.lastName}</p>
              <p><strong>Email:</strong> {order.email}</p>
              <p><strong>Phone:</strong> {order.shippingInfo.phone}</p>
              <p><strong>Address:</strong> {order.shippingInfo.street} {order.shippingInfo.city} {order.shippingInfo.state}</p>
              <div className="userdata-products">
                <strong>Products:</strong>
                {order.items.map((item) => (
                  <div key={item._id} className="userdata-product-item">
                    {item.name} (x{item.quantity})
                  </div>
                ))}
              </div>
              <p><strong>Total:</strong> ₹ {order.totalAmount}/-</p>
              <p><strong>Date:</strong> {new Date(order.createdAt).toLocaleString()}</p>
            </div>
          ))
        ) : (
          <p>No orders found.</p>
        )}
      </div>
    </>
  );
};

export default AdminOrders;
