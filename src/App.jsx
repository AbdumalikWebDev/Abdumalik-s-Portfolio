//* UseState
// import { useState } from "react";
//* UseEffect
import { useEffect } from "react";
//* Aos Library
import AOS from "aos";
import "aos/dist/aos.css";

//*Components
import { Nav } from "./components/Navigation/Nav.jsx";
import { MainContent } from "./components/MainContent/Content.jsx";
import { Info } from "./components/Information/Info.jsx";
import { Projects } from "./components/ProjectsCards/Projects.jsx";
import { Footer } from "./components/FooterComponent/Footer.jsx";

//*CSS
import "./App.css";
//* GSAP
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);
export function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  (function () {
    window.addEventListener("scroll", function (event) {
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
    <div>
      <Nav></Nav>
      <MainContent></MainContent>
      <div id="content">
        <Info></Info>
        <Projects></Projects>
        <Footer></Footer>
      </div>
    </div>
  );
}
