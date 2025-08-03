import React from 'react';
import '../Css/Sign.css';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
const Sign = () => {
  return (
    <div className="signup-page">
     
     <Navbar/>
      <div className="signup-box-container">
        <div className="signup-box">
          <h2>Create an Account</h2>
          <p>Join AgroPrime and empower your agri-journey</p>
          <form>
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email address" required />
            <input type="tel" placeholder="Phone Number (optional)" />
            <input type="password" placeholder="Password" required />
            <input type="password" placeholder="Confirm Password" required />
            <label className="terms">
              <input type="checkbox" required /> I agree to the Terms and Conditions
            </label>
            <Link to="/"><button type="submit">Sign up</button></Link>
          </form>
          <div className="login-link">
            Already have an account? <Link to="/Login">Sign in</Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer>
        <Footer/>
      </footer>
    </div>
  );
};

export default Sign;