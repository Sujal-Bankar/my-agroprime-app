import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Css/HeroSection.css';

const HeroSection = () => {
  const navigate = useNavigate();
  const email = localStorage.getItem('email');

  function handleLogout() {
    localStorage.removeItem("email");
    alert("You have been logged out.");
    navigate("/");
    window.location.reload();
  }

  return (
    <section className='hero'>
      <video
        src="/images/plant123video2-vmake.mp4"
        autoPlay
        loop
        muted
        playsInline
        className='hero-video'
      ></video>

      <img
        src="/images/profile-image.jpg"
        alt="profile"
        className='profile-img'
      />

      <h3 className='email-text'>
        {email ? email : "Guest Login"}
      </h3>

      <h4 className='logout-text' onClick={handleLogout}>
        {email ? "Logout" : ""}
      </h4>

      <h2 className='main-title'>
        Empowering Agriculture, Nourishing Future
      </h2>

      <Link
        className='hero-button'
        to="/AboutUs"
      >
        Discover More
      </Link>
    </section>
  );
};

export default HeroSection;
