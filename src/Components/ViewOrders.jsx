import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../Css/ViewOrders.css';

const ViewOrder = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchOrders = async () => {
    const email = localStorage.getItem('email');
    if (!email) {
      alert("Please login to view orders");
      return;
    }

    try {
      const res = await fetch(`https://my-agroprime-app.onrender.com/api/order/${email}`);
      const data = await res.json();
      if (res.ok) {
        setOrders(data);
      } else {
        alert("Failed to fetch orders");
      }
    } catch (err) {
      console.error("Order fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <>
      <Navbar />
      
      <div className="order-container">
        <h2>Your Orders</h2>
        {loading ? (
          <p>Loading orders...</p>
        ) : orders.length === 0 ? (
          <p>No orders found.</p>
        ) : (
          orders.map((order, idx) => (
            <div className="order-card" key={order._id || idx}>
              <h4>Order ID: {order._id}</h4>
              <p><strong>Placed On:</strong> {new Date(order.createdAt).toLocaleString()}</p>
              <div className="order-items">
                {order.items.map((item, i) => (
                  <div className="order-item" key={i}>
                    <img src={item.image} alt={item.name} />
                    <div>
                      <h5>{item.name}</h5>
                      <p>Qty: {item.quantity}</p>
                      <p>Price: {item.price}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="order-total">
                <strong>Total:</strong> ₹{order.totalAmount}
              </div>
            </div>
          ))
        )}
      </div>
      <Footer />
    </>
  );
};

export default ViewOrder;
