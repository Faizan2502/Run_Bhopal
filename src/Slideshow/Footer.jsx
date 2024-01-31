// Footer.jsx

import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="contact-info">
        <h3>Contact Us</h3>
        <p>Bhopal,Madhya Pradesh</p>
        <p>+91 12345 98789</p>
        <p>runbhopal@gmail.com</p>
      </div>

      <div className="social-links">
        <h3>Follow Us</h3>
        <div className="social-icons">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
        </div>
    
    </footer>
  );
};

export default Footer;
