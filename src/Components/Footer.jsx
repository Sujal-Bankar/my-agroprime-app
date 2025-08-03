import React from 'react';

function Footer() {
  const footerStyle = {
    backgroundColor: '#2b2b2b',
    padding: '30px 20px',
    color: 'white',
    textAlign: 'center',
  };

  const contentStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const logoContainer = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '15px',
  };

  const logoImageStyle = {
    width: 'auto',
    height: '40px',
  };

  const brandText = {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#7fc341',
  };

  const socialLinksStyle = {
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'center',
  };

  const linkStyle = {
    display: 'flex',
    alignItems: 'center',
    color: 'white',
    textDecoration: 'none',
    fontSize: '14px',
    gap: '5px',
  };

  const iconStyle = {
    width: '18px',
    height: '18px',
  };

  const dividerStyle = {
    color: '#aaa',
  };

  return (
    <footer style={footerStyle}>
      <div style={contentStyle}>
        <div style={logoContainer}>
          <img
            src="/images/logo1.png"
            alt="Agroprime Logo"
            style={logoImageStyle}
          />
          {/* <span style={brandText}>AGROPRIME</span> */}
        </div>
        <div style={socialLinksStyle}>
          <a href="#" style={linkStyle}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/733/733547.png"
              alt="Facebook"
              style={iconStyle}
            />
            Facebook
          </a>
          <span style={dividerStyle}>|</span>
          <a href="#" style={linkStyle}>
            Instagram
          </a>
          <span style={dividerStyle}>|</span>
          <a href="#" style={linkStyle}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/1384/1384060.png"
              alt="YouTube"
              style={iconStyle}
            />
            Youtube
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
