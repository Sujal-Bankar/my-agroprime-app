import React from 'react';
import '../Css/WhatWeOffer.css';
import { Link } from 'react-router-dom';
  
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
  },
  {
    path: '/Weather',
    title: 'Weather Forecast',
    desc: 'Stay informed with real-time weather forecasts tailored for farmers and agricultural activities. Also include forecast map.',
    image: '/images/offer5.webp',
    icon: '🌦️',
  },
  {
    path: '/AllProduct',
    title: 'Other Products',
    desc: 'We also offer a variety of other essential agriculture products including quality animal feed, silage and organic manure.',
    image: '/images/offer6.webp',
    icon: '📦',
  },
];

const WhatWeOffer = () => {
  return (
    <section className="whatweoffer-section">
      <div className="whatweoffer-subtitle">Our Services</div>
      <h2 className="whatweoffer-title">What We Offer</h2>

      <div className="whatweoffer-grid">
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
    </section>
  );
};

export default WhatWeOffer;
