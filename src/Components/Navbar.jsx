import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = ({ variant }) => {
  const isTransparent = variant === 'hero'; 

   const styles = {
    navbar: {
      position:'fixed' ,
      top: isTransparent ? '0' : '0',
      right:'',
      width: '100%',
      backgroundColor:'#ffff',
      color: 'black',
      padding: '15px 30px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      zIndex: 10,
      boxShadow:'0 2px 10px rgba(0.20, 0.20, 0.20, 0.20)',
    },
    logo: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginLeft: '60px',
    },
    navLinks: {
      listStyle: 'none',
      display: 'flex',
      gap: '40px',
      marginRight: '80px',
      padding: 0,
    },
    navLink: {
      color: 'black',
      textDecoration: 'none',
      fontSize: '20px',
      fontWeight: '600',
      transition: 'color 0.3s ease'
    },
  };
  const handleHover = (e, isHovering) => {
    e.target.style.color = isHovering ? '#2e7d32' : 'black'; // green on hover
  };

  const menuItems = ['Home', 'About', 'Information', 'Blog', 'Shop', 'Contact', 'Login'];

  return (
    <nav style={styles.navbar}>
      <img
        src="/images/logo1.png"
        alt="AgroPrime Logo"
        style={{height: '70px', width: 'auto' }}
      />
      <div style={styles.navLinks}>
            <Link
              to="/"
              style={styles.navLink}
              onMouseEnter={(e) => handleHover(e, true)}
              onMouseLeave={(e) => handleHover(e, false)}
            >
              Home
            </Link>

            <Link
              to="/AboutUs"
              style={styles.navLink}
              onMouseEnter={(e) => handleHover(e, true)}
              onMouseLeave={(e) => handleHover(e, false)}
            >
              About
            </Link>

            <a
              to="/Information"
              style={styles.navLink}
              onMouseEnter={(e) => handleHover(e, true)}
              onMouseLeave={(e) => handleHover(e, false)}
            >
              Information
            </a>

            <Link
              to="/BlogPage"
              style={styles.navLink}
              onMouseEnter={(e) => handleHover(e, true)}
              onMouseLeave={(e) => handleHover(e, false)}
            >
              Blog
            </Link>

            <Link
              to="/ProductMain"
              style={styles.navLink}
              onMouseEnter={(e) => handleHover(e, true)}
              onMouseLeave={(e) => handleHover(e, false)}
            >
              Shop
            </Link>


            <Link
              to="/ContactSection"
              style={styles.navLink}
              onMouseEnter={(e) => handleHover(e, true)}
              onMouseLeave={(e) => handleHover(e, false)}
            >
              Contact
            </Link>

            <Link
              to="/Login"
              style={styles.navLink}
              onMouseEnter={(e) => handleHover(e, true)}
              onMouseLeave={(e) => handleHover(e, false)}
            >
              Login
            </Link>
          </div>  
    </nav>
  );
};

export default Navbar;
