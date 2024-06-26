import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <NavLink exact to="/" className="company-name">
          Kalority
        </NavLink>
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink exact to="/" className="nav-link" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/details" className="nav-link" activeClassName="active">
            Details
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/features" className="nav-link" activeClassName="active">
            Features
          </NavLink>
        </li>
        
        <li className="nav-item">
          <NavLink to="/successstories" className="nav-link" activeClassName="active">
            Testimonials
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/team" className="nav-link" activeClassName="active">
            Team
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" className="nav-link" activeClassName="active">
            Contact
          </NavLink>
        </li>       
      </ul>
      
      <div className="navbar-right">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to="/signin" className="nav-link">
              Sign In
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
