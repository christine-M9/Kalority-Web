import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Features from "./components/Features";
import OurProjects from "./components/OurProjects";
import Testimonials from "./components/Testimonials";
import Team from "./components/TeamSection";
import Contact from "./components/ContactPage";
import "./App.css";

const App = () => {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      const sections = document.querySelectorAll("section");

      if (!navbar) return;

      const scrollPos = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionId = section.getAttribute("id");
        const link = document.querySelector(`a[href="#${sectionId}"]`);

        if (link) {
          if (
            scrollPos > section.offsetTop &&
            scrollPos < section.offsetTop + section.offsetHeight
          ) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        }
      });

      const homeSection = document.querySelector("#home");

      if (homeSection) {
        const homeSectionHeight = homeSection.offsetHeight;

        if (window.scrollY > homeSectionHeight) {
          navbar.classList.add("sticky");
        } else {
          navbar.classList.remove("sticky");
        }
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
        <section id="services">
          <Services />
        </section>
        <section id="features">
          <Features />
        </section>
        <section id="our-projects">
          <OurProjects />
        </section>
        <section id="testimonials">
          <Testimonials />
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
