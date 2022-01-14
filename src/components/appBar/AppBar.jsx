import React from "react";
import "./appBar.css";
import { useNavigate } from "react-router-dom";

const AppBar = (props) => {
  const gotToPoemSection = () => {
    window.scrollTo({ top: 600, behavior: "smooth" });
  };
  const goToAboutSection = () => {
    window.scrollTo({ top: 1500, behavior: "smooth" });
  };
  const goToFormSection = () => {
    window.scrollTo({ top: 2800, behavior: "smooth" });
  };

  const navigate = useNavigate();
  return (
    <div className="appBar">
      <div className="left">
        <img
          src="https://i.ibb.co/RyD3p9x/logo-white.png"
          alt="app logo"
          className="logoImg"
          onClick={() => navigate(`/`)}
        />
      </div>
      <div className="right">
        <a onClick={gotToPoemSection}>Poems</a>
        <a onClick={goToAboutSection}>About Me</a>
        <a onClick={goToFormSection}>Submit Poem</a>
        {/* <a>Contact me</a> */}
        <a onClick={props.onsideBarClick}>Poems List</a>
      </div>
    </div>
  );
};

export default AppBar;
