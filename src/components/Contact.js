import React from "react";
import mail from "../assets/mail.png";

export default function Contact() {
  return (
    <div className="flip-block">
      <h3>You'll find me...</h3>
      <div className="flip-block__content">
        <div className="flip-block__content--front">
          <img src={mail} alt="mail" className="flip-img" />{" "}
        </div>
        <div className="flip-block__content--back">
          {" "}
          <ul>
            <li>
              <p>kbooton.develops@gmail.com</p>
            </li>
            <li>
              <p>
                <a href="https://github.com/bootonk">github</a>
              </p>
            </li>
            <li>
              <p>
                <a href="https://www.linkedin.com/in/kate-booton/">linkedIn</a>
              </p>
            </li>
            <li>
              <p>
                <a href="https://flowcv.com/resume/7su9k4gvlo">resume</a>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
