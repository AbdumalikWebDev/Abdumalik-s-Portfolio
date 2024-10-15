import "./Content.css";

import lineVector from "/assets/line-main.svg";
import devImage from "/assets/dev-image.webp";

export function MainContent({ toggleNavbar }) {
  (function () {
    window.addEventListener("scroll", function () {
      var depth, i, layer, layers, len, movement, topDistance, translate3d;
      topDistance = this.scrollY;
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
        src="/assets/bg-layer1.webp"
        className="bg-layer1 layer"
        data-depth="0.20"
        data-type="parallax"
        alt="circles"
      />
      <button
        className="open-nav-btn"
        onClick={toggleNavbar}
        style={{
          position: "absolute",
          backgroundColor: "transparent",
          border: "none",
          top: "20px",
          left: "50px",
          fontSize: "2rem",
          zIndex: "100",
        }}>
        <i className="fa-solid fa-bars"></i>
      </button>
      <div
        className="main-container wrapper"
        data-depth="0.30"
        data-type="parallax">
        <div className="main-title layer">
          <h1 className="main-heading">
            <span className="line1">Hi!</span>
            <span className="line2">My Name is -</span>
            <span className="line3">Abdumalik Bozorov</span>
          </h1>
          <h2 className="job">Front-end Developer</h2>
          <img
            src={lineVector}
            className="line-vector"
            alt="line, vector, illustrator"
          />
        </div>
        <div className="main-image layer">
          <img src="/assets/lines1.webp" alt="lines" className="dev-lines" />
          <img src={devImage} className="dev-image" alt="User Image" />
        </div>
      </div>
      <img
        src="/assets/Wave.webp"
        alt="wave"
        className="main-wave"
        data-type="parallax"
      />
    </main>
  );
}
