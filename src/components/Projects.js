import React, { useState } from "react";
import bomb from "../assets/bomb.png";

// Project Imports
import TryPods from "./project-components/TryPods";
import Baseball from "./project-components/Baseball";
import Personal from "./project-components/Personal";
import Projector from "./project-components/Projector";
import Smart from "./project-components/Smart";

// Project Modes
const TRYPODS = "try-pods";
const PERSONAL = "personal-portfolio";
const SMART = "smart-todo";
const BASEBALL = "star-wars-major-league";
const PROJECTOR = "projector-sewing";

export default function Projects() {
  const [project, setProject] = useState(TRYPODS);

  return (
    <div>
      <h2>Projects</h2>
      <h4>
        <a href="#/" onClick={() => setProject("try-pods")}>
          Try-Pods
        </a>{" "}
        /{" "}
        <a href="#/" onClick={() => setProject("personal-portfolio")}>
          This Portfolio
        </a>{" "}
        /{" "}
        <a href="#/" onClick={() => setProject("smart-todo")}>
          Smart To-Do
        </a>{" "}
        /{" "}
        <a href="#/" onClick={() => setProject("star-wars-major-league")}>
          Star Wars Major League
        </a>{" "}
        /{" "}
        <a href="#/" onClick={() => setProject("projector-sewing")}>
          Projector Sewing
        </a>{" "}
      </h4>
      <div className="projects-container">
        {project === TRYPODS && <TryPods />}
        {project === PERSONAL && <Personal />}
        {project === SMART && <Smart />}
        {project === BASEBALL && <Baseball />}
        {project === PROJECTOR && <Projector />}
      </div>
    </div>
  );
}
