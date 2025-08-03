import React from 'react'
import img1 from '../images/img1.jpeg';
import farmer1 from '../images/farmer1.jpeg';
import farmer2 from '../images/farmer2.jpeg';
import farmer3 from '../images/farmer3.jpeg';
import '../Css/AboutUs.css';
import Navbar from './Navbar';

const AboutUs = () => {
  return (
    <div className='mainpage'>
      <div>
        <Navbar/>
      </div>
    <div>
        <img className='img1' src={img1} alt="" />

        <div className="marquee-container">

           <div className="marquee-text">WELCOME TO AGROPRIME</div>
        </div>
    </div>

    <div id='welcomesec'>

      <p id='welcome'>Welcome to Agro Prime, your one-stop platform for everything agriculture! Whether you're a farmer looking for expert advice, a business seeking innovative solutions, or a consumer passionate about sustainable food practices, we are here to support you. Our mission is simple: to empower the global agricultural community with the knowledge, tools, and connections needed to thrive in a rapidly evolving industry.</p>
    </div>

    <div className='two'>

      <h2>Meet  Our  Farmer</h2>

     
      <div className="farmer1" id='fone'>
          <img className="farmers" src={farmer1} alt="farmer1" />
          <div className="farmer1-box">
               <h3>Shridhar Kute</h3>
                  <p>Farmer</p>
          </div>
      </div>


     <div className="farmer2">
          <img className="farmers" src={farmer2} alt="farmer2" />
          <div className="farmer2-box">
               <h3>Ramrao Kadam</h3>
                  <p>Farmer</p>
          </div>
      </div>

      <div className="farmer3">
          <img className="farmers" src={farmer3} alt="farmer3" />
          <div className="farmer3-box">
               <h3>Gopal Pawar</h3>
                  <p>Farmer</p>
          </div>
      </div>

      </div>

    <div className='mission'>
      <h1>OUR MISSION</h1>
    </div>
     <div id='missionid'>

      <p id='pmission'>To provide a comprehensive platform that connects, educates, and empowers farmers, businesses, and consumers, offering valuable resources, innovative solutions, and practical advice for every stage of the agricultural journey.</p>
    </div>
    
    <div className="mission-section">
  <div className="mission-grid">
    <div className="mission-box">🌱 Sustainable Development</div>
    <div className="mission-box">🌍 Climate-Smart Agriculture</div>
    <div className="mission-box">🌱 Organic & Eco-Friendly Farming</div>
    <div className="mission-box">🤝 Farmer Empowerment</div>
    <div className="mission-box">💡 Agri-Innovation & Technology</div>
    <div className="mission-box">📚 Agri-Education & Awareness</div>
    <div className="mission-box">🛡️ Food Security & Nutrition</div>
    <div className="mission-box">🚜 Youth in Agriculture</div>
    <div className="mission-box">🔁 Circular Agriculture </div>
    <div className="mission-box">🧑‍🤝‍🧑 Community-Led Farming</div>
  </div>
</div>

    
    <div className='vision'>
      <h1>OUR VISION</h1>
    </div>
     <div id='visionid'>

      <p id='pvision'>We envision a world where agriculture is sustainable, innovative, and integrated with technology to serve not only local communities but the entire global food ecosystem. By fostering education, collaboration, and digital tools, we aim to ensure a future of abundance, sustainability, and equity.</p>
    </div>

    <div className="vision-section">
  
  <div className="vision-grid">
    <div className="vision-box">🚀 A Future of Smart Farming</div>
    <div className="vision-box">🧑‍🌾 Empowered & Self-Reliant Farmers</div>
    <div className="vision-box">🌐 Global Leader in Agri-Tech</div>
    <div className="vision-box">🌳 Eco-Friendly & Climate-Resilient Agriculture</div>
    <div className="vision-box">🍚 Zero Hunger Through Innovation</div>
    <div className="vision-box">🏞️ Inclusive Growth for Rural Communities</div>
    <div className="vision-box">📲 Digital Agriculture Revolution</div>
    <div className="vision-box">🌎 Global Reach, Local Impact</div>
    <div className="vision-box">👩‍🎓 Youth as Agri-Entrepreneurs</div>
    <div className="vision-box">🔒 AgroPrime as a Trusted Agricultural Hub</div>
  </div>
</div>



<div className='mainly'>
  <h1>MAINLY</h1>
</div>

<div id='mainlyinfo-container'>
  <p id='pmainly'>
    Our mission is to be the trusted digital platform for everyone involved in agriculture. We provide farmers, agribusinesses, and consumers with:
  </p>
</div>

<div id='pmainly-container'>
  <ul id='pmainly'>
    <li>Expert agricultural advice</li>
    <li>Access to sustainable farming practices</li>
    <li>Marketplaces for buying and selling agricultural products</li>
    <li>Networking opportunities</li>
    <li>Solutions for smarter and more efficient farming</li>
  </ul>
</div>
{/* <div className='mainly'>
      <h1>MAINLY</h1>
    </div>
     <div id='mainlyid'>

    
      <p id='mainlyinfo'>Our mission is to be the trusted digital platform for everyone involved in agriculture. We provide farmers, agribusinesses, and consumers with:</p>
    
      <ul id='pmainly'>
        <li>Expert agricultural advice</li>
        <li>Access to sustainable farming practices</li>
        <li>Marketplaces for buying and selling agricultural products</li>
        <li>Networking opportunities</li>
        <li>Solutions for smarter and more efficient farming</li>
      </ul>
    </div> */}


  <div class="mini-stats-container">
  <div class="mini-box green">
    <span class="big-emoji">👩‍🌾</span>
    <p>5,000+ farmers helped</p>
  </div>
  <div class="mini-box lime">
    <span class="big-emoji">📦</span>
    <p>10,000+ farm products</p>
  </div>
  <div class="mini-box yellow">
    <span class="big-emoji">📍</span>
    <p>Operating in 4+ states</p>
  </div>
</div>


  <footer class="footer">
  <p>2025 AgroPrime</p>
  <div class="social-links">
    <a href="">Facebook</a> |
    <a href="">Instagram</a> |
    <a href="">Youtube</a>
  </div>
</footer>

  
  </div>



  
  )
}

export default AboutUs
