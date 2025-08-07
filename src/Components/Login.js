import React, { useState } from 'react';
import '../Css/Login.css';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link, useNavigate } from 'react-router-dom';
function Login() {

   const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:7000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message);
        localStorage.setItem('email', data.user.email);
        navigate("/"); // Or redirect to dashboard/home
      } else {
        alert(data.message || "Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

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
          <form onSubmit={handleLogin}>
            <input type="email" placeholder="Email" name="email" onChange={handleChange} required />
            <input type="password" placeholder="Password" name="password" onChange={handleChange} required />
            <div className="options">
              <label>
                <input type="checkbox" /> Remember me
              </label>
              <Link to="/ForgetPassword">Forgot your password?</Link>
            </div>
            <button type="submit">Sign in</button>
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
