import React from "react";
import "./sideBar.css";
import { poemsData } from "../../data.js";
import { useNavigate } from "react-router-dom";

const SideBar = (props) => {
  const navigate = useNavigate();

  const clickHandler = (id) => {
    props.setSideBarOpen();
    navigate(`/poem/${id}`);
  };

  return (
    <div className={`sideBar ${props.sideBarOpen ? "active" : ""}`}>
      <ul className="poemsSideList">
        {poemsData.map((poem) => (
          <li
            key={poem.id}
            className="poemSide"
            onClick={() => clickHandler(poem.id)}
          >
            <p className="poemSideTitle">{poem.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
