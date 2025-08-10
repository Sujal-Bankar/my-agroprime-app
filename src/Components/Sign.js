import React, { useState } from 'react';
import '../Css/Sign.css';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link, useNavigate } from 'react-router-dom';

const Sign = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phoneno: ""
  });

  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    
    if (form.password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      console.log("Form data being sent:", form);

      const response = await fetch("https://my-agroprime-app.onrender.com/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message);
        navigate('/login');
      } else {
        alert(data.message || "Signup failed");
      }
    } catch (error) {
      console.error("Signup error:", error);
    }

  };

  return (
    <div className="signup-page">
      <Navbar />
      <div className="signup-box-container">
        <div className="signup-box">
          <h2>Create an Account</h2>
          <p>Join AgroPrime and empower your agri-journey</p>
          <form onSubmit={handleSignup}>
            <input type="text" placeholder="Full Name" name="name" onChange={handleChange} required />
            <input type="email" placeholder="Email address" name="email" onChange={handleChange} required />
            <input type="tel" placeholder="Phone Number (optional)" name="phoneno" onChange={handleChange} required />
            <input type="password" placeholder="Password" name="password" onChange={handleChange} required />
            <input type="password" placeholder="Confirm Password" name="confirmPassword" onChange={(e) => setConfirmPassword(e.target.value)} required />
            <label className="terms">
              <input type="checkbox" style={{width:'30px'}} required /><p>I agree to the Terms and Conditions</p>
            </label>
            <button className="signup-btn" type="submit">Sign up</button>
          </form>
          <div className="login-link">
            Already have an account? <Link to="/Login">Sign in</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sign;
