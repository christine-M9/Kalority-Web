import React from "react";
import "../App.css";

const Services = () => {
  return (
    <div className="services-container">
      <h1>OUR SERVICES</h1>
      <p className="services-description-strong">
        <strong>What We</strong> can do for you
      </p>
      <div className="services-grid">
        <div className="service-item">
          <img
            src="/images/smartphone_9204617.png"
            alt="Software Development"
            className="service-image"
          />
          <div className="service-text">
            <h2>Software Development</h2>
            <p>
              At Kalority, we're passionate about harnessing the latest
              technological advancements to build robust software solutions.
              Whether you need scalable web applications or intuitive mobile
              apps, our team of experts is here to turn your ideas into reality.
            </p>
          </div>
        </div>
        <div className="service-item">
          <img
            src="/images/smartphone_9204617.png"
            alt="Investment Ventures"
            className="service-image"
          />
          <div className="service-text">
            <h2>Investment Ventures</h2>
            <p>
              As a forward-thinking investment company, Kalority seeks out
              opportunities that align with our vision for the future. We're
              committed to supporting businesses across diverse sectors, fueling
              innovation and growth.
            </p>
          </div>
        </div>
        <div className="service-item">
          <img
            src="/images/smartphone_9204617.png"
            alt="VSLA Partners"
            className="service-image"
          />
          <div className="service-text">
            <h2>VSLA Partners</h2>
            <p>
              Kalority proudly partners with Village Savings and Loan
              Associations (VSLAs) to promote financial inclusion and
              empowerment in underserved communities. Together, we're making a
              meaningful impact on local economies and fostering sustainable
              development.
            </p>
          </div>
        </div>
        <div className="service-item">
          <img
            src="/images/smartphone_9204617.png"
            alt="Furniture Business"
            className="service-image"
          />
          <div className="service-text">
            <h2>Furniture Business</h2>
            <p>
              In addition to our software endeavors, Kalority has a passion for
              craftsmanship and design. Explore our range of high-quality
              furniture products that seamlessly blend style and functionality.
            </p>
          </div>
        </div>
        <div className="service-item">
          <img
            src="/images/smartphone_9204617.png"
            alt="Agriculture Projects"
            className="service-image"
          />
          <div className="service-text">
            <h2>Agriculture Projects</h2>
            <p>
              Agriculture is the backbone of our global economy, and Kalority is
              dedicated to driving progress in this vital sector. Through
              strategic planning and investment, we're working to optimize
              productivity and sustainability in agriculture projects worldwide.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
