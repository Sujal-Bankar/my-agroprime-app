import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SoilFertility.css'; 
import soilimg from './soilimg.jpeg'; 
import soilfertility1 from './soilfertility1.jpeg';
import soilfertility2 from './soilfertility2.jpeg'; 
import soilfertility3 from './soilfertility3.jpeg';

const SoilFertility = () => {

  const navigate = useNavigate();

  return (<>
  

    <div className="hero-parallax">
      <div className="hero-content">
        <h1>AgroPrime</h1>
        <p>Knowledge. Growth. Sustainability.</p>
      </div>

      
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

      <button onClick={() => navigate("/")} style={{margin:'30px 0px 0px 40px'}} className='button'>⬅ Back </button>

      <div className="soil-fertility-section">
          <h1>Soil & Fertility</h1>
         
      
      <div className="soil-fertility-section1">

          <div className="soil-fertility-text">
            
           <p>Soil fertility means how “rich” and “healthy” the soil is for growing plants. A fertile soil has enough nutrients, the right texture, good water-holding capacity, and a balanced pH, making it easier for plants to grow strong and produce well.</p>
     
           
          </div>

          <img src={soilimg} alt="Soil Fertility" className="soil-fertility-image1" />




      </div>

      <div className="soil-fertility-section2">

        <h1> Soil Health</h1>
        <p>Healthy soil is the foundation of successful farming. It provides essential nutrients, supports plant growth, and helps retain water. Understanding your soil's composition and health is crucial for maximizing yields and minimizing environmental impact.</p>
       

        <img src={soilfertility1} alt="Soil Fertility" className="soil-fertility-image2"/>


      </div>

      <div className="soil-fertility-section3">

        <h1>Nutrient Management</h1>
        <p>Proper nutrient management ensures your crops receive the necessary elements for optimal growth. This involves understanding nutrient cycles, conducting soil tests, and applying fertilizers effectively to avoid deficiencies or excesses.</p>

        <img src={soilfertility2} alt="Soil Fertility" className="soil-fertility-image2"/>
      </div>


      <div className="soil-fertility-section4">

        <h1>Improving Soil Fertility</h1>
        <p>Improving soil fertility involves practices that enhance soil structure, increase organic matter, and promote beneficial microbial activity. Techniques like cover cropping, crop rotation, and composting can significantly boost soil health and fertility over time.</p>

        <img src={soilfertility3} alt="Soil Fertility" className="soil-fertility-image2"/>
      </div>




</div>
      <button onClick={() => navigate("/")} style={{margin:'30px 0px 0px 40px'}} className='button'>⬅ Back </button>

    </div>
  </>);
};

export default SoilFertility;