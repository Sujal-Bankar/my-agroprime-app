import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import '../Css/OrderDone.css'
const OrderDone = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const placeOrder = async () => {
      const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
      const shippingInfo = JSON.parse(localStorage.getItem("shippingInfo")) || {};
      const email = localStorage.getItem("email");

      if (!email || cartItems.length === 0) {
        navigate("/");
        return;
      }

      const response = await fetch("https://my-agroprime-app.onrender.com/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          items: cartItems,
          shippingInfo,
          totalAmount: cartItems.reduce(
            (sum, item) => sum + parseFloat(item.price.replace(/[^0-9.]/g, "")) * item.quantity,
            0
          )
        })
      });

      if (response.ok) {
        alert("Order placed successfully!");
        localStorage.removeItem("cart");
      } else {
        alert("Failed to place order");
      }
    };

    placeOrder();
  }, [navigate]);

  return (
    <>
    <div className="payment-success">
  <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
    <circle className="checkmark-circle" cx="26" cy="26" r="25" fill="none"/>
    <path className="checkmark-check" fill="none" d="M14 27l7 7 16-16"/>
  </svg>
  <h2>Payment Successful!</h2>
  <p>Your order has been confirmed. Thank you for shopping with us!</p>
    
<button style={{textDecoration:'none',marginTop:'30px'}}>
  <Link to="/ViewOrders">
  View Your Order
  </Link>
</button>
</div>
    </>
  );
};

export default OrderDone;
