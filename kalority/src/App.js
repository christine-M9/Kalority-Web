import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Features from "./components/Features";
import Contact from "./components/ContactPage";
// import Details from './components/Details';
import Team from "./components/TeamSection";
// import SuccessStories from './components/SuccessStories';
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="/details" element={<Details />} /> */}
            <Route path="/team" element={<Team />} />
            {/* <Route path="/successstories" element={<SuccessStories />} /> */}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
