import React from "react";
import "../App.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="#home" className="company-name navbar-text">
          <img
            src="./images/300x300 Logo.png" 
            alt="Kalority Logo"
            className="navbar-logo"
          />
          KALORITY
        </a>
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="#home" className="nav-link navbar-text">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="#services" className="nav-link navbar-text">
            Services
          </a>
        </li>
        <li className="nav-item">
          <a href="#features" className="nav-link navbar-text">
            Features
          </a>
        </li>
        <li className="nav-item">
          <a href="#our-projects" className="nav-link navbar-text">
            Our Projects
          </a>
        </li>
        <li className="nav-item">
          <a href="#testimonials" className="nav-link navbar-text">
            Testimonials
          </a>
        </li>
        <li className="nav-item">
          <a href="#contact" className="nav-link navbar-text">
            Contact
          </a>
        </li>
      </ul>

    </nav>
  );
};

export default Navbar;
