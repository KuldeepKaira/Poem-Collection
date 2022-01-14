import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="heroDescription">
        <h1>A Collection of Poems by great Indian Writers</h1>
        <p>
          These poems are one of the best of their times and will let you feel
          energised and mesmerised at the same time. Spare some free time and
          give it all a read.
        </p>
        <div className="buttonContainer">
          <button className="btn">Start Reading</button>
          <button className="btn">About Me &darr;</button>
        </div>
        <div className="poetsGlimpse">
          <img className="poetsIcon" src="assets/poets/poet-1.webp" />
          <img className="poetsIcon" src="assets/poets/poet-2.webp" />
          <img className="poetsIcon" src="assets/poets/poet-3.webp" />
          <img className="poetsIcon" src="assets/poets/poet-4.webp" />
          <img className="poetsIcon" src="assets/poets/poet-5.webp" />
          <img className="poetsIcon" src="assets/poets/poet-6.webp" />
          <img className="poetsIcon" src="assets/poets/poet-7.webp" />
          <span>1000+ poems that live in our hearts forever</span>
        </div>
      </div>
      <div className="heroImageBox">
        <img className="heroImg" src="assets/hero.webp" />
      </div>
    </div>
  );
};

export default Hero;
