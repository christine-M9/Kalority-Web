import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <div className="container">
      <Link to="/" className="navbar-brand">Kalority</Link>
      <ul className="navbar-nav">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/details">Details</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/team">Team</Link></li>
        <li><Link to="/success-stories">Success Stories</Link></li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
