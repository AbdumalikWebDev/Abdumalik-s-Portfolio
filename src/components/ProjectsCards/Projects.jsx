/* eslint-disable react/no-unescaped-entities */
import "./Projects.css";

export const Projects = () => {
  return (
    <section className="projects">
      <div className="projects-container">
        <div className="card">
          <div className="content">
            <h2 className="title">WebStudio</h2>
            <p className="copy">Check out my first project.</p>
            <a href="https://webstudio-by-abdumalik.netlify.app/" target="_blank">
              <button className="btn">View Project</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
