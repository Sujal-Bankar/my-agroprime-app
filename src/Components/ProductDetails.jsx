import React, { useState, useContext } from "react";
import { CartContext } from "./CartContext";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../Css/ProductDetails.css";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_test_51RvdUQKFwmFPDNtxzdOOAsgKn2t0zxzRJ8I1jguJykRtKymcZxSpyDS1dkuIkoozYsFFPNrpsLBnhAjhzB18duik00kBHsFkci");
 
const ProductDetails = () => {
  const navigate = useNavigate();
  const { cartItems, setCartItems } = useContext(CartContext);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    payment: "Cash on Delivery",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const isFormValid = () => {
    const { firstName, lastName, street, city, state, zip } = formData;
    return firstName && lastName && street && city && state && zip;
  };

  const increaseQty = (index) => {
    const updated = [...cartItems];
    updated[index].quantity += 1;
    setCartItems(updated);
  };

  const decreaseQty = (index) => {
    const updated = [...cartItems];
    if (updated[index].quantity > 1) updated[index].quantity -= 1;
    setCartItems(updated);
  };

  const removeItem = (indexToRemove) => {
    const updated = cartItems.filter((_, index) => index !== indexToRemove);
    setCartItems(updated);
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((sum, item) => {
      const price = parseFloat(item.price.replace(/[^0-9.]/g, ""));
      return Math.round(sum + price * item.quantity);
    }, 0);
  };

  const handlePayment = async () => {
    if (!isFormValid()) {
      alert("Please fill all fields before payment!");
      return;
    }

    const stripe = await stripePromise;

    const response = await fetch("https://my-agroprime-app.onrender.com/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        items: cartItems.map(item => ({
          name: item.name,
          amount: parseInt(item.price.replace(/[^0-9]/g, "")) * 100,
          quantity: item.quantity
        })),
        email: localStorage.getItem("email"),
        shipping: formData
      }),
    });

    const session = await response.json();
    const result = await stripe.redirectToCheckout({ sessionId: session.id });

    if (result.error) alert(result.error.message);
  };

  return (
    <>
      <Navbar />
      <div className="success-message">
        <div className="success-text">
          <p className="success-title">Item successfully added to your cart!</p>
          <p className="success-subtext">You can continue shopping or proceed to checkout.</p>
        </div>
      </div>

      <div className="product-details-container" style={{ display: "flex" }}>
        <div className="product-details">
          <div className="cart-container">
            <h1>Your Shopping Cart ({cartItems.length} items)</h1>
          </div>

          {cartItems.map((item, index) => (
            <div className="cart-item" key={index}>
              <div>
                <img src={item.image} className="product-img" alt={item.name} />
              </div>
              <div className="product-info">
                <div className="item-header">
                  <h1>{item.name}</h1>
                  <h2>{item.price}</h2>
                </div>
                <p className="item-desc">{item.desc}</p>
                <div className="quantity-controls">
                  <button onClick={() => decreaseQty(index)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQty(index)}>+</button>
                </div>
                <div className="item-actions">
                  <span className="remove" onClick={() => removeItem(index)}>Remove</span>
                </div>
              </div>
            </div>
          ))}

          {/* Shipping Form */}
          <div className="checkout-form">
            <h2>Shipping Details</h2>
            <div className="form-row">
              <input
                type="text"
                name="firstName"
                placeholder="First Name *"
                value={formData.firstName}
                onChange={handleChange}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name *"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
            <div className="form-row">
              <input
                type="text"
                name="street"
                placeholder="Street *"
                value={formData.street}
                onChange={handleChange}
              />
            </div>
            <div className="form-row">
              <input
                type="text"
                name="city"
                placeholder="City *"
                value={formData.city}
                onChange={handleChange}
              />
              <input
                type="text"
                name="state"
                placeholder="State *"
                value={formData.state}
                onChange={handleChange}
              />
              <input
                type="text"
                name="zip"
                placeholder="Zip *"
                value={formData.zip}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="cart-summary">
            <div className="summary-row">
              <h2>Subtotal</h2>
              <h2>₹{calculateSubtotal().toFixed(2)}</h2>
            </div>
            <div className="summary-row">
              <h2>Shipping</h2>
              <h2 className="shipping-fee">₹1200</h2>
            </div>
            <div className="summary-row total">
              <h2>Total</h2>
              <h2>₹{(calculateSubtotal() + 1200).toFixed(2)}</h2>
            </div>
            <div className="checkout-container">
              <button onClick={handlePayment} className="checkout-btn">Buy Now</button>
              <p className="continue-text">
                or <br />
                <Link to="/AgroProducts">Continue Shopping</Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProductDetails;