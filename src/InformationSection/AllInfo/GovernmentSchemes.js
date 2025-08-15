import React from "react";
import "./GovernmentSchemes.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const schemes = [
  {
    title: "Pradhan Mantri Krishi Sinchayee Yojana",
    desc: "Provides irrigation facilities to farmers and promotes water-efficient practices.",
    link: "https://pmksy.gov.in/"
  },
  {
    title: "PM-Kisan Samman Nidhi",
    desc: "Income support scheme providing ₹6,000/year to small and marginal farmers.",
    link: "https://pmkisan.gov.in/"
  },
  {
    title: "National Agriculture Market (eNAM)",
    desc: "Online trading platform connecting farmers with buyers across India.",
    link: "https://enam.gov.in/"
  },
  {
    title: "Rashtriya Krishi Vikas Yojana",
    desc: "Supports states in boosting agriculture and allied sector development.",
    link: "https://rkvy.nic.in/"
  }
];

const GovernmentSchemes = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="gov-schemes-section">


      <div className="hero-parallax">
              
      
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
     

       <button onClick={() => navigate("/")} className="button back-btn">⬅ {t('common.back')}</button>

      
      <div className="schemes-container">
        {schemes.map((scheme, index) => (
          <div className="scheme-card" key={index}>
            <h3>{scheme.title}</h3>
            <p>{scheme.desc}</p>
            <a href={scheme.link} target="_blank" rel="noopener noreferrer">
              {t("Learn More")}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GovernmentSchemes;
