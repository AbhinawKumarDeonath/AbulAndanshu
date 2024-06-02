// src/HeroSection.js
import React from 'react';
import './HeroSection.css';

const HeroSection = ({ videoSrc, videoType }) => {
  return (
    <div className="hero-container">
      <video className="hero-video" autoPlay muted loop>
        <source src={videoSrc} type={videoType} />
        Your browser does not support the video tag.
      </video>
      
    </div>
  );
};

export default HeroSection; // Default export

