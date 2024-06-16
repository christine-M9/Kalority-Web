import React from 'react';

const Navbar = () => (
  <nav className="navbar">
    <div className="container">
      <div className="navbar-brand">Kalority</div>
      <ul className="navbar-nav">
        <li><a href="/">Home</a></li>
        <li><a href="/details">Details</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/team">Team</a></li>
        <li><a href="/success-stories">Success Stories</a></li>
        <li><a href="/features">Features</a></li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
