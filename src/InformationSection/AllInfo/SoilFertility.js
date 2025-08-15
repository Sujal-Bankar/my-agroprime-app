import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './SoilFertility.css';
import soilimg from './soilimg.jpeg';
import soilfertility1 from './soilfertility1.jpeg';
import soilfertility2 from './soilfertility2.jpeg';
import soilfertility3 from './soilfertility3.jpeg';




const sections = (t) => [
  {
    title: t('soilFertility.sections.soilFertility.title'),
    text: t('soilFertility.sections.soilFertility.text'),
    img: soilimg
  },
  {
    title: t('soilFertility.sections.soilHealth.title'),
    text: t('soilFertility.sections.soilHealth.text'),
    img: soilfertility1
  },
  {
    title: t('soilFertility.sections.nutrientManagement.title'),
    text: t('soilFertility.sections.nutrientManagement.text'),
    img: soilfertility2
  },
  {
    title: t('soilFertility.sections.improvingSoil.title'),
    text: t('soilFertility.sections.improvingSoil.text'),
    img: soilfertility3
  }
];

const soilSteps = (t) => [
  { title: t('soilFertility.steps.testing.title'), desc: t('soilFertility.steps.testing.desc') },
  { title: t('soilFertility.steps.organic.title'), desc: t('soilFertility.steps.organic.desc') },
  { title: t('soilFertility.steps.rotation.title'), desc: t('soilFertility.steps.rotation.desc') },
  { title: t('soilFertility.steps.coverCrops.title'), desc: t('soilFertility.steps.coverCrops.desc') },
  { title: t('soilFertility.steps.reducedTillage.title'), desc: t('soilFertility.steps.reducedTillage.desc') },
  { title: t('soilFertility.steps.water.title'), desc: t('soilFertility.steps.water.desc') },
  { title: t('soilFertility.steps.pest.title'), desc: t('soilFertility.steps.pest.desc') },
  { title: t('soilFertility.steps.monitoring.title'), desc: t('soilFertility.steps.monitoring.desc') }
];

export default function SoilFertility() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  // Language change handler
  const changeLanguage = (lng) => {
  i18n.changeLanguage(lng);
  console.log("Current language:", i18n.language);
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

      {/* Content Sections */}
      <div className="content-container">
        <button onClick={() => navigate("/")} className="button back-btn">⬅ {t('common.back')}</button>

        {sections(t).map((sec, idx) => (
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

        {/* Soil Management Timeline */}
        <motion.section
          className="soil-timeline"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="timeline-title">{t('soilFertility.timelineTitle')}</h2>
          <div className="timeline-cards">
            {soilSteps(t).map((step, idx) => (
              <motion.div
                key={idx}
                className="timeline-card"
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1, type: "spring", stiffness: 120 }}
              >
                <div className="card-index">{idx + 1}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
                <motion.div
                  className="card-progress"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                />
              </motion.div>
            ))}
          </div>
        </motion.section>

        <button onClick={() => navigate("/")} className="button back-btn">⬅ {t('common.back')}</button>
      </div>
    </>
  );
}
