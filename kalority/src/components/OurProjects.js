import React from "react";
import "../App.css";

const OurProjects = () => {
  return (
    <section id="our-projects" className="our-projects">
      <h2>OUR PROJECTS</h2>
      <p className="no-margin" style={{ fontWeight: "700" }}>
        We've Done Lot's Of Work
      </p>
      <p className="no-margin" style={{ fontWeight: "280"}}>
        Check some from here</p>

      <div className="projects-grid">
        <div className="project-card">
          <img
            src="./images/project img1.jpg"
            alt="Project 1"
            className="project-image"
          />
          <a href="link_to_digital_marketing_project" className="project-link">
            <h3>
              Digital Marketing <span className="project-type">Project</span>
            </h3>
          </a>
          
          <p className="project-p">
            Redfin perch tripod fish zebra lionfish, nase slickhead! Jewelfish
            angler Devario gray reef shark.
          </p>
        </div>
        <div className="project-card">
          <img
            src="./images/project img2.jpg"
            alt="Project 2"
            className="project-image"
          />
          <a href="link_to_seo_project_ny" className="project-link">
            <h3>
              Creating SEO <span className="project-type">Projects in NY</span>
            </h3>
          </a>
          <p>
            Atlantic herring southern sandfish. Vimba, zebrafish yellow and
            black triplefin guitarfish Redfin perch.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurProjects;
