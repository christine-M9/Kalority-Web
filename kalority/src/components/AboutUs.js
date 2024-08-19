import React, { useEffect } from "react";
import "../App.css";

const AboutUs = () => {
  useEffect(() => {
    const image = document.querySelector('.about-us-image img');

    const handleMouseMove = (event) => {
      const { offsetX, offsetY, target } = event;
      const { clientWidth, clientHeight } = target;
      const centerX = clientWidth / 2;
      const centerY = clientHeight / 2;
      const deltaX = offsetX - centerX;
      const deltaY = offsetY - centerY;

      const rotateX = (deltaY / centerY) * 30; 
      const rotateY = (deltaX / centerX) * -30;

      image.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const resetImagePosition = () => {
      image.style.transform = 'rotateX(0deg) rotateY(0deg)';
    };

    image.addEventListener('mousemove', handleMouseMove);
    image.addEventListener('mouseleave', resetImagePosition);

    return () => {
      image.removeEventListener('mousemove', handleMouseMove);
      image.removeEventListener('mouseleave', resetImagePosition);
    };
  }, []);

  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <div className="about-us-image">
          <img src="/images/About image.png" alt="Kalority Team" />
        </div>
        <div className="about-us-text">
          <h2>ABOUT US</h2>
          <div className="about-us-additional">
            <p className="awesome-things">Awesome Things</p>
            <p className="about-kalority">About Kalority</p>
          </div>
          <p>
            At Kalority, we're driven by a shared commitment to excellence,
            innovation, and social responsibility. Our mission is to create lasting
            value for our clients, partners, and communities. Get in touch with us
            today to discover how Kalority can help you thrive in the digital age.
          </p>
          <button className="about-us-button">More About</button>
        </div>
      </div>

      <div className="about-us-images">
        <img src="/images/ss1.png" alt="workspace" className="about-us-extra-image" />
        <img src="/images/ss2.png" alt="Team" className="about-us-extra-image" />
        <img src="/images/ss3.png" alt="Kalority" className="about-us-extra-image" />
        <img src="/images/ss4.png" alt="Event" className="about-us-extra-image" />
        <img src="/images/ss5.png" alt="Tech" className="about-us-extra-image" />
      </div>
    </div>
  );
};

export default AboutUs;
