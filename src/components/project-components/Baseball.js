import React from "react";
import leagues from "../../assets/gifs/leagues.png";

export default function Baseball() {
  return (
    <div className="project">
      <div className="left-column">
        <h2>Star Wars Major League</h2>
        <h3>Where Baseball is mashed up with Pop Culture Worlds</h3>
        <div className="tags">
          <div className="category-tag">Art</div>
          <div className="materials-tag"> Merino Felt / Cotton Thread</div>
        </div>
        <div className="project-description">
          <p>Here's a description</p>
        </div>
      </div>
      <div className="right-column">
        <img
          src={leagues}
          alt="A collection of 8 handmade patches of fake star wars baseball teams"
        />
      </div>
    </div>
  );
}
