import React from "react";
import leagues from "../../assets/gifs/leagues.png";

export default function Baseball() {
  return (
    <div className="project">
      <div className="project__left-column">
        <h2>Star Wars Major League</h2>
        <h3>Where Baseball is mashed up with Pop Culture Worlds</h3>
        <div className="left-column__tags">
          <div className="tags__category-tag">Art</div>
          <div className="tags__materials-tag">Merino Felt</div>
          <div className="tags__materials-tag">Cotton Thread</div>
        </div>
        <div className="left-column__project-description">
          <p>
            I was asked to be a part of a Star Wars Art Show in Victoria and had
            recently been inspired by my grandpa's old wool baseball patches.
          </p>
          <p>
            So the next obvious step in my mind was to create the fictional
            baseball teams of the Star Wars Universe and bring them to life with
            texture, color, and a lot of detail! All roughly 8x8 inches or close
            to it, and framed in shadow boxes.
          </p>
          <h3 className="left-column__project-description--left-h3">
            The Teams
          </h3>
          <ul>
            <li>The Death Star Dianogas (sold)</li>
            <li>The Dune Sea Droids (sold)</li>
            <li>The Mustafar Smokies (sold)</li>
            <li>The Canto Bight Aces</li>
            <li>The Cloud City Saints (sold)</li>
            <li>The Alderaan Annihilators (sold)</li>
            <li>The Kamino Cycloners</li>
            <li>The Sith 66ers (sold)</li>
          </ul>
        </div>
      </div>
      <div className="project__right-column">
        <img
          src={leagues}
          alt="A collection of 8 handmade patches of fake star wars baseball teams"
        />
      </div>
    </div>
  );
}
