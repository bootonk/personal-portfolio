import React from "react";
import tryPodsGif from "../../assets/gifs/try-pods-friends-list.gif";

export default function TryPods() {
  return (
    <div className="project">
      <div className="project__left-column">
        <h2>Try-Pods</h2>
        <h3>Where you can find your next favourite podcasts</h3>
        <div className="left-column__tags">
          <div className="tags__category-tag">Application</div>
          <div className="tags__materials-tag">Ruby</div>
          <div className="tags__materials-tag">Rails</div>
          <div className="tags__materials-tag">React</div>
          <div className="tags__feature-tag">Deployed</div>
        </div>
        <div className="left-column__project-description">
          <p>
            This was my team's final project as a wrap up to the Lighthouse Labs
            Web Dev Program.{" "}
          </p>
          <p>
            The three of us are all very into Podcasts and genuinely wanted a
            solution to connecting and sharing recommendations more easily.
          </p>
          <p>
            We chose Ruby on Rails and React to get more exposure and experience
            working with each language and framework. We also used Active
            Records for our database with Axios and external GraphQL calls with
            Apollo.
          </p>
          <p>
            This project was completed in 10 days and is very much an MVP with a
            lot of room for growth.
          </p>
          <div className="left-column__project-details">
            <div className="project-details__details-left">
              <h3 className="left-column__project-description--left-h3">
                The Team
              </h3>
              <ul>
                <li>
                  <a href="https://github.com/lizfosdick">Liz Fosdick</a>
                </li>
                <li>
                  <a href="https://github.com/rowanmack">Rowan MacKenzie</a>
                </li>
                <li>
                  <a href="https://github.com/programmingpals">
                    Programming Pals
                  </a>
                </li>
              </ul>
            </div>
            <div className="project-details__details-right">
              <h3 className="left-column__project-description--left-h3">
                The Code
              </h3>
              <ul>
                <li>
                  <a href="https://try-pods-fly.fly.dev">Live Demo Site</a>
                </li>
                <li>
                  <a href="https://github.com/programmingpals/try-pods-app">
                    The Repo
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="project__right-column">
        <img
          src={tryPodsGif}
          alt="Try-Pods gif of website"
          className="shaded-img"
        />
      </div>
    </div>
  );
}
