import React from "react";
import smartGif from "../../assets/gifs/smart-screengrab.gif";

export default function Smart() {
  return (
    <div className="project">
      <div className="left-column">
        <h2>Smart Todo App</h2>
        <h3>Never need to organize your to-do list again!</h3>
        <div className="tags">
          <div className="category-tag">Application</div>
          <div className="materials-tag">Javascript</div>
        </div>
        <div className="project-description">
          <p>Here's a description</p>
        </div>
      </div>
      <div className="right-column">
        <img
          src={smartGif}
          alt="Gif of using the Smart Todo Application"
          className="shaded-img"
        />
      </div>
    </div>
  );
}
