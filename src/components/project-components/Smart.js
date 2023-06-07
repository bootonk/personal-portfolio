import React from "react";
import smartGif from "../../assets/gifs/smart-screengrabs.gif";

export default function Smart() {
  return (
    <div className="project">
      <div className="project__left-column">
        <h2>Smart Todo App</h2>
        <h3>Never need to organize your to-do list again!</h3>
        <div className="left-column__tags">
          <div className="tags__category-tag">Application</div>
          <div className="tags__materials-tag">Javascript</div>
        </div>
        <div className="left-column__project-description">
          <p>
            For the midterm project during the Lighthouse Labs Web Dev Program,
            our team picked the Smart ToDo option because of it's complexity
            with API's.
          </p>
          <p>
            This was all before we learned React so we're using jQuery for our
            Single Page Application features.
          </p>
          <p>
            I personally enjoyed integrating the APIs (5 in total) to filter the
            input task to a reasonable category. Assessing the data that an API
            offered and finding the best ways to use it was genuinely very fun!
          </p>
        </div>
      </div>
      <div className="project__right-column">
        <img
          src={smartGif}
          alt="Gif of using the Smart Todo Application"
          className="shaded-img"
        />
      </div>
    </div>
  );
}
