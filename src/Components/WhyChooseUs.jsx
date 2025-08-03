import React from 'react';

const WhyChooseUs = () => {
  const styles = {
    container: {
      maxWidth: '900px',
      margin: '50px auto',
      padding: '40px',
      backgroundColor: '#fff',
      borderRadius: '16px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
      textAlign: 'center',
    },
    heading: {
      fontSize: '24px',
      fontWeight: '700',
      marginBottom: '20px',
    },
    paragraph: {
      fontSize: '15px',
      lineHeight: '1.8',
      color: '#333',
      textAlign: 'justify',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Why choose us ?</h2>
      <p style={styles.paragraph}>
        We support farmers with modern tools, organic products, real-time weather updates, and expert guidance for sustainable agriculture.
Whether you're managing crops or trading produce, our platform empowers you with data-driven decisions and reliable resources.
We believe in innovation rooted in tradition—so you can grow more, waste less, and thrive with confidence.
      </p>
    </div>
  );
};

export default WhyChooseUs;
