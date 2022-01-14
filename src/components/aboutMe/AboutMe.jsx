import React, { Fragment } from "react";
import "./aboutMe.css";

const AboutMe = () => {
  return (
    <Fragment>
      <div className="aboutMe">
        <div className="aboutMeLeft">
          <img
            className="zigzag"
            src="https://i.ibb.co/k8PqbXj/zigzag.png"
            alt="zig zag"
          />
          <h1 className="aboutMeTitle">
            Hi! I am <span>Kuldeep</span>
          </h1>
          <p className="aboutMeDesignation">The Poem Collector</p>
          <p className="aboutMeDescription">
            I collect amazing poems written by Indian Writers
          </p>
          <button className="storyButton">My Story</button>
        </div>
        <div className="aboutMeRight">
          <img
            className="myPhoto"
            src="https://i.ibb.co/fX1Yqtj/about-me.webp"
            alt="my photo"
          />
        </div>
      </div>
      <div className="aboutMeStory">
        <div className="storyBox">
          <div className="leftStoryBox">
            <p className="story-heading">About Me</p>
            <p className="story-line">Hi I'm Kuldeep and I collect poems</p>
            <p className="story-para">
              I was born in Chandigarh, and I was fascinated by the wordplay of
              some very famous poets and shayars. The way they used very simple
              words and arranged them to convey a deep meaning was amazing.
              Therefore I began collecting poems.
              <br />
              <br />
              And now my collection is getting bigger and bigger. Therefore I am
              sharing my favourites in this website blog. Here you will find
              some deep meaning poems.
              <br />
              <br />
              If You have some poems. Do share it with me. I'll add that up to
              this blog.
            </p>
          </div>
          <div className="blankBox"></div>
        </div>
        <img
          className="parallaxBg"
          src="https://i.ibb.co/zxRtS9b/parallax.webp"
          alt="parallax bg"
        />
      </div>
    </Fragment>
  );
};

export default AboutMe;
