import React from "react";
import "../App.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="#home" className="company-name navbar-text">
          Kalority
        </a>
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="#home" className="nav-link navbar-text">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="#features" className="nav-link navbar-text">
            Features
          </a>
        </li>
        <li className="nav-item">
          <a href="#team" className="nav-link navbar-text">
            Team
          </a>
        </li>
        <li className="nav-item">
          <a href="#contact" className="nav-link navbar-text">
            Contact
          </a>
        </li>
      </ul>

      <div className="navbar-right">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="#signin" className="nav-link navbar-text">
              Sign In
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
