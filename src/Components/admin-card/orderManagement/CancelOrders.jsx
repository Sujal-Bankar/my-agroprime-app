import React, { useState, useEffect } from "react";
import "../../../Css/CancelOrders.css";
import logo from "../../../images/logo.jpg";
import { useNavigate } from "react-router-dom";

const CancelOrders = () => {
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

    const handleCancel = async (id)=>{
        try {
        const response = await fetch(`https://my-agroprime-app.onrender.com/api/deleteOrder/${id}`);
        const data = await response.json();
        if(response.ok){
          alert('Delivery Cancelled')
          navigate('/CancelOrders')        }
      } catch (error) {
        console.error(error.message);
      }
    }
    
  return (
    <>
      <nav className="admin-navbar">
        <img src={logo} alt="Logo" className="logo" />
        <h1 onClick={()=>{navigate("/AdminMain")}} className="nav-title">Admin DashBoard</h1>
      </nav>

      <div className="cancel-orders-container">
        <h2>All Orders</h2>
        <div className="cancel-orders-grid">
          {orders.length > 0 ? (
            orders.map((order) => (
              <div key={order._id} className="cancel-order-card">
                <h3>Order ID: {order._id}</h3>
                <p><strong>User ID:</strong> {order.shippingInfo.firstName} {order.shippingInfo.lastName}</p>
                <p><strong>Total:</strong> ₹{order.totalAmount}</p>
                <p><strong>Status:</strong> Pending</p>
                <button
                  className="cancel-btn"
                  onClick={() => handleCancel(order._id)}
                >
                  Cancel Order
                </button>
              </div>
            ))
          ) : (
            <p>No orders available</p>
          )}
        </div>
      </div>
    </>
  );
};

export default CancelOrders;
