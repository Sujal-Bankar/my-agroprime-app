import React, { useEffect, useState } from 'react';
import '../Css/AgroProducts.css';
import Navbar from './Navbar';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from './CartContext';
import agroproductdata from '../productData/agroProducts'
const AgroProducts = () => {
  const navigate = useNavigate();
  const { addToCart, cartItems } = useContext(CartContext);
  const [addedItems, setAddedItems] = useState([]);

  const products =[
    ...agroproductdata
  ]

  const cartList = (item, index) => {
    addToCart(item);
    setAddedItems(prev => [...prev, index]);
  };
  const email=localStorage.getItem('email');
  function handleclick() {
  if (!email) {
    alert("Please login to add items to cart");
    return;
  }

  if (!cartItems.length) {
    alert("Your cart is empty");
    return;
  }

  navigate("/ProductDetails");
}


  return (
    <div className="agro-container">
      <Navbar />

      <main className="main-section" style={{ marginTop: '100px' }}>
        <h1>Our Agricultural Products</h1>
        <p className="subtitle">Quality products sourced directly from trusted farmers and suppliers</p>

        <div className="category-buttons">
          <Link className='c-btn' to="/AllProduct">All Products</Link>
          <Link className='c-btn' to="/FertilizerProducts">Fertilizers</Link>
          <Link className='c-btn' to="/CashCrops">Cash Crops</Link>
          <Link className='c-btn' to="/Seeds">Seeds</Link>
          <Link className='c-btn' to="/Equipments">Equipments</Link>
        </div>
      <img src="/images/cart.jpg" style={{cursor:'pointer',height:'70px',borderRadius:'50%',position:'absolute',bottom:'460px',left:'400px'}} onClick={handleclick}/>
      <div className='count'>{cartItems.length}</div>
        <div className="product-cards">
          {products.map((item, i) => (
            <div className="product-card" key={i}>
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p className="desc">{item.desc || <>&nbsp;</>}</p>
              <p className="price">{item.price}</p>
              <div style={{ display: 'flex', marginTop: '20px',marginLeft:'10px', width: '180px', justifyContent: 'center' }}>
                {addedItems.includes(i) && (
                  <img
                    src="/images/checkmark.gif"
                    alt="Done"
                    style={{ height: '25px', marginTop: '15px',width:'20%'}}
                  />
                )}
                <button onClick={() => cartList(item, i)} className="buy-button" 
                disabled={addedItems.includes(i)} style={addedItems.includes(i)? {backgroundColor:'green',color:'white'}:{}}> 
                {addedItems.includes(i) ? 'Added' : 'Add To Cart'}
                </button>
              </div>
            </div>
          ))}
        </div>

        <Link to="/AllProduct" className="view-all">View All Products</Link>
      </main>

      <footer>
        <div>2025 AgroPrime</div>
        <div className="social-links">
          <a href="#">Facebook</a> |
          <a href="#">Instagram</a> |
          <a href="#">Youtube</a>
        </div>
      </footer>
    </div>
  );
};

export default AgroProducts;
