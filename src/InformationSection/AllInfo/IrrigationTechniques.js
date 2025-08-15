import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import irrigat1 from './irrigat1.jpeg';
import irrigat2 from './irrigat2.jpeg';
import irrigat3 from './irrigat3.jpeg';
import irrigat4 from './irrigat4.jpeg';
import './IrrigationTechniques.css';

export default function IrrigationTechniques() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  // Language change handler
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const sections = [
    {
      title: t('irrigation.surface.title'),
      text: t('irrigation.surface.text'),
      img: irrigat1
    },
    {
      title: t('irrigation.drip.title'),
      text: t('irrigation.drip.text'),
      img: irrigat2
    },
    {
      title: t('irrigation.sprinkler.title'),
      text: t('irrigation.sprinkler.text'),
      img: irrigat3
    },
    {
      title: t('irrigation.subsurface.title'),
      text: t('irrigation.subsurface.text'),
      img: irrigat4
    }
  ];


  
// const irrigationSteps = (t) => [
//   { title: t('irrigation.timeline.drip.title'), desc: t('irrigation.timeline.drip.desc') },
//   { title: t('irrigation.timeline.sprinkler.title'), desc: t('irrigation.timeline.sprinkler.desc') },
//   { title: t('irrigation.timeline.surface.title'), desc: t('irrigation.timeline.surface.desc') },
//   { title: t('irrigation.timeline.subsurface.title'), desc: t('irrigation.timeline.subsurface.desc') }
// ];

  return (
    <>
      
      <div className="language-switcher">
        <button onClick={() => changeLanguage('en')}>English</button>
        <button onClick={() => changeLanguage('hi')}>हिंदी</button>
        <button onClick={() => changeLanguage('mr')}>मराठी</button>
      </div>

      <div className="hero-parallax">
        
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>{t('site.title')}</h1>
          <p>{t('site.subtitle')}</p>
        </motion.div>

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

      
      <div className="content-container">
        <button onClick={() => navigate("/")} className="button back-btn">
          ⬅ {t('buttons.back')}
        </button>

        {sections.map((sec, idx) => (
          <motion.div
            key={idx}
            className={`section-card ${idx % 2 === 0 ? "row" : "row-reverse"}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="section-text">
              <h2>{sec.title}</h2>
              <p>{sec.text}</p>
            </div>
            <motion.img
              src={sec.img}
              alt={sec.title}
              className="section-img"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            />
          </motion.div>
        ))}








        {/* <div className="modules-section">
            <h2>{t('modules.title')}</h2>
            <div className="modules-grid">
              {modules.map((mod, index) => (
            <div className="module-card" key={index}>
                <h3>{mod.title}</h3>
                <p>{mod.text}</p>
            </div>
            ))}
            </div>
        </div> */}


        <button onClick={() => navigate("/")} className="button back-btn">
          ⬅ {t('buttons.back')}
        </button>
      </div>
    </>
  );
}
