import React from 'react';
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import './InfoSec.css';

import mainimg from './mainimg.jpeg';
import image from './image.jpeg';
import image1 from './image1.jpeg';
import image2 from './image2.jpeg';
import image3 from './image3.jpeg';
// import image4 from './image4.jpeg';
import image5 from './image5.jpeg';

const InfoSec = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    console.log("Current language:", i18n.language);
  };

  return (
    <>
     
      

      <div className='mainsection'>
        <img className='mainimg' src={mainimg} alt="" />

        <div className='textsection'>
          <h1>{t('infoSec.heading1')}</h1>
          <h1>{t('infoSec.heading2')}</h1>
          <p>{t('infoSec.subtitle')}</p>

          <div className='explorebtn'>
            <b>{t('infoSec.exploreBtn')}</b>
          </div>

          <div className="big-down-arrow">
            <svg width="70" height="100" viewBox="0 0 24 24">
              <path d="M12 4v16m0 0l-6-6m6 6l6-6" stroke="#36D412" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>

      <div className="mainbtn-language-switcher">
        <button onClick={() => changeLanguage('en')}>English</button>
        <button onClick={() => changeLanguage('hi')}>हिंदी</button>
        <button onClick={() => changeLanguage('mr')}>मराठी</button>
      </div>

      <div className="services-container">
        <h2 className="services-title">{t('infoSec.servicesTitle')}</h2>
        <div className="services-grid">

          <Link to="/soil-fertility" className="service-box">
            <img src={image} alt={t('infoSec.soil.title')} />
            <h3>{t('infoSec.soil.title')}</h3>
            <p>{t('infoSec.soil.desc')}</p>
          </Link>

          <Link to="/crop-cultivation" className="service-box">
            <img src={image1} alt={t('infoSec.crop.title')} />
            <h3>{t('infoSec.crop.title')}</h3>
            <p>{t('infoSec.crop.desc')}</p>
          </Link>

          <Link to="/irrigation-techniques" className="service-box">
            <img src={image2} alt={t('infoSec.irrigation.title')} />
            <h3>{t('infoSec.irrigation.title')}</h3>
            <p>{t('infoSec.irrigation.desc')}</p>
          </Link>

          <Link to="/pest-control" className="service-box">
            <img src={image3} alt={t('infoSec.pest.title')} />
            <h3>{t('infoSec.pest.title')}</h3>
            <p>{t('infoSec.pest.desc')}</p>
          </Link>

          {/* <Link to="/weather-forecast" className="service-box">
            <img src={image4} alt={t('infoSec.weather.title')} />
            <h3>{t('infoSec.weather.title')}</h3>
            <p>{t('infoSec.weather.desc')}</p>
          </Link> */}

          <Link to="/government-scheme" className="service-box">
            <img src={image5} alt={t('infoSec.government.title')} />
            <h3>{t('infoSec.government.title')}</h3>
            <p>{t('infoSec.government.desc')}</p>
          </Link>
          
        </div>
      </div>
    </>
  );
}

export default InfoSec;
