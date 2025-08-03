import React from "react";
import { useLocation } from "react-router-dom";
import "../Css/OrderDone.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const OrderDone = () => {
  const location = useLocation();
  const product = location.state?.product;

  return ( 
    <div className="page">
      <div>
        <Navbar/>
      </div>
      <div className="card">
        <div className="icon-check">✔</div>
        <h1 className="title">Order Confirmed!</h1>
        <p className="subtitle">
          Thank you for your purchase of our agricultural products.
        </p>

        <div className="order-summary">
          <h2>Order Summary</h2>
          <div className="row">
            <span>{product?.name || "No Product Selected"}</span>
            <span className="price">{product?.price || "$0.00"}</span>
          </div>
          <div className="row">
            <span>Shipping</span>
            <span className="price">$5.99</span>
          </div>
          <div className="row total">
            <span>Total</span>
            <span className="price total-price">
              {product ? (
                `$${(parseFloat(product.price.replace(/[^0-9.]/g, '')) + 5.99).toFixed(2)}`
              ) : (
                "$5.99"
              )}
            </span>
          </div>
        </div>
          
                
        <div className="shipping">
          <h3>Shipping to</h3>
          <p>
            123 Farm Lane <br />
            Agri Village, CA 90210 <br />
            United States
          </p>
        </div>

        <div className="delivery">
          <span className="clock">⏱</span>
          <div>
            <p className="delivery-title">Estimated Delivery</p>
            <p className="delivery-date">You Will Recieve The Delivery Within 15 Days...</p>
          </div>
        </div>

        <div className="buttons">
          <Link to="/AgroProducts" className="btn-primary">Continue Shopping</Link>
        </div>

        <p className="footer-text">
          We guarantee the freshest produce, harvested at peak ripeness and
          delivered with care from our family farm to your table.
        </p>
      </div>
    </div>
  );
};

export default OrderDone;
