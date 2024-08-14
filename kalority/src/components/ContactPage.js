import React from "react";
import "../App.css";

const ContactPage = () => {
  return (
    <div className="contact-container">
      <h2>Get in Touch</h2>
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
    </div>
  );
};

export default ContactPage;
