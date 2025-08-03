import React from 'react';
import '../Css/ProductMain.css';
import Navbar from './Navbar'; 
import { Link } from 'react-router-dom';


function ProductMain() {
  return (
    <div className="main-container">
      {/* ✅ Navbar at top */}
      <Navbar />

      {/* ✅ Push content below the fixed/absolute navbar */}
      <main className="main-content" style={{ marginTop: '100px' }}>
        <h1>Premium Agricultural Products for Modern Farmers</h1>
        <p>Quality fertilizers, seeds, and crops directly from trusted suppliers</p>
        <p>🌿 Welcome to AgroPrime – Your Trusted Farming Companion AgroPrime is your one-stop destination for high-quality agricultural products tailored for the needs of modern, progressive farmers. We’re passionate about empowering farmers with the tools, knowledge, and supplies they need to maximize yield, reduce costs, and adopt sustainable practices.</p>
        
        <p>🧪 What We Offer<br/>
          <strong>Fertilizers:</strong> Organic and chemical fertilizers tested and certified for crop safety.<br/>
          <strong>Seeds:</strong> High-germination, climate-resilient seeds for vegetables, grains, and fruits.<br/>
          <strong>Agro Equipment:</strong> From hand tools to automated machines — everything a farmer needs.<br/>
          <strong>Pesticides & Growth Boosters:</strong> Protect and strengthen your crops with safe solutions.<br/>
          <strong>Crops & Produce:</strong> Buy or sell crops through our trusted farmer marketplace.
        </p>

        <p>🌟 Our Vision<br/>
          To build a future where farming is profitable, sustainable, and tech-driven. We believe that farmers deserve better access to products, knowledge, and community support.
        </p> 

        <p>🤝 <strong>Why Farmers Trust AgroPrime</strong><br/>
          1️⃣ Fast and Reliable Delivery across India<br/>
          2️⃣ Secure Payments with easy return policies<br/>
          3️⃣ 24/7 Farmer Support Line for all product-related queries<br/>
          4️⃣ Learning Hub with tips on crop rotation, irrigation, organic farming, and more<br/>
          5️⃣ Data-Driven Suggestions for smarter farming decisions
        </p>

        <Link to="/AgroProducts" className="product-button">Products</Link>
      </main>

      {/* Footer */}
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
}

export default ProductMain;
