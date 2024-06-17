// Home.js
import React from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation hook
import '../App.css';

const Home = () => {
  const location = useLocation();

  return (
    <div className={`home-container ${location.pathname === '/' ? 'home-background' : ''}`}>
      <h1>Welcome to Kalority</h1>
    </div>
  );
};

export default Home;
