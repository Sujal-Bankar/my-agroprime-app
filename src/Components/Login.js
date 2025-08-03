import React from 'react';
import '../Css/Login.css';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
function Login() {
  return (
    <>
      {/* Navbar */}
      <div>
        <Navbar/>
      </div>

      <div className="login-box-container">
        <div className="login-box">
          <h2>Welcome Back!</h2>
          <p>Sign in to access your AgroPrime account</p>
          <form>
            <input type="email" placeholder="Email address" required />
            <input type="password" placeholder="Password" required />
            <div className="options">
              <label>
                <input type="checkbox" /> Remember me
              </label>
              <Link to="/ForgetPassword">Forgot your password?</Link>
            </div>
            <Link to="/"><button type="submit">Sign in</button></Link>
          </form>
          <div className="signup-link">
            Don't have an account? <Link to="/sign">Sign up</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
