import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Details from './components/Details';
import Features from './components/Features';
import Contact from './components/ContactPage';
import Team from './components/TeamSection';
import SuccessStories from './components/SuccessStories';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />
          <Route path="/features" element={<Features />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<Team />} />
          <Route path="/successstories" element={<SuccessStories />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
