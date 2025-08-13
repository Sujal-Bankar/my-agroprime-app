import React, { useState } from 'react'

const OrderData = () => {

    const [orderData, setOrderData] = React.useState([]);
    const getOrderData = async (req,res)=>{
        const response = await fetch('https://my-agroprime-app.onrender.com/api/getAllOrders');
        const data = await response.json();
        if(response.ok){
            setOrderData(data);
        }
    }
  return (
    <div>
        <button onClick={getOrderData}>Get Order Data</button>
        <ul>
            
        </ul>
                    
    </div>
  )
}

export default OrderData
