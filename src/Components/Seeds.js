import React, { useState } from 'react';
import '../Css/cashcrops.css';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from './CartContext';
import seedproductdata from '../productData/seedProducts'

const SeedsPage = () => {

  const seedProducts = [
    ...seedproductdata
];
  const { addToCart, cartItems } = useContext(CartContext);
  const [addedItems, setAddedItems] = useState([]);

  const cartList = (item, index) => {
    addToCart(item);
    setAddedItems(prev => [...prev, index]);
  };

  
  return (
    <div className="seeds-page">
      <Navbar/>

      <div className="category-header">
        <span className="back-arrow"><Link to="/Agroproducts" >✕</Link></span>
        <button className="active-tab">Seeds</button>
      </div>

      <div className="product-grid">
        {seedProducts.map((item, i) => (
          <div className="product-card" key={i}>
            <img src={item.image} alt={item.name} />
            <h4>{item.name}</h4>
            <p className="desc">{item.description}</p>
            <p className="price"><i>{item.price}</i> <span> / {item.unit}</span></p>
            <div style={{ display: 'flex', marginTop: '20px',marginLeft:'10px', width: '180px', justifyContent: 'center' }}>
                {addedItems.includes(i) && (
                  <img
                    src="/images/checkmark.gif"
                    alt="Done"
                    style={{ height: '25px', marginTop: '15px',width:'20%'}}
                  />
                )}
                <button onClick={() => cartList(item, i)} className="buy-btn" 
                disabled={addedItems.includes(i)} style={addedItems.includes(i)? {backgroundColor:'green',color:'white'}:{}}> 
                {addedItems.includes(i) ? 'Added' : 'Add To Cart'}
                </button>
              </div>

           </div>
        ))}
      </div>

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

export default SeedsPage;
