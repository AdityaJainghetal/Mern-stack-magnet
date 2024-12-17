import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Logo and Description */}
        <div style={styles.section}>
          <img
            src="https://img.freepik.com/free-vector/gradient-mobile-store-logo-design_23-2149699859.jpg?semt=ais_hybrid"
            alt="MyShopping Logo"
            style={styles.logo}
          />
          <p style={styles.text}>
            Your one-stop shop for all your needs. We offer the best products at unbeatable prices with exceptional customer service.
          </p>
        </div>

        {/* Useful Links */}
        <div style={styles.section}>
          <h4>Useful Links</h4>
          <ul style={styles.linkList}>
            <li><a href="/about" style={styles.link}>About Us</a></li>
            <li><a href="/contact" style={styles.link}>Contact Us</a></li>
            <li><a href="/privacy" style={styles.link}>Privacy Policy</a></li>
            <li><a href="/terms" style={styles.link}>Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div style={styles.section}>
          <h4>Customer Service</h4>
          <ul style={styles.linkList}>
            <li><a href="/support" style={styles.link}>Support Center</a></li>
            <li><a href="/shipping" style={styles.link}>Shipping Information</a></li>
            <li><a href="/returns" style={styles.link}>Returns & Refunds</a></li>
            <li><a href="/faq" style={styles.link}>FAQs</a></li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div style={styles.section}>
          <h4>Follow Us On Social Media</h4>
          <div style={styles.socialLinks}>
            <a href="https://www.facebook.com/shahnawaj.ali.58511" target="_blank" rel="noopener noreferrer">
              <img src="https://img.icons8.com/?size=48&id=118497&format=png" alt="Facebook" style={styles.icon} />
            </a>
            <a href="https://www.linkedin.com/in/shahnawaj-ali-1416a9307/" target="_blank" rel="noopener noreferrer">
              <img src="https://img.icons8.com/?size=48&id=13930&format=png" alt="Twitter" style={styles.icon} />
            </a>
            <a href="https://www.instagram.com/shahnawaj5065/" target="_blank" rel="noopener noreferrer">
              <img src="https://img.icons8.com/?size=48&id=32323&format=png" alt="Instagram" style={styles.icon} />
            </a>
          </div>
        </div>
      </div>

      <div style={styles.copyright}>
        © 2024 - 2025 Electronix@Zone India Pvt. Ltd.® All Rights Reserved.
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '20px 0',
    fontFamily: 'Arial, sans-serif',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
    flexWrap: 'wrap', // Allow wrapping for smaller screens
  },
  section: {
    flex: 1,
    margin: '10px',
    minWidth: '250px', // Ensure each section takes up space but can adjust based on screen size
  },
  logo: {
    width: '150px',
  },
  text: {
    fontSize: '14px',
    lineHeight: '1.6',
    marginTop: '10px',
  },
  linkList: {
    listStyle: 'none',
    padding: 0,
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    display: 'block',
    marginBottom: '10px',
    fontSize: '14px',
  },
  socialLinks: {
    display: 'flex',
    gap: '10px',
  },
  icon: {
    width: '40px',
    height: '40px',
  },
  copyright: {
    marginTop: '20px',
    borderTop: '1px solid #444',
    paddingTop: '10px',
    fontSize: '12px',
    // textAlign: 'center',
  },

  /* Media Query for Small Screens (375px) */
  '@media (max-width: 375px)': {
    footer: {
      padding: '15px 0',
    },
    container: {
      flexDirection: 'column', // Stack sections vertically on small screens
      alignItems: 'center', // Center align sections
    },
    section: {
      width: '100%', // Make each section take full width on small screens
      marginBottom: '15px',
    },
    text: {
      fontSize: '12px', // Smaller text on small screens
    },
    link: {
      fontSize: '12px', // Smaller font for links
    },
    copyright: {
      fontSize: '10px', // Smaller copyright text
    },
    socialLinks: {
      justifyContent: 'center', // Center social media links
    },
    icon: {
      width: '35px', // Smaller icons for smaller screens
      height: '35px',
    },
  },
};

export default Footer;



