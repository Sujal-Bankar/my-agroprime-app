import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Css/OrderDone.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const OrderDone = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchOrders = async () => {
    const email = localStorage.getItem("email");
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

  if (loading) return <div>Loading...</div>;

  const latestOrder = orders[orders.length - 1]; // Show most recent

  const calculateSubtotal = () => {
    return latestOrder?.items.reduce((sum, item) => {
      const price = parseFloat(item.price.replace(/[^0-9.]/g, ""));
      return sum + price * (item.quantity || 1);
    }, 0) || 0;
  };

  const shippingFee = 1200;
  const totalAmount = calculateSubtotal() + shippingFee;

  return (
    <>
      <Navbar />

      <div className="page">
        <div className="card">
          <div>
            <img
              className="checkmark"
              src="/images/checkmark.gif"
              alt="Order Confirmed"
            />
          </div>
          <h1 className="title">Order Confirmed!</h1>
          <p className="subtitle">
            Thank you for your purchase of our agricultural products.
          </p>

          <div className="order-summary">
            <h2>Order Summary</h2>
            {latestOrder?.items.map((item, index) => (
              <div className="row" key={index}>
                <span>{item?.name || "No Product Selected"}</span>
                <span className="price">{item?.price || "₹0.00"}</span>
                <span className="price">{item.quantity}</span>
              </div>
            ))}
            <div className="row">
              <span>Shipping</span>
              <span className="price">₹{shippingFee}</span>
            </div>
            <div className="row total">
              <span>Total</span>
              <span className="price total-price">₹{totalAmount.toFixed(2)}</span>
            </div>
          </div>

          <div className="shipping">
            <h3>Shipping to</h3>
            <p>
              {latestOrder.shippingInfo.street}<br/>
              {latestOrder.shippingInfo.city} <br/>
              {latestOrder.shippingInfo.state}
              {latestOrder.shippingInfo.zip}
            </p>
          </div>

          <div className="delivery">
            <span className="clock">⏱</span>
            <div>
              <p className="delivery-title">Estimated Delivery</p>
              <p className="delivery-date">You will receive the delivery within 15 days...</p>
            </div>
          </div>

          <div className="buttons">
            <Link to="/AgroProducts" className="btn-primary">
              Continue Shopping
            </Link>
          </div>

          <p className="footer-text">
            We guarantee the freshest produce, harvested at peak ripeness and
            delivered with care from our family farm to your table.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default OrderDone;
