import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      textAlign: 'center',
      padding: '0.5em',
      fontSize: '0.8em',      // Small text size
      backgroundColor: 'transparent',  // Transparent background
      position: 'fixed',
      left: '0',
      bottom: '0',
      width: '100%',
      color: '#fff',           // Optional: adjust text color for visibility
    }}>
      <p>Made with ❤️ by Deepanshu Mishra</p>
    </footer>
  );
};

export default Footer;
