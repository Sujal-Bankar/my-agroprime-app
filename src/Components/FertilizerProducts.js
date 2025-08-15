import React, { useEffect, useState } from 'react';
import '../Css/FertilizerProducts.css';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from './CartContext';
import fertilizerproductdata from '../productData/fertilizerProducts'


const FertilizerProducts = () => {
    const [products , setProducts] = useState([]);
    
  
      const { addToCart, cartItems } = useContext(CartContext);
      const [addedItems, setAddedItems] = useState([]);
    
      const cartList = (item, index) => {
        addToCart(item);
        setAddedItems(prev => [...prev, index]);
      };
      const fetchProducts = async()=>{
          try 
          {
          const response = await fetch(`https://my-agroprime-app.onrender.com/api/getAllProducts/fertilizerproducts`);
          const data = await response.json();
          if(response.ok){
            setProducts(data)
          }
        } catch(error){
          console.error(error);
        }
        }
        useEffect(()=>{
          fetchProducts();
        },[])
      
    
  return (
    <div className="fertilizer-page">
      <Navbar/>

      <div className="category-header">
        <span className="back-arrow"><Link to="/Agroproducts" >✕</Link></span>
        <button className="active-tab">fertilizers</button>
      </div>

      <div className="product-grid">
        {products.map((item, i) => (
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

    </div>
  );
};

export default FertilizerProducts;