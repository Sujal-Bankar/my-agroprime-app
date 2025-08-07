import React from 'react';
import { useContext } from 'react';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import '../Css/ProductDetails.css';

const ProductDetails = () => {
    const { cartItems, setCartItems } = useContext(CartContext);

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
            return sum + (price * item.quantity);
        }, 0);
    };

    const handleCheckout = async () => {
  try {
    const email = localStorage.getItem('email');  // ✅ Get logged-in user ID

    if (!email) {
      alert("Please login to place order");
      return;
    }

    const order = {
      email,
      items: cartItems,
      totalAmount: cartItems.reduce((sum, item) => {
        const price = parseFloat(item.price.replace(/[^0-9.]/g, ""));
        return sum + (price * item.quantity);
      }, 0)
    };

    const response = await fetch('http://localhost:7000/api/order', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(order)
    });

    const data = await response.json();

    if (response.ok) {
      alert("Order Placed Successfully!");
      // Optionally clear cart
      // navigate to order done page or order history
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
            <div style={{display:'flex'}}>
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
                    <Link to="/OrderDone" onClick={handleCheckout} state={{ passedList: cartItems }} className="checkout-btn">Proceed to Checkout</Link>
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
          <input type="text" id="firstName" name="firstName" required />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name*</label>
          <input type="text" id="lastName" name="lastName" required />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="email">Email Address*</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone Number</label>
        <input type="tel" id="phone" name="phone" />
      </div>
    </section>

    {/* Shipping Address */}
    <section className="form-section">
      <h3  className='form-title'>Shipping Address</h3>
      <hr />
      <div className="form-group">
        <label htmlFor="street">Street Address*</label>
        <input type="text" id="street" name="street" required />
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="city">City*</label>
          <input type="text" id="city" name="city" required />
        </div>
        <div className="form-group">
          <label htmlFor="state">State*</label>
          <input type="text" id="state" name="state" required />
        </div>
        <div className="form-group">
          <label htmlFor="zip">Zip Code*</label>
          <input type="text" id="zip" name="zip" required />
        </div>
      </div>
    </section>

    {/* Payment Method */}
    <section className="form-section">
      <h3  className='form-title'>Payment Method</h3>
      <div className="form-group">
        <label className='pay-label'>
          <input type="radio" id="cash" name="payment" value="Cash on Delivery" defaultChecked />
          <h5>Cash on Delivery</h5>
        </label>
        <label className='pay-label'>
          <input type="radio" id="upi" name="payment" value="UPI" />
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
