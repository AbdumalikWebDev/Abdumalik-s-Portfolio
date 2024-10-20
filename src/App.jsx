import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Nav } from "./components/Navigation/Nav.jsx";
import { MainContent } from "./components/MainContent/Content.jsx";
import { Info } from "./components/Information/Info.jsx";
import { Projects } from "./components/ProjectsCards/Projects.jsx";
import { Footer } from "./components/FooterComponent/Footer.jsx";

import "./App.css";
import "./index.css";

//* GSAP
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };
  useEffect(() => {
    AOS.init();

    const handleLoad = () => {
      setTimeout(() => {
        setIsLoaded(true);
        AOS.refresh();
      }, 2000);
    };

    if (document.readyState === "complete") {
      setIsLoaded(true);
      AOS.refresh();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);
  useEffect(() => {
    AOS.refresh();
  });
  useEffect(() => {
    const isPhone = window.matchMedia("(max-width: 768px)").matches;
    if (!isPhone) {
      gsap.to("#doc-wrapper", {
        ease: "none",
        scrollTrigger: {
          trigger: "#doc-wrapper",
          start: "top bottom",
          end: "bottom bottom",
          scrub: 1,
        },
      });
    }
  }, []);
  return (
    <>
      {!isLoaded && (
        <div className="loading-card">
          <div className="loading-wrapper">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="shadow"></div>
            <div className="shadow"></div>
            <div className="shadow"></div>
          </div>
        </div>
      )}
      <div
        id="doc-wrapper"
        className={isLoaded ? "content-visible" : "content-hidden"}>
        <Nav navbarOpen={navbarOpen} toggleNavbar={toggleNavbar}></Nav>
        <MainContent toggleNavbar={toggleNavbar}></MainContent>
        <div id="content">
          <Info></Info>
          <Projects></Projects>
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}
