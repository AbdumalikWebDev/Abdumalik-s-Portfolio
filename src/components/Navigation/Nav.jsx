/* eslint-disable react/no-unescaped-entities */
import { useRef, useEffect } from "react";
//* CSS
import "./Nav.css";
//* GSAP
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
//* Image
import logo from "/assets/Logo.png";
export function Nav() {
  const referrerButtons = useRef([]);
  const navbarRef = useRef(null);
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    const handleScroll = () => {
      const referrerButtons = document.querySelectorAll(".referrer-btn");
      const scrollPosition = window.scrollY + 50;
      const logo = document.querySelector("#logo");

      if (scrollPosition > window.innerHeight) {
        referrerButtons.forEach((button) => {
          button.style.setProperty("color", "white", "important");
        });
        logo.style.filter =
          "brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(1%) hue-rotate(157deg) brightness(102%) contrast(101%)";
      } else {
        referrerButtons.forEach((button) => {
          button.style.setProperty("color", "#202020", "important");
        });
        logo.style.filter =
          "brightness(0) saturate(100%) invert(10%) sepia(11%) saturate(7%) hue-rotate(18deg) brightness(93%) contrast(92%)";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="nav" id="nav">
      <div className="nav-container">
        <img src={logo} id="logo" alt="Scroll.M" />
        <div className="center">
          <a
            href="#projects-section"
            onClick={() => scrollToSection("#projects-section")}
            aria-label="Projects"
            className="projects-btn referrer-btn"
            ref={(el) => (referrerButtons.current[0] = el)}>
            Projects
          </a>
          <a
            href="#info-section"
            aria-label="About"
            className="about-btn referrer-btn"
            ref={(el) => (referrerButtons.current[1] = el)}>
            About
          </a>
          <a
            href="#"
            aria-label="Contact me"
            className="contact-btn referrer-btn"
            ref={(el) => (referrerButtons.current[2] = el)}>
            Contact me
          </a>
          <a
            href="https://t.me/newwebdevs"
            aria-label="Blogs"
            target="_blank"
            className="blogs-btn referrer-btn"
            ref={(el) => (referrerButtons.current[3] = el)}>
            Blogs
          </a>
        </div>
      </div>
    </nav>
  );
}
