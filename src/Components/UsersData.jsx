import React, { useState } from 'react'
import logo from '../images/logo.jpeg'
import '../Css/UsersData.css'

const UsersData = () => {

    const [users, setUsers] = React.useState([]);
    const getUsers = async (req,res) =>{
        const response = await fetch('https://my-agroprime-app.onrender.com/api/getAllUsers');
        const data = await response.json();
        if(response.ok){        
        setUsers(data);
        }
        else{
            console.log("Error");
        }
    }

  return (
    <div>
        <nav className='Navbar'>
            <img src={logo} alt="" className='logo'/>
            <h1 className='nav-title'>Admin Dashboard</h1>
        </nav>

        
    </div>
  )
}

export default UsersData
