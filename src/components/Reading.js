import React from "react";
import book from "../assets/book.png";

export default function Reading() {
  return (
    <div className="flip-block">
      <img src={book} alt="book" className="flip-img" />
      <div className="content">
        <div className="front">
          <h3>I'm reading...</h3>
        </div>
        <div className="back">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            nec lobortis dolor. Fusce in sagittis arcu. Praesent quis nunc
            bibendum enim feugiat hendrerit sagittis id augue. Donec commodo
            egestas scelerisque. Ut placerat neque neque, vitae venenatis lectus
            pharetra eu. Cras commodo velit sed egestas vulputate. Aliquam erat
            volutpat. Sed pretium in tortor sed sodales. Nullam nec egestas
            massa, quis volutpat risus. Nullam ex eros, dapibus id sapien eu,
            tincidunt varius nulla. Aliquam mauris risus, hendrerit sit amet
            mauris rhoncus, rhoncus pellentesque mauris. Cras lorem mauris,
            euismod in leo a, iaculis viverra mauris. Donec velit nisl,
            sollicitudin et malesuada in, dapibus ut nulla.
          </p>
        </div>
      </div>
    </div>
  );
}
