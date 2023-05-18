import React from "react";
import personalSite from "../../assets/gifs/personal-site.png";

export default function Personal() {
  return (
    <div className="project">
      <div className="left-column">
        <h2>Personal Portfolio</h2>
        <h3>
          A place to share what's going on while I learn more skills to feature
        </h3>
        <div className="tags">
          <div className="category-tag">Application</div>
          <div className="materials-tag">React.js</div>
        </div>
        <div className="project-description">
          <p>Here's a description</p>
        </div>
      </div>
      <div className="right-column">
        <img
          src={personalSite}
          alt="This site displayed in a computer mockup"
        />
      </div>
    </div>
  );
}
