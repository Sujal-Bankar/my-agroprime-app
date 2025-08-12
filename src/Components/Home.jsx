import React, { useEffect, useState } from 'react'
import PageIcon from './PageIcon'
import HeroSection from './HeroSection'
import IntroSection from './IntroSection'
import WhatWeOffer from './WhatWeOffer'
import FAQSection from './FAQSection'
import WhyChooseUs from './WhyChooseUs'
import Footer from './Footer'
import Navbar from './Navbar'
import '../Css/Home.css'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      const email = localStorage.getItem('email');
      if (!email) {
        setShowPopup(true);
      }
    }, 5000); 

    return () => clearTimeout(timer); 
  }, []);

  const handleLoginRedirect = () => {
    setShowPopup(false);
    navigate("/login"); 
  };


  return (
    <div className='home-main'>
    <Navbar variant="hero" />
    {showPopup && (
        <div className="popup-main">
          <div className="popup-box">
            <h2>Please Login</h2>
            <p>Please Login to Enjoy our Services...</p>
            <button onClick={handleLoginRedirect}>Login Now</button>
          </div>
        </div>
      )}
      <PageIcon />
      <HeroSection />
      <IntroSection />
      <WhatWeOffer />
      <FAQSection />
      <WhyChooseUs />
      <Footer />
    </div>
  )
}

export default Home
