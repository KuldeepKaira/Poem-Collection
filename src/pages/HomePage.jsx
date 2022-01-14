import React, { useRef } from "react";
import Hero from "../components/hero/Hero";
import PoemSection from "../components/poemSection/PoemSection";
import AboutMe from "../components/aboutMe/AboutMe";
import SubmitForm from "../components/submitPoem/SubmitForm.jsx";
import "./homePage.css";

const HomePage = () => {
  // const poemSection = useRef(null);
  // const aboutMe = useRef(null);
  // const submitForm = useRef(null);

  // const gotToPoemSection = () => {
  //   window.scrollTo({ top: poemSection.current.offsetTop, behavior: "smooth" });
  // };
  // const gotToAboutSection = () => {
  //   window.scrollTo({ top: aboutMe.current.offsetTop, behavior: "smooth" });
  // };
  // const gotToFormSection = () => {
  //   window.scrollTo({ top: submitForm.current.offsetTop, behavior: "smooth" });
  // };

  return (
    <div className="homePage">
      <Hero />
      <PoemSection />
      <AboutMe />
      <SubmitForm />
    </div>
  );
};

export default HomePage;
