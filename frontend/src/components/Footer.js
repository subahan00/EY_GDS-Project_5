import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaPinterest } from 'react-icons/fa';
import '../Footer.css'; // Optionally, use a separate CSS file for footer styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <Link to="/contact">Contact Us</Link>
        <Link to="/support">Support</Link>
        <Link to="/mail">Mail</Link>
      </div>
      <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook size={30} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={30} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={30} />
        </a>
        <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
          <FaPinterest size={30} />
        </a>
      </div>
      <p>&copy; 2024 NewsApp. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
