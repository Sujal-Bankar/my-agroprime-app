import React, { useState } from 'react';
import '../Css/HelpPage.css';
import Navbar from './Navbar';
import Footer from './Footer';

const HelpPage = () => {
  const [openIndexes, setOpenIndexes] = useState([]); // for multiple open items

   const faqs = [
  {
    id: "q1",
    question: "What are the best crops for beginners to grow?",
    answer:
      "For new farmers, crops like lettuce, radishes, green beans, and tomatoes are easier to manage and have shorter growth cycles."
  },
  {
    id: "q2",
    question: "How can I improve soil fertility?",
    answer:
      "Regularly add organic matter such as compost or manure, practice crop rotation, and test your soil each season to adjust nutrients."
  },
  {
    id: "q3",
    question: "What is sustainable farming?",
    answer:
      "Sustainable farming uses eco-friendly methods like crop rotation, organic fertilizers, and reduced pesticide use."
  },
  {
    id: "q4",
    question: "How do I control pests without chemicals?",
    answer:
      "Use integrated pest management (IPM), crop rotation, introduce beneficial insects, and natural repellents."
  },
  {
    id: "q5",
    question: "How much water do vegetable crops need?",
    answer:
      "Most vegetables need about 1–2 inches of water per week. Water deeply and early in the morning to reduce evaporation."
  },
  {
    id: "q6",
    question: "What is crop rotation and why is it important?",
    answer:
      "Crop rotation involves changing the type of crop grown in an area each season to maintain soil health and prevent pests and disease."
  },
  {
    id: "q7",
    question: "How can I prevent soil erosion?",
    answer:
      "Use cover crops, contour farming, mulching, and reduced tillage to protect the soil and prevent erosion."
  },
  {
    id: "q8",
    question: "What are organic fertilizers?",
    answer:
      "Organic fertilizers come from natural sources like compost, manure, bone meal, and seaweed and improve soil structure and fertility."
  },
  {
    id: "q9",
    question: "When is the best time to plant crops?",
    answer:
      "The best planting time depends on the crop and local climate, but generally early spring and post-monsoon are ideal for many crops."
  },
  {
    id: "q10",
    question: "How do I start a small organic farm?",
    answer:
      "Choose the right land, plan crops based on demand, use organic inputs, get certified, and market your produce effectively."
  },
  {
    id: "q11",
    question: "Can I grow crops without using chemical pesticides?",
    answer:
      "Yes, by using natural pest repellents, neem oil, biological controls, and practicing good field hygiene."
  },
  {
    id: "q12",
    question: "What are the benefits of mulching?",
    answer:
      "Mulching conserves soil moisture, suppresses weeds, regulates temperature, and adds organic matter to the soil."
  },
  {
    id: "q13",
    question: "How do I test my soil?",
    answer:
      "Collect a soil sample and send it to an agricultural lab or use a home testing kit to check pH and nutrient levels."
  },
  {
    id: "q14",
    question: "What is precision farming?",
    answer:
      "Precision farming uses GPS, sensors, and data analytics to optimize crop yield, reduce waste, and improve efficiency."
  },
  {
    id: "q15",
    question: "What tools are essential for small-scale farming?",
    answer:
      "Basic tools include a hoe, shovel, rake, watering can, seed planter, and a compost bin. Drip irrigation is also useful."
  }
];
  const handleToggle = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter(i => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  const expandAll = () => {
    const allIndexes = faqs.map((_, index) => index);
    setOpenIndexes(allIndexes);
  };

  const collapseAll = () => {
    setOpenIndexes([]);
  };

  return (
    <>
      <Navbar />
      <section className="hero">
        <video
          src="/images/helppagevideo.mp4"
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: 'absolute',
            width: '100%',
            height: '88%',
            objectFit: 'cover',
            top: '55px',
            right: '0px',
          }}
        ></video>
        <h2 className="heading">Frequently Asked <br /> Questions</h2>
        <p className="subheading">Find Your Answer Here</p>
      </section>

      <div className="faq-container">
        <div className="faq-header">
          <h3>FAQS</h3>
        </div>
        <div className="faq-sub">
          <h1>AGROPRIME</h1>
          <div>
            <button onClick={expandAll}>Expand All</button>
            <button onClick={collapseAll}>Collapse All</button>
          </div>
        </div>
        <div className="faq-box">
          {faqs.map((faq, index) => {
            const isOpen = openIndexes.includes(index);
            return (
              <div
                key={index}
                className="faq-item"
                onClick={() => handleToggle(index)}
              >
                <div className="faq-question">
                  {faq.question}
                  <span className={`arrow ${isOpen ? 'open' : ''}`}>▶</span>
                </div>
                <div className={`faq-answer ${isOpen ? 'open' : ''}`}>
                  {faq.answer}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default HelpPage;
