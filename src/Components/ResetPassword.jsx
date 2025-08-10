import React, { useState } from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import '../Css/Login.css'

const ResetPassword = () => {

    const [form , setForm] = useState({email:" ",password:" ",confirmPassword:" "});

    function handleChange(e){
        setForm({...form,[e.target.name]:e.target.value});
    }

    const handleReset = async (e) => {
        e.preventDefault();        
        const email = localStorage.getItem('email   ');
        if(form.password!=form.confirmPassword){
            alert("Passwords do not match");
        }
        try {
            const response = await fetch(`https://my-agroprime-app.onrender.com/api/resetpassword/${email}`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form),
                });
                const data = await response.json();
                if(response.ok){
                    alert("Password reset successful");
                }
                else{
                    alert("Password reset failed");
                    }
            }
         catch (error) {
            console.log(error);
            
        }
        

    }

  return (
  <div className='login-main'>
     
     <Navbar/>
      
      <div className="login-box-container">
        <div className="login-box">
          <h2>Reset Your Password!</h2>
          <p>Reset your password by entering your email address and a new password.</p>
          <form onSubmit={handleReset}>
            <input type="email" placeholder="Email" name="email" onChange={handleChange} required />
            <input type="password" placeholder="New Password" name="password" onChange={handleChange} required />
            <input type="password" placeholder="Confirm Password" name="confirmPassword" onChange={handleChange} required />
            
            <button type="submit">Reset Password</button>
          </form>
          <div className="signup-link">
            Remembered Your Password ? <Link to="/login">Login Back !</Link>
          </div>
        </div>
      </div>
      </div>
  )
}

export default ResetPassword
