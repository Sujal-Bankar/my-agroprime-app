import React, { useState } from 'react'

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
        <button onClick={getUsers}>Get Users</button>
        <ul>
            {
                users
          }
        </ul>

    </div>
  )
}

export default UsersData
