import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Details from './components/Details';
import Contact from './components/Contact';
import Team from './components/Team';
import SuccessStories from './components/SuccessStories';
import './App.css';

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<Team />} />
        <Route path="/success-stories" element={<SuccessStories />} />
      </Routes>
    </div>
  </Router>
);

export default App;
