import React from 'react';
import { useNavigate } from 'react-router-dom';

const Irrigation = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '20px' }}>
      <h1>Irrigation</h1>
      <p>Here is detailed information about soil health and nutrient management.</p>
      
      {/* Back Button */}
      <button onClick={() => navigate("/")}>⬅ Back to Information</button>
    </div>
  );
};

export default Irrigation;