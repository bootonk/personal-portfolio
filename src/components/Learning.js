import React from "react";
import eyes from "../assets/eyes.png";

export default function Learning() {
  return (
    <div className="flip-block">
      <img src={eyes} alt="eyes" className="flip-img" />
      <div className="content">
        <div className="front">
          <h3>I'm learning...</h3>
        </div>
        <div className="back">
          <ul>
            <li>
              <p>Deployment with Github Pages and Fly.io</p>
            </li>
            <li>
              <p>More React.js with this portfolio!</p>
            </li>
            <li>
              <p>
                Generative Art with <a href="https://p5js.org/">p5js</a>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
