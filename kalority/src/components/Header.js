import React from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <div className="logo">
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <img
                src="https://via.placeholder.com/150"
                alt="Placeholder Logo"
                style={{ width: '120px' }} // Adjust width as needed
              />
            </Link>
          </div>
          <ul className="menu">
            <li className="menu-item">
              <Link
                activeClass="active"
                to="details"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Details
              </Link>
            </li>
            <li className="menu-item">
              <Link
                activeClass="active"
                to="team"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Team
              </Link>
            </li>
            <li className="menu-item">
              <Link
                activeClass="active"
                to="success"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Success Stories
              </Link>
            </li>
            <li className="menu-item">
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
