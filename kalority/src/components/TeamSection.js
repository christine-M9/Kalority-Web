import React from "react";
import "../App.css";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Bonface Lukorito",
      role: "CEO & Founder",
      image: "/images/samuel-1233415_1280.jpg",
      instagram: "https://www.instagram.com/bonface",
      twitter: "https://twitter.com/bonface",
      facebook: "https://www.facebook.com/bonface",
    },
    {
      name: "Sylvia Musangi",
      role: "XXXXXXXXX",
      image: "/images/samuel-1233415_1280.jpg",
      instagram: "https://www.instagram.com/sylvia",
      twitter: "https://twitter.com/sylvia",
      facebook: "https://www.facebook.com/sylvia",
    },
    {
      name: "Irene Kavosa",
      role: "XXXXXXXXXXX",
      image: "/images/samuel-1233415_1280.jpg",
      instagram: "https://www.instagram.com/irene",
      twitter: "https://twitter.com/irene",
      facebook: "https://www.facebook.com/irene",
    },
    {
      name: "Christine Juma",
      role: "XXXXXXXXXXXX",
      image: "/images/samuel-1233415_1280.jpg",
      instagram: "https://www.instagram.com/christine",
      twitter: "https://twitter.com/christine",
      facebook: "https://www.facebook.com/christine",
    },
  ];

  return (
    <div className="team-container">
      <p className="team-heading">Meet The Kalority Team</p>
      <div className="team-wrapper">
        {teamMembers.map((member, index) => (
          <div className="team-member-container" key={index}>
            <img src={member.image} alt={member.name} className="team-image" />
            <div className="team-info">
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
            <div className="social-links">
              <a
                href={member.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="social-icon" />
              </a>
              <a
                href={member.twitter}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter className="social-icon" />
              </a>
              <a
                href={member.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="social-icon" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
