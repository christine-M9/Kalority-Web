import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs"; 
import Features from "./components/Features";
import OurProjects from "./components/OurProjects";  // Import the new component
import Team from "./components/TeamSection";
import Contact from "./components/ContactPage";
import "./App.css";

const App = () => {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      const homeSection = document.querySelector("#home");
      const homeSectionHeight = homeSection.offsetHeight;

      if (window.scrollY > homeSectionHeight) {
        navbar.classList.add("sticky");
      } else {
        navbar.classList.remove("sticky");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="main-content">
        <section id="home">
          <Home />
        </section>
        <section id="about-us">
          <AboutUs />
        </section>
        <section id="features">
          <Features />
        </section>
        <section id="our-projects">  {/* Add the new section here */}
          <OurProjects />
        </section>
        <section id="team">
          <Team />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    </div>
  );
};

export default App;
