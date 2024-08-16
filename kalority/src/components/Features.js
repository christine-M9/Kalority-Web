import React from "react";
import "../App.css"; 

const Features = () => {
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
        </div>
      </div>
      <div className="image-section">
        <img src="./images/feat img1.png" alt="Optimization" />
      </div>
    </div>
  );
};

export default Features;
