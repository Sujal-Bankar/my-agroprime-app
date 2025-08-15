import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import cropimg from './cropimg.jpeg';
import cropculti1 from './cropculti1.jpeg';
import cropculti2 from './cropculti2.jpeg';
import cropculti3 from './cropculti3.jpeg';
import './CropCultivation.css';

const sections = (t) => [
  {
    title: t('crop.sections.cropCultivation.title'),
    text: t('crop.sections.cropCultivation.text'),
    img: cropimg
  },
  {
    title: t('crop.sections.selectingCrop.title'),
    text: t('crop.sections.selectingCrop.text'),
    img: cropculti1
  },
  {
    title: t('crop.sections.plantingTechniques.title'),
    text: t('crop.sections.plantingTechniques.text'),
    img: cropculti2
  },
  {
    title: t('crop.sections.bestPractices.title'),
    text: t('crop.sections.bestPractices.text'),
    img: cropculti3
  }
];

const cultivationSteps = (t) => [
  { title: t('crop.steps.plough.title'), desc: t('crop.steps.plough.desc') },
  { title: t('crop.steps.selectSeeds.title'), desc: t('crop.steps.selectSeeds.desc') },
  { title: t('crop.steps.planting.title'), desc: t('crop.steps.planting.desc') },
  { title: t('crop.steps.irrigation.title'), desc: t('crop.steps.irrigation.desc') },
  { title: t('crop.steps.fertilization.title'), desc: t('crop.steps.fertilization.desc') },
  { title: t('crop.steps.pestControl.title'), desc: t('crop.steps.pestControl.desc') },
  { title: t('crop.steps.harvesting.title'), desc: t('crop.steps.harvesting.desc') },
  { title: t('crop.steps.storage.title'), desc: t('crop.steps.storage.desc') }
];

export default function CropCultivation() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [active, setActive] = useState(0);

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
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>{t('crop.hero.title')}</h1>
          <p>{t('crop.hero.subtitle')}</p>
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

      {/* Main Content */}
      <div className="content-container">
        <button onClick={() => navigate("/")} className="button back-btn">⬅ {t('common.back')}</button>

        {/* Standard Sections */}
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

        {/* Timeline Step-by-Step Section */}
        <motion.section
          className="compact-timeline"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="timeline-title">{t('crop.timelineTitle')}</h2>
          <div className="timeline-cards">
            {cultivationSteps(t).map((step, index) => (
              <motion.div
                key={index}
                className={`timeline-card ${active === index ? "active" : ""}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setActive(index)}
                tabIndex={0}
              >
                <div className="card-index">{index + 1}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
                <motion.div
                  className="card-progress"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: active >= index ? 1 : 0 }}
                  transition={{ duration: 0.4 }}
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
