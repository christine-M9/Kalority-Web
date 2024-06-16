import React from 'react';

const Contact = () => (
  <div className="contact">
    <div className="container">
      <h1>Contact Us</h1>
      <p>Email us at contact@kalority.com</p>
      <button onClick={() => window.location = 'mailto:contact@kalority.com'}>Email Us</button>
    </div>
  </div>
);

export default Contact;
