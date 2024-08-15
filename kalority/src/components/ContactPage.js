import React from "react";
import "../App.css";

const ContactPage = () => {
  return (
    <div className="contact-container">
      <h2>
        <span className="bold-text">Get</span> in Touch
      </h2>
      <form className="contact-form">
        <input
          type="text"
          id="fullName"
          name="fullName"
          placeholder="Full name"
        />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email address"
        />
        <textarea
          id="message"
          name="message"
          rows="4"
          placeholder="Message"
        ></textarea>
        <button type="submit" className="submit-button">
          Send Message
        </button>
      </form>
      <div className="contact-info">
        <p><span className="contact-highlight">Have any</span> <span className="contact-info-questions">Questions?</span></p>
        <p><span className="contact-info-number">+254 xxxxxxxxx</span></p>
      </div>
    </div>
  );
};

export default ContactPage;
