import React from "react";
import "../App.css";
import { FaFacebookF, FaXTwitter, FaYoutube, FaInstagram } from 'react-icons/fa6'; // Correct import

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <h3 className="footer-title">Kalority</h3>
        <p> Copyright 2019 &copy; Kalority.</p>
      </div>
      <div className="footer-center">
        <p>113 Fulton Street, Suite 721</p> 
        <p>New York, NY 10010</p>
        <p>email@mail.com</p>
        <p>+254 (0) 711 111 111</p>
      </div>
      <div className="footer-right">
        <ul className="footer-links">
          <li>Documents</li>
          <li>Additional Info</li>
          <li>Application</li>
          <li>Useful Link</li>
        </ul>
        <div className="footer-icons">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaXTwitter /></a> 
          <a href="#"><FaYoutube /></a>
          <a href="#"><FaInstagram /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
