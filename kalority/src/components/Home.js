import React from "react";
import "../App.css";

const Home = () => {
  return (
    <div id="home" className="home-container home-background">
      <div className="new-image-container">
        <img
          src="/images/Circle_Seal-brown_Solid.svg.png" 
          alt="Semicircular Illustration"
          className="semicircular-illustration"
        />
      </div>
      <div className="content-wrapper">
        <h2>Social Media Marketing is the Best Ever</h2>
        <div className="additional-content">
          <p>
            Where innovation meets excellence in software-driven solutions. We
            specialize in crafting and maintaining bespoke software applications
            tailored to your unique needs. Our team is dedicated to pushing the
            boundaries of technology to drive your business forward in the
            digital landscape.
          </p>
          <button className="multi-color-button">Discover</button>
        </div>
      </div>
      <div className="image-container">
        <img
          src="/images/home image.png" 
          alt="Illustration"
          className="illustration"
        />
      </div>
    </div>
  );
};

export default Home;
