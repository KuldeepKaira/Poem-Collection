import React, { Fragment } from "react";
import "./poemSection.css";
import { poemsData } from "../../data.js";
import { useNavigate } from "react-router-dom";

const PoemSection = () => {
  const navigate = useNavigate();
  return (
    <div className="poemsContainer">
      <h1 className="sectionTitle">Poems Section</h1>
      <div className="poemSection">
        <ul className="poemsCards">
          {poemsData.map((poem) => (
            <li
              className="poemCard"
              key={poem.id}
              onClick={() => navigate(`/poem/${poem.id}`)}
            >
              <div className="overlay"></div>
              <img className="poemCover" src={poem.cover} />
              <span className="poemTitle">{poem.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PoemSection;
