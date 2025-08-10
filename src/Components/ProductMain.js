import React from 'react';
import '../Css/ProductMain.css';
import Navbar from './Navbar'; 
import { Link } from 'react-router-dom';
import Footer from './Footer';


function ProductMain() {
  const services = [
  {
    path: '/AgroProducts',
    title: 'Agriculture Products',
    desc: 'We offer complete range of agricultural products including high-quality crops like wheat, rice, maize, onions, and potatoes.',
    image: '/images/offer1.webp',
    icon: '👨‍🌾',
  },
  {
    path: '/CashCrops',
    title: 'Organic Products',
    desc: 'Our organic fertilizers like vermicompost, cow dung manure, and bio-compost enrich the soil naturally and promote sustainable farming.',
    image: '/images/offer2.webp',
    icon: '🥬',
  },
  {
    path: '/Seeds',
    title: 'Seeds Products',
    desc: 'We offer a wide range of high-quality agricultural seeds including certified hybrid and open-pollinated varieties for vegetables, cereals, pulses, and oilseeds.',
    image: '/images/offer3.webp',
    icon: '🌱',
  },
  {
    path: '/equipments',
    title: 'Modern Farming Tools',
    desc: 'We provide a complete range of modern agricultural equipment designed to improve productivity and reduce manual labor.',
    image: '/images/offer4.avif',
    icon: '🚜',
  }
 ];

  return (
    <div style={{backgroundColor:'#b2e3ac64'}}>
      <Navbar/>
      <section className='video'>
        <video
          src="/images/productmainvideo.mp4"
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: 'absolute',
            width: '100%',
            height: '88%',
            objectFit: 'cover',
            top: '55px',
            right: '0px',
          }}
        ></video>
        <h2 className='head'>Explore Our AgroPrime <br />Products</h2>
        <p className='subhead'>Get the best quality products and equipments</p>
      </section>
      <Link className='discover-btn' to="/AgroProducts">
        Explore Products
      </Link>
      <div>
      <p className='websitetitle'>AgroPrime Products</p>
      </div>
      <div className='product'>    
      <div className="product-main">
              {services.map((item, idx) => (
                <Link key={idx} to={item.path} className="whatweoffer-link">
                  <div className="whatweoffer-card">
                    <img src={item.image} alt={item.title} className="whatweoffer-image" />
                    <div className="whatweoffer-content">
                      <div className="whatweoffer-icon">{item.icon}</div>
                      <div className="whatweoffer-titleText">{item.title}</div>
                      <div className="whatweoffer-desc">{item.desc}</div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
           </div> 
           <Footer/>
    </div>
  );
}

export default ProductMain;
