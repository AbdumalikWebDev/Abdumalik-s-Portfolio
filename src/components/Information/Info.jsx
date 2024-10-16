/* eslint-disable react/no-unescaped-entities */
import "./Info.css";
import "/src/index.css";
import { useEffect } from "react";

export function Info() {
  return (
    <section className="personalInfo" id="info-section">
      <div className="personal-info-container wrapper">
        <div className="about-me" data-aos="fade-left">
          <span className="info-title">About Me</span>
          <p>
            I enjoy breaking down complex problems into manageable parts and
            finding optimal solutions. My commitment to both chess and gym
            workouts reflects my disciplined approach to life. I understand the
            importance of consistent practice and effort in achieving my goals.
            I strive to maintain a balanced lifestyle that nurtures both my mind
            and body.
          </p>
        </div>
        <div className="skills">
          <span data-aos="fade-down" className="info-title">
            Skills
          </span>
          <div className="row1">
            <p data-aos="fade-right">
              <img
                src="/assets/html-icon.svg"
                alt="html icon, icon, svg icon"
                className="icon"
              />
              HTML
            </p>
            <p data-aos="fade-right">
              <img
                src="/assets/css-icon.svg"
                alt="CSS, CSS icon, CSS svg icon, icon, svg icons"
                className="icon"
              />
              CSS
            </p>
            <p data-aos="fade-right">
              <img
                src="/assets/js-icon.svg"
                alt="JavaScript, JavaScript icon, icon, svg icon"
                className="icon"
              />
              JavaScript
            </p>
            <p data-aos="fade-right">
              <img
                src="/assets/react-icon.svg"
                alt="React, svg icon, icon, react icon"
                className="icon"
              />
              React
            </p>
          </div>
          <div className="row2"></div>
        </div>
        <div className="education" data-aos="fade-up">
          <span className="info-title">Education</span>
          <h3>9th general education school of 2016</h3>
          <p>
            In 2015, I was deeply immersed in the vibrant world of general
            education school. Mathematics intrigued me with its intricate
            puzzles and logical reasoning, laying the groundwork for my later
            fascination with strategic thinking in chess and coding.
          </p>
        </div>
        <div className="experience" data-aos="fade-up">
          <span className="info-title">Experience</span>
          <p>
            My journey in front-end development has been guided by a commitment
            to continuous learning and growth. I've delved into HTML, CSS, and
            JavaScript, mastering the fundamental building blocks of web
            development while staying abreast of emerging frameworks and
            libraries.
          </p>
          <p>
            With five months of experience under my belt and a passion for
            crafting exceptional digital experiences, I'm eager to embark on the
            next chapter of my career journey in front-end development.
          </p>
        </div>
      </div>
    </section>
  );
}
