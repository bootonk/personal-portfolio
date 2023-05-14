import React from "react";
import { Fragment } from "react";
import mug from "../assets/mug.png";

export default function Bio() {
  return (
    <div className="flip-block">
      <img src={mug} alt="mug" className="flip-img" />
      <div className="content">
        <div className="front">
          <h3>I'm...</h3>
        </div>
        <div className="back">
          <p>
            A creator through and through. I collect skills and hobbies and try
            to find interesting ways to combine them.
          </p>
          <p>
            I care about community and supporting diverse spaces. The more
            experiences we can bring into a conversation the better!
          </p>
        </div>
      </div>
    </div>
  );
}
