import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Features from "./components/Features";
import Contact from "./components/ContactPage";
import Team from "./components/TeamSection";
// import Details from './components/Details';
// import SuccessStories from './components/SuccessStories';
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="main-content">
        <section id="home">
          <Home />
        </section>
        <section id="features">
          <Features />
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
