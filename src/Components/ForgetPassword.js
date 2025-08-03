import React from 'react';
import '../Css/ForgetPassword.css';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const ForgetPassword = () => {
  return (
    <div>
      <Navbar/>

      <div className="forgot-box-container">
        <div className="forgot-box">
          <h2>Forgot Password?</h2>
          <p>
            Enter your email address below and we'll send you instructions to
            reset your password.
          </p>
          <form>
            <input type="email" placeholder="Email address" required />
            <button type="submit">Send Reset Link</button>
          </form>
          <div className="login-link">
            Remembered your password? <Link to="/Login">Sign in</Link>
          </div>
        </div>
      </div>

      <Footer/>     
    </div>
  );
};

export default ForgetPassword;
