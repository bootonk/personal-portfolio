import React from "react";
import personalSite from "../../assets/gifs/personal-site.png";

export default function Personal() {
  return (
    <div className="project">
      <div className="project__left-column">
        <h2>Personal Portfolio</h2>
        <h3>
          A place to share what's going on while I learn more skills to feature
        </h3>
        <div className="left-column__tags">
          <div className="tags__category-tag">Application</div>
          <div className="tags__materials-tag">React</div>
          <div className="tags__feature-tag">Deployed</div>
        </div>
        <div className="left-column__project-description">
          <p>
            This is an ongoing project that will help me continue to learn and
            grow by using it as a testing ground! It's also a place where I can
            combine all the different projects and paths I'm on to give a high
            level look at what the heck I'm up to
          </p>
          <h3 className="left-h3">Goals</h3>
          <ul>
            <li>GitHub Pages Deployment ✔️</li>
            <li>Responsive Layout and Mobile Friendly ✔️</li>
            <li>
              WCAG rating of AA or AAA for more experience with accessibility
              standards
            </li>
            <li>
              Web Sec best practices— even though this is a pretty static site
              I'll see what I can do to write secure code.
            </li>
          </ul>
        </div>
      </div>
      <div className="project__right-column">
        <img
          src={personalSite}
          alt="This site displayed in a computer mockup"
        />
      </div>
    </div>
  );
}
