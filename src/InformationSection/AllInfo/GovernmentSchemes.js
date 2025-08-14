import React from 'react';
import { useNavigate } from 'react-router-dom';

const GovernmentSchemes = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '20px' }}>
      
      <button onClick={() => navigate("/")}>⬅ Back to Information</button>
      <h1>GovernmentSchemes</h1>
      <p>Here is detailed information about soil health and nutrient management.</p>
      
      
      <button onClick={() => navigate("/")}>⬅ Back to Information</button>
    </div>
  );
};

export default GovernmentSchemes;