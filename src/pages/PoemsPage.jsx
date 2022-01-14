import { useParams } from "react-router-dom";
import { poemsData } from "../data.js";
import "./poemPage.css";

import React from "react";

const PoemsPage = () => {
  const params = useParams();
  const id = +params.poemId;
  const [data] = poemsData.filter((poem) => poem.id === id);

  // const element = data
  // const test = () => {
  //   console.log(data.img);
  // };
  // test();

  /* <p>{data[0].id}</p>
  <p>{data[0].title}</p>
  <p>{data[0].author}</p> */

  return (
    <div className="poemData">
      <div className="leftPoemSectionContainer">
        <p className="poemNumber">{data.id}</p>
        <p className="poemOneTitle">{data.title}</p>
        <p className="poemText">{data.poem}</p>
        <p className="poemAuthor">-{data.author}</p>
      </div>
      <div className="rightPoemSectionContainer">
        <img className="authorImg" src={data.img}></img>
      </div>
    </div>
  );
};

export default PoemsPage;

// domain.com/poem/:poemId

{
  /*  */
}
