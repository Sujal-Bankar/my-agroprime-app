import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
const HeroSection = () => {
  const [hover,setHover]=useState(false);
  const styles = {
    hero: {
      height: '90vh',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      position: 'relative',
      top:'45px',
      color: 'white',
      padding: '40px 60px', // padding from top & left
    },
    heading: {
      fontSize: '2.8rem',
      fontWeight: 'bold',
      textShadow: '4px 4px 8px rgba(0, 0, 0, 0.6)',
      margin: 0,
      position: 'absolute',
      top: '250px',
      left: '60px',
      maxWidth: '600px',
    },
    button: {
      fontWeight:'700',
      position: 'absolute',
      top: '67%',
      left: '16%',
      transform: 'translate(-50%, -50%)',
      padding: '12px 28px',
      backgroundColor: 'rgb(39 103 41)',
      textDecoration:'none',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      fontSize: hover?'22px':'20px',
      cursor: 'pointer',
      transition: '0.3s ease',
      boxShadow:hover? '0 4px 8px black':'0 2px 4px black'
    }
  };
  const navigate = useNavigate();
const email = localStorage.getItem('email');

  function handleLogout(){
    localStorage.removeItem("email"); // If you're storing it too
    alert("You have been logged out.");
    navigate("/");
    window.location.reload();
  }
  return (
    <section style={styles.hero}>
      <video src="/images/plant123video.mp4" autoPlay
        loop
        muted
        playsInline
        
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          top:'0px',
          right:'0px'
          }}></video>
          <img src="/images/profile-image.jpg" alt="profile" style={{height:'60px' ,position:'absolute',borderRadius:'50%',margin:'20px 0 0 1080px'}}/>
          <h3 style={{ position: "absolute", color: "black" ,textShadow:'0 1px 1px white',fontSize:'20px', margin:'35px 0 0 1150px'}}>
            {email? email : "Guest Login"}
            </h3>
          <h4 onClick={handleLogout} style={{ position: "absolute", color: "red" ,textShadow:'0 1px 1px white',fontSize:'20px',margin:'60px 0 0 1150px',cursor:'pointer'}}>{email?"Logout":""}</h4>
      <h2 style={styles.heading}>Empowering Agriculture, Nourishing Future</h2>
      <Link
        style={styles.button}
        to="/AboutUs"
        onMouseEnter={()=>setHover(true)}
        onMouseLeave={()=>setHover(false)}
      >
        Discover More
      </Link>
    </section>
  );
};

export default HeroSection;