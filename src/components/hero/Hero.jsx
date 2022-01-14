import React from "react";
import "./hero.css";

const Hero = () => {
  const goToPoemSection = () => {
    window.scrollTo({ top: 600, behavior: "smooth" });
  };
  const goToAboutSection = () => {
    window.scrollTo({ top: 1500, behavior: "smooth" });
  };

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
          <button className="btn" onClick={goToPoemSection}>
            Start Reading
          </button>
          <button className="btn" onClick={goToAboutSection}>
            About Me &darr;
          </button>
        </div>
        <div className="poetsGlimpse">
          <img
            className="poetsIcon"
            src="https://i.ibb.co/1KLbFj4/poet-1.webp"
          />
          <img
            className="poetsIcon"
            src="https://i.ibb.co/HXJV8XW/poet-2.webp"
          />
          <img
            className="poetsIcon"
            src="https://i.ibb.co/gy4t6T8/poet-3.webp"
          />
          <img
            className="poetsIcon"
            src="https://i.ibb.co/r4p11cv/poet-4.webp"
          />
          <img
            className="poetsIcon"
            src="https://i.ibb.co/9tsqWFG/poet-5.webp"
          />
          <img
            className="poetsIcon"
            src="https://i.ibb.co/f1K4nK1/poet-6.webp"
          />
          <img
            className="poetsIcon"
            src="https://i.ibb.co/LZqSbMM/poet-7.webp"
          />
          <span>1000+ poems that live in our hearts forever</span>
        </div>
      </div>
      <div className="heroImageBox">
        <img className="heroImg" src="https://i.ibb.co/VwRsvBD/hero.webp" />
      </div>
    </div>
  );
};

export default Hero;
