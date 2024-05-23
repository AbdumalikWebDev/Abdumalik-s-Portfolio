/* eslint-disable react/no-unescaped-entities */
import "./Info.css";

export function Info() {
  return (
    <section className="personalInfo">
      <div className="personal-info-container">
        <div
          className="about-me"
          data-aos-duration="1700"
          data-aos="fade-left"
          data-aos-once="true"
        >
          <h4>About Me</h4>
          <p>
            I enjoy breaking down complex problems into manageable parts and
            finding optimal solutions. My commitment to both chess and gym
            workouts reflects my disciplined approach to life. I understand the
            importance of consistent practice and effort in achieving my goals.
            I strive to maintain a balanced lifestyle that nurtures both my mind
            and body.
          </p>
        </div>
        <div
          className="skills"
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
        >
          <h4>Skills</h4>
          <p>
            <i className="fa-brands fa-html5"></i>HTML
          </p>
          <p>
            <i className="fa-brands fa-css3-alt"></i>CSS
          </p>
          <p>
            <i className="fa-brands fa-js"></i>JavaScript
          </p>
          <p>
            <i className="fa-brands fa-react"></i>React
          </p>
          <p>
            <i className="fa-solid fa-bolt"></i>Soon TypeScript
          </p>
        </div>
        <div
          className="education"
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
        >
          <h4>Education</h4>
          <h6>9th general education school of 2016</h6>
          <p>
            In 2015, I was deeply immersed in the vibrant world of general
            education school. Mathematics intrigued me with its intricate
            puzzles and logical reasoning, laying the groundwork for my later
            fascination with strategic thinking in chess and coding.
          </p>
        </div>
        <div
          className="experience"
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
        >
          <h4>Experience</h4>
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
