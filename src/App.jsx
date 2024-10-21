import React, { useState, useEffect } from "react";
//* Components
import { Nav } from "./components/Navigation/Nav.jsx";
import { MainContent } from "./components/MainContent/Content.jsx";
import { Info } from "./components/Information/Info.jsx";
import { Projects } from "./components/ProjectsCards/Projects.jsx";
import { Whyme } from "./components/WhyChooseMe/whyme.jsx";
import { Footer } from "./components/FooterComponent/Footer.jsx";
//* CSS
import "./App.css";
import "./index.css";
//* AOS Library
import AOS from "aos";
import "aos/dist/aos.css";

//* Lenis
import Lenis from "lenis";
//* SplitType
import SplitType from "split-type";
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
    const lenis = new Lenis();
    const splitTypes = document.querySelectorAll(".reveal-type");

    const handleLoad = () => {
      setTimeout(() => {
        setIsLoaded(true);
        AOS.refresh(); // Refresh AOS after the loading screen
      }, 2000);
    };

    if (document.readyState === "complete") {
      setIsLoaded(true);
      AOS.refresh();
    } else {
      window.addEventListener("load", handleLoad);
    }

    if (isLoaded) {
      // Initialize AOS first
      AOS.init({
        duration: 500,
        once: true, // Optional: Only animate once
      });
      AOS.refresh();

      // Then, initialize Lenis
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
      // Sync GSAP ticker with Lenis raf:
      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });
      // Now initialize GSAP with ScrollTrigger after AOS and Lenis
      gsap.to("#doc-wrapper", {
        ease: "none",
        scrollTrigger: {
          trigger: "#doc-wrapper",
          start: "top bottom",
          end: "bottom bottom",
          scrub: 1,
        },
      });

      splitTypes.forEach((char, i) => {
        const text = new SplitType(char, { types: "chars, words" });

        gsap.from(text.chars, {
          scrollTrigger: {
            trigger: char,
            start: "top 90%",
            end: "top 50%",
            scrub: true,
            markers: false,
          },
          scaleY: 0,
          y: -20,
          transformOrigin: "top",
          stagger: 0.1,
        });
      });
    }

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, [isLoaded]);

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
        <Nav navbarOpen={navbarOpen} toggleNavbar={toggleNavbar} />
        <MainContent toggleNavbar={toggleNavbar} />
        <div id="content">
          <Info />
          <Projects />
          <Whyme />
          <Footer />
        </div>
      </div>
    </>
  );
}
