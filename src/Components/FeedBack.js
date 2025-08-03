// FeedBack.js
import React from 'react';
import './FeedbackForm.css';

const FeedBack = () => {
  return (
    <div className="feedback-page">
      {/* Navigation Bar */}
      <div className="navbar">
        <div className="logo">
          <img src="https://img.icons8.com/ios-filled/50/FFD700/sun.png" alt="AgroPrime logo" />
          <span>AgroPrime</span>
        </div>
        <nav>
          <a href="login.html" className="active">Home</a>
          <a href="#">About</a>
          <a href="#">Information</a>
          <a href="#">Blog</a>
          <a href="#">Shop</a>
          <a href="#">Contact</a>
          <a href="login.html">Login</a>
        </nav>
      </div>

      {/* Feedback Box Center */}
      <div className="feedback-box-container">
        <div className="feedback-box">
          <h2>We Value Your Feedback!</h2>
          <p>Help us improve your AgroPrime experience.</p>
          <form>
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email address" required />
            <textarea placeholder="Type your feedback here..." required></textarea>
            <button type="submit">Submit Feedback</button>
          </form>
        </div>
      </div>

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
};

export default FeedBack;