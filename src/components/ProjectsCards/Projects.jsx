/* eslint-disable react/no-unescaped-entities */
import "./Projects.css";

export const Projects = () => {
  return (
    <section className="projects">
      <h1 className="title">My Projects</h1>
      <div className="dashed-line"></div>
      <div className="projects-container">
        <div className="card1 card">
          <div className="content">
            <h2 className="title">WebStudio</h2>
            <p className="copy">Check out my first project.</p>
            <a
              href="https://webstudio-by-abdumalik.netlify.app/"
              target="_blank"
            >
              <button className="btn">View Project</button>
            </a>
          </div>
        </div>
        <div className="card2 card">
          <div className="content">
            <h2 className="title">Pro Monitor</h2>
            <p className="copy">
              This project helps you to monitoring your website like a pro.
            </p>
            <a href="https://promonitor.netlify.app/" target="_blank">
              <button className="btn">View Project</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
