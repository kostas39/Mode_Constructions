import React from "react";
import "./Hero.css";
import test from '../assets/test.png'

const Hero = () => {
  return(
    <div className="hero" style={{
      backgroundImage: `url(${test})`,
    }}>
       <div className="hero-text">
        <h1>Mode Construction Services Ltd.</h1>
        <p>We are a leading construction firm in North London.</p>
      </div>
    </div>
  )
}

export default Hero;
