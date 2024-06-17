import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home'; // Assuming you have a Home component
import Details from './components/Details'; // Assuming you have a Details component
import SuccessStories from './components/SuccessStories'; // Assuming you have a SuccessStories component
import Features from './components/Features'; // Assuming you have a Features component
import Contact from './components/ContactPage'; // Assuming you have a Contact component
import Team from './components/TeamSection'; // Assuming you have a Team component
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />
          <Route path="/successstories" element={<SuccessStories />} />
          <Route path="/features" element={<Features />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
