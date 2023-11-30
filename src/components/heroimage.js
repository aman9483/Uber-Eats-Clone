import React from 'react';
import Hero from '../assests/heroimg.jpg'; // Make sure the path is correct
import './style.css';
import Header from '../components/Header';

const HeroImage = () => {
  return (


    <div className="hero-container">

      <Header />
       
      
      <img src={Hero} alt="hero" className="hero-image" />

      
      
    </div>
  );
};

export default HeroImage;
