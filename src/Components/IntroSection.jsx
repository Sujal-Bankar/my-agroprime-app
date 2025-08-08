import React from 'react';

const IntroSection = () => {
  const styles = {
    container: {
      display: 'flex',
      padding: '60px',
      backgroundColor: 'white',
      gap: '20px',
    },
    leftBox: {
      flex: 1,
      padding: '30px',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      borderRadius: '10px',
    },
    heading: {
      fontSize: '2rem',
      fontWeight: 'bold',
      color: 'black',
      marginBottom: '15px',
    },
     heading2: {
      fontSize: '1.5rem',
      fontFamily: "'Covered By Your Grace', cursive",
      fontWeight: 'bold',
      color: '#2e7d32',
      marginBottom: '15px',
    },
    description: {
      fontSize: '19px',
      color: '#444',
      lineHeight: '1.5',
    },
    leftBottomBox: {
      flex: 'none',
      padding: '30px',
      position: 'absolute',
      display: 'flex',
      flexDirection: 'column',
      marginTop:' 312px',
      justifyContent: 'space-between',
      borderRadius: '10px',
    },
    cornerImage: {
      position: 'absolute',
      bottom: '7px',
      right: '15px',
      width: '60px',
      height: '60px',
      objectFit: 'cover',
      borderRadius: '8px',
    },
    middleBox: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
    },
    middleTopImg: {
      flex: 6,
      borderRadius: '10px',
      objectFit: 'cover',
      width: '247.95px',
     height: '411.92px',
     marginLeft:'200px',
    },
    middleBottomImg: {
      flex: 4,
      borderRadius: '10px',
      objectFit: 'cover',
      width: '240.95px',
      marginLeft: '200px',
      height: '87px',
    },
    rightBox: {
      flex: 1,
    },
    fullImage: {
      width: '296px',
      height: '538.72px',
      objectFit: 'cover',
      borderRadius: '10px',
    }
  };

  return (
    <section style={styles.container}>
      {/* Left Content Box */}
      <div style={styles.leftBox}>
        <div>
            <h3 style={styles.heading2}>Get to Know us</h3>
          <h2 style={styles.heading}>A Leader in Agricultural Market</h2>
          <p style={styles.description}>
            We offer modern farming tools, consultancy, and supplies to help farmers achieve sustainable success.
            Join us and be a part of the agri revolution.
          </p>
        </div>
        
      </div>
      <div style={styles.middleBox}>
        <img
          src="https://static.wixstatic.com/media/80f7bf_e3bd2b6fcd574fe7b21b77bc19ab4e50~mv2.jpg/v1/crop/x_0,y_48,w_500,h_390/fill/w_367,h_286,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/apple-farmer-v2.jpg"
          alt="Farmer Field"
          style={styles.middleTopImg}
        />
        <img
          src="data:image/jpeg;base64,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"
          alt="Harvest"
          style={styles.middleBottomImg}
        />
      </div>

      {/* Right Full Image Box */}
      <div style={styles.rightBox}>
        <img
          src="https://www.shutterstock.com/image-photo/farmer-tractor-working-on-field-600nw-2431819629.jpg"
          alt="Agri Full"
          style={styles.fullImage}
        />
      </div>
      {/* Left Bottom Content Box */}
      <div style={styles.leftBottomBox}>
        <div>
          <h3 style={styles.heading2}>Modern Agriculture Types</h3>
          <p style={styles.description}>
            We are here for you from start to finish
          </p>
          
        </div>
        </div>
    </section>
  );
};

export default IntroSection;