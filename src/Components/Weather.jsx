import React, { useState } from 'react'
import '../Css/Weather.css'   
import sun_cloud from '../images/sun-cloud.png'
import map_pin from '../images/map-pin.png'
import rain_boy from '../images/rainboy.png'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom';
import AboutUs from './AboutUs'
import Navbar from './Navbar'
import Footer from './Footer'


const Weather = () => {
  const [selectedCoords, setSelectedCoords] = useState(null);
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [weatherData, setWeatherData] = useState(null);
  const [animationKey, setAnimationKey] = useState(0);
  const [forecast,setForecast]=useState(null);    

  const fetchLocations = async (searchText) => {
    if (searchText.length < 3) {
      setSuggestions([]);
      return;
    }
    try {
      const response = await fetch(
        `https://us1.locationiq.com/v1/search?key=pk.dd29a908ca5749c0b56595ec0a2456ae&q=${searchText}&format=json`
      );

      const data = await response.json();
      if (Array.isArray(data)) {
        setSuggestions(data);
      } else {
        console.error("Unexpected API response:", data);
        setSuggestions([]);
     }
    } catch (error) {
      console.error("Error fetching locations:", error);
      setSuggestions([]);
    }
  };

  const fetchWeather = async (lat, lon) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=6c8c88855641946f7898249e98556f05&units=metric`
      );
      const data = await response.json();
      setWeatherData(data);
      setAnimationKey(prev => prev + 1);

    } catch (error) {
      console.error("Error fetching weather:", error);
    }
  };

  const forecastWeather = async (lat = 20.5937, lon = 78.9629) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=20.5937&lon=78.9629&appid=6c8c88855641946f7898249e98556f05&units=metric`
      );
      const forecastData = await response.json();
      setForecast(forecastData);

    } catch (error) {
      console.error("Error fetching weather:", error);
    }
  };

  const getWeatherTitle = (data) => {
  if (!data || !data.main) return "";

  const temp = data.main.temp;
  const rain = data.rain?.["1h"] || 0;
  const wind = data.wind?.speed || 0;

  if (rain > 0) return `Rain Expected Today in ${data.name}`;
  if (wind > 10) return `Windy Conditions Today in ${data.name}`;

  if (temp > 40) return `Extreme Heat Today in ${data.name}`;
  if (temp > 30) return `Hot Weather Today in ${data.name}`;
  if (temp >= 20 && temp <= 30) return `Pleasant Weather Today in ${data.name}`;
  if (temp >= 10 && temp < 20) return `Cool Weather Today in ${data.name}`;
  if (temp < 10) return `Cold Weather Today in ${data.name}`;

  return `Normal Weather in ${data.name}`;
};

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


 const getFarmerAdvice = (data) => {
  if (!data || !data.main) return "No data available.";

  const temp = data.main.temp;
  const rain = data.rain?.["1h"] || 0;
  const wind = data.wind?.speed || 0;

  // Priority 1: Rain
  if (rain > 0) {
    return "Rain expected today. Delay irrigation, spraying, or harvesting. Secure stored crops and seed beds.";
  }

  // Priority 2: Wind
  if (wind > 10) {
    return "Strong winds expected. Secure tall crops and avoid pesticide spraying today.";
  }

  // Temperature-based advice
  if (temp > 40) {
    return "Extreme heat stress possible. Irrigate frequently and avoid midday work.";
  }
  if (temp > 30) {
    return "High temperature. Irrigate crops early morning or evening to reduce stress.";
  }
  if (temp >= 20 && temp <= 30) {
    return "Ideal conditions. Continue with sowing, irrigation, or harvesting as planned.";
  }
  if (temp >= 10 && temp < 20) {
    return "Cool weather. Monitor temperature-sensitive crops and plan irrigation carefully.";
  }
  if (temp < 10) {
    return "Cold stress possible. Cover frost-sensitive crops and consider warm irrigation.";
  }

  return "Normal conditions. Proceed with planned farm activities.";
};


  return (
    <div className='mainn'>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css"
        crossOrigin="anonymous"
      />
      
      <div className="body-main">
        <div>
        <Navbar/>
      </div>
        <div id="heading">
          <img src={sun_cloud} className="img-fluid" id="sun-cloud-image" />
          <h1>Get Weather Details</h1>
          <form className="d-flex" role="search" onSubmit={(e) => e.preventDefault()}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Browse Location ..."
              aria-label="Search"
              id="search-in"
              autoComplete='off'
              value={query}
              onChange={(e) => {
                const value = e.target.value;
                setQuery(value);
                fetchLocations(value);
              }}
            />
            <ul className="list-group">
              {Array.isArray(suggestions) && suggestions.map((loc, index) => (
                <li
                  className="list-group-item"
                  key={index}
                  onClick={() => {
                    setQuery(loc.display_name);
                    setSelectedCoords({ lat: loc.lat, lon: loc.lon });
                    setSuggestions([]);
                  }}
                >
                  {loc.display_name}
                </li>
              ))}
            </ul>

            <button
              className="btn btn-outline-success"
              type="submit"
              id="search"
              onClick={() => {
                if (selectedCoords) {
                  fetchWeather(selectedCoords.lat, selectedCoords.lon);
                  forecastWeather();
                } else {
                  alert("Please select a location first!");
                }
              }}
            >
              Search
            </button>
          </form>
        </div>
        <h1 id="line">________________</h1>

        <div id="loc">
          <img src={map_pin} alt="Pin" id="map-pin" />
          <h2 id="current-loc">Now In {weatherData ?  query.trim().split(',')[0]: "Akurdi"}</h2>
        </div>

        <div className="rain-ani" key={animationKey}>
          <img src={rain_boy} alt="" id="rainboy" />
          <div>
            <h2>🌧  {weatherData? getWeatherTitle(weatherData) : "Rain Expected Today In Akurdi"}</h2>
            <p>{weatherData? getWeatherInfo(weatherData) :"Heavy clouds are gathering, and rain is likely within the next few hours."}</p>
          </div>
          <Link to="/WeatherInfo" state={{ weatherData, query,forecast }} className="btn btn-outline-success" id="more">
            Know More
          </Link>
        </div>

        <div className="rain-sub">
          <p><strong>Advice for Farmers:</strong><br />
            {weatherData? getFarmerAdvice(weatherData) :"Delay irrigation, spraying, or harvesting today. Secure your crop produce and seed beds."}
          </p>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Weather;
