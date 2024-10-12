import { useEffect } from "react";
import "./Content.css";
import devImage from "/assets/dev-image.webp";

export function MainContent() {
  (function () {
    window.addEventListener("scroll", function () {
      var depth, i, layer, layers, len, movement, topDistance, translate3d;
      topDistance = -this.scrollY;
      layers = document.querySelectorAll("[data-type='parallax']");
      for (i = 0, len = layers.length; i < len; i++) {
        layer = layers[i];
        depth = layer.getAttribute("data-depth");
        movement = -(topDistance * depth);
        translate3d = "translate3d(0, " + movement + "px, 0)";
        layer.style["-webkit-transform"] = translate3d;
        layer.style["-moz-transform"] = translate3d;
        layer.style["-ms-transform"] = translate3d;
        layer.style["-o-transform"] = translate3d;
        layer.style.transform = translate3d;
      }
    });
  }).call(this);
  return (
    <main className="main" id="hero">
      <img
        src="/assets/bg-layer1.png"
        className="bg-layer1 layer"
        data-depth="0.10"
        data-type="parallax"
        alt="circles"
      />
      <div className="main-container" data-depth="0.70" data-type="parallax">
        <div className="main-title layer">
          <h1>
            Hi!
            <br />
            My Name is <br /> Abdumalik Bozorov
          </h1>
          <h2 className="job">Front-end Developer</h2>
        </div>
        <div className="main-image layer">
          <img src={devImage} alt="User Image" />
        </div>
      </div>
      <img
        src="/assets/Wave.png"
        alt="wave"
        className="main-wave"
        data-type="parallax"
      />
    </main>
  );
}
