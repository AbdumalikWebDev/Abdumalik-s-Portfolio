//* UseState
// import { useState } from "react";

//*Components
import { Nav } from "./components/Navigation/Nav.jsx";
import { Content } from "./components/MainContent/Content.jsx";
import { Info } from "./components/Information/Info.jsx";
import { Projects } from './components/ProjectsCards/Projects.jsx';
import { Footer } from "./components/FooterComponent/Footer.jsx";

//*CSS
import "./App.css";

export function App() {
  return (
    <div>
      <Nav></Nav>
      <Content></Content>
      <Info></Info>
      <Projects></Projects>
      <Footer></Footer>
    </div>
  );
}
