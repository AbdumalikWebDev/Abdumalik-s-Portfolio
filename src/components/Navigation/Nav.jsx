import { useEffect } from "react";
//* CSS
import "./Nav.css";
//* Image
import logo from "/assets/Logo.webp";

export function Nav({ navbarOpen, toggleNavbar }) {
  useEffect(() => {
    const handleScroll = () => {
      const referrerButtons = document.querySelectorAll(".referrer-btn");
      const scrollPosition = window.scrollY + 70;
      const logo = document.querySelector("#logo");
      const closeBtn = document.querySelector(".nav-close-btn");

      if (scrollPosition > window.innerHeight) {
        referrerButtons.forEach((button) => {
          button.style.setProperty("color", "white", "important");
        });
        logo.style.filter =
          "brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(1%) hue-rotate(157deg) brightness(102%) contrast(101%)";
        closeBtn.style.filter =
          "brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(1%) hue-rotate(157deg) brightness(102%) contrast(101%)";
      } else {
        referrerButtons.forEach((button) => {
          button.style.setProperty("color", "#202020", "important");
        });
        logo.style.filter =
          "brightness(0) saturate(100%) invert(10%) sepia(11%) saturate(7%) hue-rotate(18deg) brightness(93%) contrast(92%)";
        closeBtn.style.filter =
          "brightness(0) saturate(100%) invert(10%) sepia(11%) saturate(7%) hue-rotate(18deg) brightness(93%) contrast(92%)";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleReferralClick = (event) => {
    // event.target gives the clicked element
    const clickedButton = event.target;

    // Here you can handle actions based on the button clicked
    console.log("Clicked button: ", clickedButton);
    toggleNavbar(); // Toggle the navbar
  };

  return (
    <nav className={navbarOpen ? "nav show-navbar" : "nav"} id="nav">
      <div className="nav-container wrapper">
        <img src={logo} id="logo" alt="Scroll.M" />
        <button className="nav-close-btn" onClick={toggleNavbar}>
          <img
            src="/assets/x-mark.svg"
            loading="lazy"
            className="icon"
            alt="close icon, icon"
            width="24"
            height="24"
          />
          Close
        </button>
        <div className="center">
          <a
            href="#projects-section"
            onClick={handleReferralClick}
            aria-label="Projects"
            className="projects-btn referrer-btn">
            Projects
          </a>
          <a
            href="#info-section"
            onClick={handleReferralClick}
            aria-label="About"
            className="about-btn referrer-btn">
            About
          </a>
          <a
            href="#"
            onClick={handleReferralClick}
            aria-label="Contact me"
            className="contact-btn referrer-btn">
            Contact me
          </a>
          <a
            href="https://t.me/newwebdevs"
            onClick={handleReferralClick}
            aria-label="Blogs"
            target="_blank"
            className="blogs-btn referrer-btn">
            Blogs
          </a>
        </div>
      </div>
    </nav>
  );
}
