import React from "react";
import tryPodsGif from "../../assets/gifs/try-pods-friends-list.gif";

export default function TryPods() {
  return (
    <div className="project">
      <div className="left-column">
        <h2>Try-Pods</h2>
        <h3>Where you can find your next favourite podcasts</h3>
        <div className="tags">
          <div className="category-tag">Application</div>
          <div className="materials-tag">Ruby / Rails / React</div>
        </div>
        <div className="project-description">
          <p>Here's a description</p>
        </div>
      </div>
      <div className="right-column">
        <img src={tryPodsGif} alt="Try-Pods gif of website" />
      </div>
    </div>
  );
}
