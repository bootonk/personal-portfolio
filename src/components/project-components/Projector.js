import React from "react";
import soon from "../../assets/gifs/soon.png";

export default function Projector() {
  return (
    <div className="project">
      <div className="left-column">
        <h2>Projector Sewing</h2>
        <h3>Bringing sewing and tech together, and removing paper patterns!</h3>
        <div className="tags">
          <div className="category-tag">Sewing</div>
          <div className="materials-tag">Epson BrightLink 585Wi Projector</div>
        </div>
        <div className="project-description">
          <p>
            In a past life (my 20's), I went to school for sewing and
            patternmaking. I currently focus on making pieces for my own
            wardrobe and teaching my friends!
          </p>
          <p>
            The part I hated the most was dealing with the paper patterns and
            the prep that came with them. This was until I learned that
            projectors were gaining in popularity to display patterns directly
            onto the fabric to cut.
          </p>
          <p>
            This saves me about 3-4 hours and $15-20 per project and allows for
            me to make edits within the software I use to prepare the patterns.
          </p>
          <h3 className="left-h3">Inspiration & Resources</h3>
          <ul>
            <li>
              <a href="https://www.instagram.com/minimalistmachinist/">
                Minimalist Machinist
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/groups/ProjectorsForSewing/">
                Projectors for Sewing
              </a>
            </li>
            <li>
              <a href="https://www.pdfstitcher.org/">PDF Stitcher</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="right-column">
        <img src={soon} alt="coming soon" />
      </div>
    </div>
  );
}
