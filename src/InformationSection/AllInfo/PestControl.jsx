import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './PestControl.css';
import pest1 from './pest1.jpeg';
import pest2 from './pest2.jpeg';
import pest3 from './pest3.jpeg';
import pest4 from './pest4.jpeg';
import pest from './pest.jpeg';

export default function PestControl() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      {/* Hero Section */}
      <div className="hero-parallax">
        {/* Language Switcher */}
        <div className="language-switcher">
          <button onClick={() => changeLanguage('en')}>English</button>
          <button onClick={() => changeLanguage('hi')}>हिंदी</button>
          <button onClick={() => changeLanguage('mr')}>मराठी</button>
        </div>

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>{t('soilFertility.hero.title')}</h1>
          <p>{t('soilFertility.hero.subtitle')}</p>
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

      <button onClick={() => navigate("/")} className="button back-btn">⬅ {t('common.back')}</button>

      {/* Intro Section */}
      <div className="pest-section">
        <div className="intro-section">
          <div className="intro-row">
            <div className="pest-text">
              <h1>{t('pestControl.intro.title')}</h1>
              <p>{t('pestControl.intro.desc')}</p>
            </div>
            <div className="pest-image">
              <img src={pest} alt="Pest Control" />
            </div>
          </div>

          <div className="intro-row reverse">
            <div className="pest-text">
              <h1>{t('pestControl.identify.title')}</h1>
              <p>{t('pestControl.identify.desc')}</p>
            </div>
          </div>
        </div>

        {/* Pest Cards */}
        <div className="pest-grid">
          <div className="pest-card">
            <img src={pest1} alt="Aphids" className="pest-img" />
            <h2>{t('pestControl.pests.aphids.title')}</h2>
            <p>{t('pestControl.pests.aphids.desc')}</p>
          </div>

          <div className="pest-card">
            <img src={pest2} alt="Caterpillars" className="pest-img" />
            <h2>{t('pestControl.pests.caterpillars.title')}</h2>
            <p>{t('pestControl.pests.caterpillars.desc')}</p>
          </div>

          <div className="pest-card">
            <img src={pest3} alt="Whiteflies" className="pest-img" />
            <h2>{t('pestControl.pests.whiteflies.title')}</h2>
            <p>{t('pestControl.pests.whiteflies.desc')}</p>
          </div>

          <div className="pest-card">
            <img src={pest4} alt="Spider Mites" className="pest-img" />
            <h2>{t('pestControl.pests.spiderMites.title')}</h2>
            <p>{t('pestControl.pests.spiderMites.desc')}</p>
          </div>
        </div>
      </div>

      <button onClick={() => navigate("/")} className="button back-btn">⬅ {t('common.back')}</button>
    </>
  );
}
