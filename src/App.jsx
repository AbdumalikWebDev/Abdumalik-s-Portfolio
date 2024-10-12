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

export function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    AOS.init();

    const handleLoad = () => {
      setTimeout(() => {
        setIsLoaded(true);
        AOS.refresh(); // Refresh AOS after content is loaded
      }, 3000);
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

  

  return (
    <div>
      {!isLoaded && (
        <div className="loading-card">
          <div className="wrapper">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="shadow"></div>
            <div className="shadow"></div>
            <div className="shadow"></div>
          </div>
        </div>
      )}
      <div className={isLoaded ? "content-visible" : "content-hidden"}>
        <Nav></Nav>
        <MainContent></MainContent>
        <div id="content">
          <Info></Info>
          <Projects></Projects>
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
}
