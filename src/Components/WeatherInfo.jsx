import React, { useState } from 'react'
import logo from '../images/logo.jpg'
import '../Css/WeatherInfo.css'
import { Link, useLocation } from 'react-router-dom';
import weather from './Weather'
import WeatherMap from './WeatherMap';
import Navbar from './Navbar';
import Footer from './Footer';
const WeatherInfo = () => {
  const location = useLocation();
  const {weatherData, query,forecast} = location.state;

  
const forecastList = forecast?.list || [
  {
    main: { temp: 25 },
    weather: [{ description: "partly cloudy" }],
  },
  {
    main: { temp: 26 },
    weather: [{ description: "sunny" }],
  },
  {
    main: { temp: 24 },
    weather: [{ description: "light rain" }],
  },
  {
    main: { temp: 27 },
    weather: [{ description: "clear sky" }],
  },
  {
    main: { temp: 28 },
    weather: [{ description: "scattered clouds" }],
  },
];

const forecastData = [
  { day: "Monday", temp : forecastList[0].main.temp, condition: forecastList[0].weather[0].description },
  { day: "Tue", temp: forecastList[1].main.temp, condition: forecastList[1].weather[0].description },
  { day: "Wed", temp: forecastList[2].main.temp, condition: forecastList[2].weather[0].description },
  { day: "Thu", temp: forecastList[3].main.temp, condition: forecastList[3].weather[0].description },
  { day: "Fri", temp: forecastList[4].main.temp, condition: forecastList[4].weather[0].description },
];

   const getWeatherInfo = (data) => {
  if (!data || !data.main) return "";

  const temp = data.main.temp;
  const rain = data.rain?.["1h"] || 0;
  const wind = data.wind?.speed || 0;

  if (rain > 0) return `Avoid irrigation and spraying today due to rainfall.`;
  if (wind > 10) return `Secure tall crops and avoid pesticide spraying during strong winds.`;

  if (temp > 40) return `Irrigate crops frequently and avoid daytime spraying.`;
  if (temp > 30) return `Irrigate crops early morning or evening.`;
  if (temp >= 20 && temp <= 30) return `Ideal conditions for sowing and normal farm activities.`;
  if (temp >= 10 && temp < 20) return `Plan irrigation carefully and monitor temperature-sensitive crops.`;
  if (temp < 10) return `Protect sensitive crops from cold stress.`;

  return `Proceed with normal farming activities.`;
};


  return (
    <div className='mainn'>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"></link>
      <div>
        <Navbar/>
      </div>
    <div className='heading2'>
    <Link to="/Weather">
    <img src="/images/back.png" alt="" id='back' className='back'/>
    </Link>
    <h1>Now In {weatherData? weatherData.name :"Akurdi"}</h1>
    </div>
    <div className='alert-msg'>
      <marquee><b>⚠️ Disclaimer: </b>The weather forecast data displayed on this website is provided for informational purposes only. While we strive to offer accurate and timely updates, there may be delays or discrepancies due to third-party data sources or unexpected weather fluctuations. Users are advised not to rely solely on this information for critical decisions.</marquee>
    </div>

    <div className='map-card'>
      <div className="map-card-name">
        <img src="/images/earth.png" alt="" id='earth'/>
        <h3>Regional Precipitation Map</h3>
      </div>
      <div className='map'>
        <WeatherMap lat={weatherData? weatherData.lat : 20.5937} lon={weatherData? weatherData.lon : 78.9629}/>
      </div> 
      </div>

    <div className='sec1'>
      <div className="weather-card">
      <h3>
        <img src="/images/map-pin.png" alt="icon" className="icon" />
        Current Conditions
      </h3>

      <div className="condition">
        <span>Temperature:</span> <strong>{weatherData? weatherData.main?.temp : "24.C"}</strong>
      </div>
      <div className="condition">
        <span>Feels Like:</span> <strong>{weatherData? weatherData.main?.feels_like :"26°C"}</strong>
      </div>
      <div className="condition">
        <span>Humidity:</span> <strong>{weatherData? weatherData.main?.humidity :"65%"}</strong>
      </div>
      <div className="condition">
        <span>Wind Speed:</span> <strong className="highlight">{weatherData? weatherData.wind?.speed :"12 km/h NE"}</strong>
      </div>
      <div className="condition">
        <span>Pressure:</span> <strong className="highlight">{weatherData? weatherData.main?.pressure :"900"}</strong>
      </div>
      <div className="condition">
        <span>Sea Level:</span> <strong className="highlight">{weatherData? weatherData.main?.sea_level :"Moderate (5)"}</strong>
      </div>
    </div>

    <div className="soil-card">
      <h3>
        <img src="/images/soil.jpeg" alt="icon" className="icon"/>
        Soil Conditions
      </h3>

      <div className="soil-values">
        <div className="soil-box">
          <h4>Temperature</h4>
          <p className="value">{weatherData? weatherData.main?.temp :"18"}°C</p>
          <span>at 10cm depth</span>
        </div>

        <div className="soil-box">
          <h4>Humidity</h4>
          <p className="value">{weatherData? weatherData.main?.humidity :"42"}%</p>
          <span>at local zone</span>
        </div>
      </div>

      <div className="advice-box">
        <strong>Crop Advice:</strong> {weatherData? getWeatherInfo(weatherData) :"Soil moisture optimal for planting corn. Temperature favorable for soybean growth."}
      </div>
    </div>
    </div>

    <div className='sec2'>
      <div className="forecast-card">
      <h3>
        <img src="/images/sun-cloud2.jpg" alt="icon" className="icon" />
        7-Day Forecast
      </h3>

      {forecastData.map((item, index) => (
        <div className="forecast-row" key={index}>
          <span>{item.day}</span>
          <span>{item.temp}</span>
          <span>{item.condition}</span>
          <span>{item.rain}</span>
        </div>
      ))}
    </div>

    <div className="farming-card">
  <h3>
    <img src="/images/farming.png" alt="icon" className="icon" />
    Farming Insights
  </h3>

  <div className="insight-row">
    <span>Growing Degree Days:</span>
    <strong>
      {
        weatherData?.main?.temp_min != null && weatherData?.main?.temp_max != null
          ? Math.round((weatherData.main.temp_min + weatherData.main.temp_max) / 2) + 10
          : 25 // default GDD
      }
    </strong>
  </div>

  <div className="insight-row">
    <span>Evapotranspiration:</span>
    <strong>
      {
        weatherData?.main?.temp_min != null && weatherData?.main?.temp_max != null
          ? ((weatherData.main.temp_min + weatherData.main.temp_max) / 2 * 0.17).toFixed(2) + " mm"
          : "3.40 mm"
      }
    </strong>
  </div>

  <div className="insight-row">
    <span>Frost Risk:</span>
    <strong>
      {
        weatherData?.main?.temp_min != null
          ? (weatherData.main.temp_min <= 0
              ? "High"
              : weatherData.main.temp_min <= 3
              ? "Moderate"
              : "Low")
          : "Low"
      }
    </strong>
  </div>

  <div className="action-box">
    <strong>Action Items:</strong>
    <ul>
      <li>Schedule irrigation for Wednesday morning</li>
      <li>Apply fungicide before Friday's rain</li>
      <li>Monitor for aphids - threshold approaching</li>
    </ul>
  </div>
</div>
</div>
<div className='footer-main'>
      <Footer/>
      </div>
    </div>
  )
}

export default WeatherInfo
