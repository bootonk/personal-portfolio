import React from "react";
import eyes from "../assets/eyes.png";

export default function Learning() {
  return (
    <div className="flip-block">
      <h3>I'm learning...</h3>
      <div className="flip-block__content">
        <div className="flip-block__content--front">
          <img src={eyes} alt="eyes" className="flip-img" />
        </div>
        <div className="flip-block__content--back">
          <ul>
            <li>
              <p>Deployment with Github Pages and Fly.io</p>
            </li>
            <li>
              <p>
                Generative Art with <a href="https://p5js.org/">p5js</a>.
                Currenly working on pulling weather data to conditionally show
                the sun's intensity.{" "}
                <a href="https://github.com/bootonk/art-attack">
                  Here's the repo!
                </a>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
