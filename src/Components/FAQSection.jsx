import React from 'react';
import '../Css/FAQSection.css'; // <-- Import the new CSS
import { Link } from 'react-router-dom';

const FAQSection = () => {
  const styles = {
    // Keep all your existing styles except buttonGroup and button
    section: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '30px',
      padding: '40px',
      backgroundColor: '#fff',
      borderRadius: '16px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
      margin: '40px auto',
      maxWidth: '1000px',
    },
    imageContainer: {
      position: 'relative',
      borderRadius: '16px',
      overflow: 'hidden',
      flex: '1 1 300px',
      minWidth: '280px',
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    callBox: {
      position: 'absolute',
      bottom: '-12px',
      left: '110px',
      backgroundColor: '#facc15',
      padding: '12px 18px',
      borderRadius: '10px',
      fontWeight: 'bold',
      fontSize: '16px',
      color: '#000',
    },
    content: {
      flex: '1 1 400px',
      minWidth: '280px',
    },
    subtitle: {
      color: 'orange',
      fontSize: '14px',
      fontWeight: '600',
      marginBottom: '5px',
    },
    title: {
      fontSize: '28px',
      fontWeight: '700',
      marginBottom: '20px',
    },
    questionBox: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#f5f5f5',
      padding: '14px 18px',
      borderRadius: '8px',
      marginBottom: '10px',
      fontSize: '14px',
      fontWeight: '500',
    },
    arrow: {
      backgroundColor: '#cddc39',
      borderRadius: '4px',
      padding: '4px 8px',
      fontSize: '16px',
    },
  };

  return (
    <div style={styles.section}>
      {/* Left Side Image */}
      <div style={styles.imageContainer}>
        <img
          src="https://tse2.mm.bing.net/th/id/OIP.wZMowS_ofljx5PJqZmdM_gAAAA?pid=ImgDet&w=202&h=157&c=7&dpr=1.3&o=7&rm=3"
          alt="FAQ"
          style={styles.image}
        />
        <div style={styles.callBox}>📞 Call us anytime: &nbsp;<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 930 920 5438</div>
      </div>

      {/* Right Side Content */}
      <div style={styles.content}>
        <p style={styles.subtitle}>Frequently Asked Questions</p>
        <h2 style={styles.title}>You've Any Questions</h2>

        <div style={styles.questionBox}>
          What crops grow best in my region and climate?
          <span style={styles.arrow}>➤</span>
        </div>
        <div style={styles.questionBox}>
          How can I improve soil fertility naturally?
          <span style={styles.arrow}>➤</span>
        </div>
        <div style={styles.questionBox}>
          What are the most effective pest control methods?
          <span style={styles.arrow}>➤</span>
        </div>

        <div className="faq-button-group">
          <Link to="/HelpPage" className="faq-button">Ask Questions</Link>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
