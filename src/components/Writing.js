import React from "react";
import computer from "../assets/computer.png";

export default function Writing() {
  return (
    <div className="flip-block">
      <h3>I'm mostly writing...</h3>
      <div className="content">
        <div className="front">
          <img src={computer} alt="computer" className="flip-img" />
        </div>
        <div className="back">
          <ul>
            <li>
              <p>Javascript & React</p>
            </li>
            <li>
              <p>Ruby & Ruby on Rails</p>
            </li>
            <li>
              <p>Cover letters!</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
