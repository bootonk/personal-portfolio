import React from "react";
import bomb from "../assets/bomb.png";

export default function Projects() {
  return (
    <div>
      <h2>Projects</h2>
      <h4>
        Try-Pods / This Portfolio / Smart To-Do / Star Wars Major League /
        Projector Sewing
      </h4>
      <div className="projects-container">
        <img src={bomb} alt="bomb" className="project-img" />
        <h3>Coming Soon...</h3>
      </div>
    </div>
  );
}
