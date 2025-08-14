import React, { useState, useContext } from 'react';
import { CartContext } from './CartContext';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import '../Css/ProductDetails.css';

const ProductDetails = () => {
  const navigate = useNavigate();
  const { cartItems, setCartItems } = useContext(CartContext);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    payment: 'Cash on Delivery',
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
    if (updated[index].quantity > 1) {
      updated[index].quantity -= 1;
      setCartItems(updated);
    }
  };

  const removeItem = (indexToRemove) => {
    const updated = cartItems.filter((_, index) => index !== indexToRemove);
    setCartItems(updated);
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((sum, item) => {
      const price = parseFloat(item.price.replace(/[^0-9.]/g, ""));
      return Math.round(sum + (price * item.quantity));
    }, 0);
  };

  const handleCheckout = async () => {
    try {
      if (!isFormValid()) {
        alert("Please fill all required fields before checking out.");
        return;
      }

      const email = localStorage.getItem('email');
      if (!email) {
        alert("Please login to place order");
        return;
      }

      const order = {
        email,
        items: cartItems,
        shippingInfo: formData,
        totalAmount: calculateSubtotal()
      };

      const response = await fetch('https://my-agroprime-app.onrender.com/api/order', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(order)
      });

      const data = await response.json();

      if (response.ok) {
        alert("Order Placed Successfully!");
        navigate('/OrderDone');
      } else {
        alert("Failed to place order");
      }

    } catch (err) {
      console.error("Checkout error:", err);
    }
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

      <div style={{ display: 'flex' }}>
        <div className='product-details'>
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
              <button onClick={handleCheckout} className="checkout-btn">Proceed to Checkout</button>
              <p className="continue-text">or <Link to="/AgroProducts">Continue Shopping</Link></p>
            </div>
          </div>
        </div>

        <div className="checkout-form-container">
          <form className="checkout-form">
            <h1>Complete Your Purchase</h1>

            <section className="form-section">
              <h3 className='form-title'>Personal Information</h3>
              <hr />
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name*</label>
                  <input type="text" id="firstName" name="firstName" required value={formData.firstName} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name*</label>
                  <input type="text" id="lastName" name="lastName" required value={formData.lastName} onChange={handleChange} />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
              </div>
            </section>

            <section className="form-section">
              <h3 className='form-title'>Shipping Address</h3>
              <hr />
              <div className="form-group">
                <label htmlFor="street">Street Address*</label>
                <input type="text" id="street" name="street" required value={formData.street} onChange={handleChange} />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="city">City*</label>
                  <input type="text" id="city" name="city" required value={formData.city} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="state">State*</label>
                  <input type="text" id="state" name="state" required value={formData.state} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="zip">Zip Code*</label>
                  <input type="text" id="zip" name="zip" required value={formData.zip} onChange={handleChange} />
                </div>
              </div>
            </section>

            <section className="form-section">
              <h3 className='form-title'>Payment Method</h3>
              <div className="form-group">
                <label className='pay-label'>
                  <input type="radio" name="payment" value="Cash on Delivery" checked={formData.payment === "Cash on Delivery"} onChange={handleChange} />
                  <h5>Cash on Delivery</h5>
                </label>
                <label className='pay-label'>
                  <input type="radio" name="payment" value="UPI" checked={formData.payment === "UPI"} onChange={handleChange} />
                  <h5>UPI</h5>
                </label>
              </div>
            </section>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProductDetails;
