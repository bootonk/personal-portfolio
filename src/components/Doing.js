import React from "react";
import mouse from "../assets/mouse.png";

export default function Doing() {
  return (
    <div className="flip-block">
      <img src={mouse} alt="mouse" className="flip-img" />
      <div className="content">
        <div className="front">
          <h3>I'm out there...</h3>
        </div>
        <div className="back">
          <ul>
            <li>
              <p>
                Mentoring with{" "}
                <a href="https://www.canadalearningcode.ca/">
                  Canada Learning Code
                </a>{" "}
                and loving the excitement as people learn new things.
              </p>
            </li>
            <li>
              <p>
                Getting reasonably scared and informed at{" "}
                <a href="https://owasp.org/">OWASP</a> talks on web security and
                how to improve.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
