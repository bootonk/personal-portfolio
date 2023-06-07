import React from "react";
import crossstitch from "../../assets/gifs/cross-stitch.png";

export default function QR() {
  return (
    <div className="project">
      <div className="project__left-column">
        <h2>QR Cross Stitch</h2>
        <h3>Attention to detail or bust!</h3>
        <div className="left-column__tags">
          <div className="tags__category-tag">Art</div>
          <div className="tags__materials-tag">Cotton Thread</div>
        </div>
        <div className="left-column__project-description">
          <p>
            In preparation for some in person events, I wanted to find a way to
            easily connect people to this very personal portfolio. QR codes
            check the box of easily accessible but I wanted to level it up a bit
            with some flare.
          </p>
          <p>
            Using <a href="https://www.stitchfiddle.com/en">Stitch Fiddle</a> to
            generate a QR code and cross stitch pattern made this possible.
          </p>
          <p>
            The rest was time and a LOT of care. If a single square was off the
            link won't work and it couldn't be tested until it was complete. So
            I'm very happy to have it working smoothly!
          </p>
        </div>
      </div>
      <div className="project__right-column">
        <img
          src={crossstitch}
          alt="A WIP picture and the finished stitched QR code"
        />
      </div>
    </div>
  );
}
