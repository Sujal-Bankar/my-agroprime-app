import React from 'react'
import { Link } from "react-router-dom";
import Navbar from '../Components/Navbar'
import './InfoSec.css';


import mainimg from './mainimg.jpeg';
import image from './image.jpeg';
import image1 from './image1.jpeg';
import image2 from './image2.jpeg';
import image3 from './image3.jpeg';
import image4 from './image4.jpeg';
import image5 from './image5.jpeg';
// import image6 from './image6.jpeg';

const InfoSec = () => {

    return (

        <>
        <Navbar/>
    
            <div className='mainsection'>

            <img className='mainimg' src={mainimg} alt="" />

            <div className='textsection'>

                <h1>Empowering Farmers with </h1>
                <h1>Knowledge</h1>
                <p>Your one-stop resource for modern farming techniques, weather updates, and market insights.</p>

                <div className='explorebtn'>
                    <b>Explore Information</b>
                </div>
            </div>

            </div>

            

            <div className="services-container">

                <h2 className="services-title">Explore Our Services</h2>
                <div className="services-grid">

                   <Link to="/soil-fertility" className="service-box">
                        <img src={image} alt="Soil & Fertility" />
                        <h3>Soil & Fertility</h3>
                        <p>Learn about soil health and nutrient management.</p>
                    </Link>

                    <Link to="/crop-cultivation" className="service-box">
                        <img src={image1} alt="CropCultivation" />
                        <h3>Crop Cultivation</h3>
                        <p>Best practices for growing various crops.</p>
                    </Link>

                    <Link to="/irrigation-techniques" className="service-box">
                        <img src={image2} alt="Irrigation" />
                        <h3>Irrigation Techniques</h3>
                        <p>Efficient water management for your farm.</p>
                    </Link>

                    <Link to="/pest-control" className="service-box">
                        <img src={image3} alt="PestControl" />
                        <h3>Pest Control</h3>
                        <p>Strategies for pest and disease management.</p>
                    </Link>

                    <Link to="/weatherforecast" className="service-box">
                        <img src={image4} alt="WeatherForecast" />
                        <h3>Weather Forecast</h3>
                        <p>Real-time weather updates and forecasts.</p>
                    </Link>

                    <Link to="/government-scheme" className="service-box">
                        <img src={image5} alt="GovernmentSchemes" />
                        <h3>Government Schemes</h3>
                        <p>Information on support and subsidies.</p>
                    </Link>
                    
                </div>
            </div>


            
            
        </>
        
    )

}





export default InfoSec;