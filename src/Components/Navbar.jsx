import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../Css/navbar.css';

const Navbar = ({ variant }) => {
  const location = useLocation();
  const { addedItems } = location.state || [];
  const [menuOpen, setMenuOpen] = useState(false);

  const isTransparent = variant === 'hero';

  const styles = {
    navbar: {
      position: 'fixed',
      top: '0',
      width: '100%',
      backgroundColor: '#ffff',
      color: 'black',
      padding: '15px 30px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      zIndex: 10,
      boxShadow: '0 2px 10px rgba(0.20, 0.20, 0.20, 0.20)',
    },
    logo: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginLeft: '10px',
    },
   navLinks: {
  listStyle: 'none',
  flexDirection: 'column',
  gap: '20px',
  margin: 0,
  padding: 0,
},

    navLink: {
      color: 'black',
      textDecoration: 'none',
      fontSize: '20px',
      fontWeight: '600',
      transition: 'color 0.3s ease'
    },
    hamburger: {
      display: 'none',
      flexDirection: 'column',
      cursor: 'pointer',
    },
    bar: {
      height: '3px',
      width: '25px',
      backgroundColor: 'black',
      margin: '4px 0',
      transition: '0.3s',
    }
  };

  const handleHover = (e, isHovering) => {
    e.target.style.color = isHovering ? '#2e7d32' : 'black';
  };

  return (
    <nav style={styles.navbar}>
      <img
        src="/images/logo1.png"
        alt="AgroPrime Logo"
        className='nav-logo'
      />

      {/* Hamburger button (mobile only) */}
      <div
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div style={styles.bar}></div>
        <div style={styles.bar}></div>
        <div style={styles.bar}></div>
      </div>

      {/* Nav links */}
      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <Link to="/" style={styles.navLink}
          onMouseEnter={(e) => handleHover(e, true)}
          onMouseLeave={(e) => handleHover(e, false)}>Home</Link>

        <Link to="/AboutUs" style={styles.navLink}
          onMouseEnter={(e) => handleHover(e, true)}
          onMouseLeave={(e) => handleHover(e, false)}>About</Link>

        <a style={styles.navLink}
          onMouseEnter={(e) => handleHover(e, true)}
          onMouseLeave={(e) => handleHover(e, false)}>Information</a>

        <li className="dropdown">
          <span className="dropbtn">
            <Link to="/ProductMain" style={styles.navLink}
              onMouseEnter={(e) => handleHover(e, true)}
              onMouseLeave={(e) => handleHover(e, false)}>Shop &#9662;</Link>
          </span>
          <div className="dropdown-content">
            <Link to="/ViewOrders">View Orders</Link>
          </div>
        </li>

        <Link to="/ContactSection" style={styles.navLink}
          onMouseEnter={(e) => handleHover(e, true)}
          onMouseLeave={(e) => handleHover(e, false)}>Contact</Link>

        <Link to="/Login" style={styles.navLink}
          onMouseEnter={(e) => handleHover(e, true)}
          onMouseLeave={(e) => handleHover(e, false)}>Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
