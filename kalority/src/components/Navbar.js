import React from 'react';

const Navbar = () => (
  <nav className="navbar">
    <div className="container">
      <div className="navbar-brand">Kalority</div>
      <ul className="navbar-nav">
        <li><a href="/">HOME</a></li>
        <li><a href="/details">DETAILS</a></li>
        <li><a href="/contact">CONTACT</a></li>
        <li><a href="/team">TEAM</a></li>
        <li><a href="/success-stories">SuCCESS STORIES</a></li>
        <li><a href="/features">FEATURES</a></li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
