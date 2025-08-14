import React from 'react';
import { useNavigate } from 'react-router-dom';
import cropimg from './cropimg.jpeg';
import cropculti1 from './cropculti1.jpeg';
import cropculti2 from './cropculti2.jpeg';
import cropculti3 from './cropculti3.jpeg';
import './CropCultivation.css';
import timepass from './timepass.jpeg';

const CropCultivation = () => {
  const navigate = useNavigate();

  return (<>

        <div className="hero-parallax">
      <div className="hero-content">
        <h1>AgroPrime</h1>
        <p>Knowledge. Growth. Sustainability.</p>
      </div>

      {/* Animated floating elements */}
      <div className="floating-elements">
       <div className="cloud cloud1">☁️</div>
  <div className="cloud cloud2">☁️</div>
  <div className="cloud cloud3">☁️</div>
  <div className="cloud cloud4">☁️</div>
        <div className="sun">☀️</div>
        <div className="leaf leaf1">🍃</div>
        <div className="leaf leaf2">🍃</div>
      </div>
    </div>







    <div style={{ padding: '80px' }}>

      <button onClick={() => navigate("/")} style={{margin:'-30px 0px 0px 40px'}} className='button'>⬅ Back </button>

      <div className="crop-cultivation-section">
          <h1>Crop Cultivation</h1>
         
      
      <div className="crop-cultivation-section1">

          <div className="crop-cultivation-text">
            
           <p>Crop cultivation is the process of growing plants for food, fiber, medicine, and other uses, involving several key steps such as preparing the land through ploughing and leveling, selecting high-quality seeds suited to the climate and soil, sowing them at the right depth and spacing, providing adequate irrigation, supplying nutrients through organic compost or fertilizers, controlling weeds and pests, and harvesting the mature crops at the right time, followed by proper cleaning, drying, and storage to maintain quality. It plays a vital role in ensuring food security, supporting farmers’ livelihoods, boosting the economy, and, when practiced sustainably, preserving soil fertility and protecting the environment for future generations.</p>
     
           
          </div>

          <img src={cropimg} alt="crop-cultivation" className="crop-cultivation-image1" />




      </div>

      <div className="crop-cultivation-section2">

        <h1> Selecting the Right Crop</h1>
        <p>Choosing the right crop is crucial for a successful harvest. Consider factors such as climate, soil type, water availability, and market demand. For example, in regions with high rainfall, crops like rice or sugarcane may thrive, while drought-resistant crops like sorghum or millet are better suited for drier areas. Understanding your local conditions and market needs will help you make an informed decision.</p>
       

        <img src={cropculti1} alt="crop-cultivation" className="crop-cultivation-image2"/>


      </div>

      <div className="crop-cultivation-section3">

        <h1>Planting Techniques</h1>
        <p>Proper planting techniques are essential for optimal crop growth. This includes preparing the soil, selecting high-quality seeds, and using appropriate planting methods. For instance, direct seeding is suitable for crops like wheat and maize, while transplanting is preferred for crops like rice and tomatoes. Ensure proper spacing between plants to allow for adequate sunlight and nutrient uptake.</p>

        <img src={cropculti2} alt="crop-cultivation" className="crop-cultivation-image2"/>
      </div>


      <div className="crop-cultivation-section4">

        <h1>Best Practices for Cultivation</h1>
        <p>Implementing best practices throughout the cultivation process can significantly improve yield and quality. This includes regular monitoring for pests and diseases, timely application of fertilizers, and efficient water management. Integrated Pest Management (IPM) techniques, such as using natural predators and biopesticides, can help minimize the use of harmful chemicals. Regular soil testing can also guide nutrient management decisions.</p>
        <img src={cropculti3} alt="crop-cultivation" className="crop-cultivation-image2"/>
      </div>




</div>
      <button onClick={() => navigate("/")} style={{margin:'30px 0px 0px 40px'}} className='button'>⬅ Back </button>

    </div>
</>  );
};

export default CropCultivation;