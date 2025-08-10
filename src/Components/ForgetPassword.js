import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../Css/ForgetPassword.css';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const ForgetPassword = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_qs7mio8', 'YOUR_TEMPLATE_ID', form.current, {
        publicKey: 'YOUR_PUBLIC_KEY',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
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
          <form onSubmit={sendEmail}>
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
