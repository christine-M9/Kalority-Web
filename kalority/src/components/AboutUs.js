import React from "react";
import "../App.css";

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <div className="about-us-image">
          <img src="/images/About image.png" alt="About Us" />
        </div>
        <div className="about-us-text">
          <h2>About Us</h2>
          <p>
            At Kalority, we're driven by a shared commitment to excellence,
            innovation, and social responsibility. Our mission is to create lasting
            value for our clients, partners, and communities. Get in touch with us
            today to discover how Kalority can help you thrive in the digital age.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
