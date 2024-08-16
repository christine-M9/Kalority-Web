import React, { useEffect } from "react";
import "../App.css";

const Features = () => {
  useEffect(() => {
    const image = document.querySelector('.image-section img');

    const handleMouseMove = (event) => {
      const { offsetX, offsetY, target } = event;
      const { clientWidth, clientHeight } = target;
      const centerX = clientWidth / 2;
      const centerY = clientHeight / 2;
      const deltaX = offsetX - centerX;
      const deltaY = offsetY - centerY;

      const rotateX = (deltaY / centerY) * 25; 
      const rotateY = (deltaX / centerX) * -25; 

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
    <div className="features">
      <div className="text-section">
        <h2>FEATURES</h2>
        <div className="feature-item">
          <p className="important-features">Important Features</p>
          <p className="bold-dig">for Digital Marketing</p>
          <p className="bold-paragraph">
            Spaghetti eel crocodile icefish lake trout. Blacksmelt, tripod fish grunt mackerel vendace surfperch.
          </p>
          <p>
            Carpsucker surgeonfish streamer fish boga deepwater stingray. Minnow arrowtooth eel darter Atlantic herring southern sandfish.
          </p>
        </div>
        <div className="web-site-analysis">
          <p className="web-site-title">Web Site Analysis</p>
          <p className="content-optimization-title">Content Optimization</p>
          <p>Free Optimization</p>
          <button className="feature-button">Read More</button>
        </div>
      </div>
      <div className="image-section">
        <img src="./images/feat img1.png" alt="Optimization" />
      </div>
    </div>
  );
};

export default Features;
