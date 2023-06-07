import React from "react";
import mouse from "../assets/mouse.png";

export default function Doing() {
  return (
    <div className="flip-block">
      <h3>I'm out there...</h3>
      <div className="content">
        <div className="front">
          <img src={mouse} alt="mouse" className="flip-img" />
        </div>
        <div className="back">
          <ul>
            <li>
              <p>
                Mentoring with{" "}
                <a href="https://www.canadalearningcode.ca/">
                  Canada Learning Code
                </a>
                .
              </p>
            </li>
            <li>
              <p>
                At Peacock's on Tuesdays as a regular{" "}
                <a href="https://openhack.club/">Open Hack</a> pal.
              </p>
            </li>
            <li>
              <p>
                Hosting dev movie nights at the Parkside! First up,{" "}
                <a href="https://partiful.com/e/gHnoLCoSU9KQkaDlClaa">
                  Hackers on June 8th
                </a>
                .
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
