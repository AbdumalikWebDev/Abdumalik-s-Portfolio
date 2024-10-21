/* eslint-disable react/no-unescaped-entities */
import "./Info.css";
import "/src/index.css";

export function Info() {
  return (
    <section className="personalInfo" id="info-section">
      <div className="personal-info-container wrapper">
        <div className="about-me" data-aos="fade-left">
          <span className="info-title">About Me</span>
          <p>
            I enjoy breaking down complex problems into manageable parts and
            finding viable solutions. My commitment to chess and gym training
            reflects my disciplined approach to life. I understand the
            importance of consistent practice and effort in achieving my goals.
            I strive to maintain a balanced lifestyle that nourishes both my
            mind and body. I get up at 6:30 in the morning and get ready for
            school at 8:00. After I get back from school at 1:30pm, I start my
            Web Programming job for 3 or 4 hours. I can say that I spend at
            least 2 hours every day on Web Programming.
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
                width="24"
                height="24"
              />
              HTML
            </p>
            <p data-aos="fade-right">
              <img
                src="/assets/css-icon.svg"
                alt="CSS, CSS icon, CSS svg icon, icon, svg icons"
                className="icon"
                width="24"
                height="24"
              />
              CSS
            </p>
            <p data-aos="fade-right">
              <img
                src="/assets/js-icon.svg"
                alt="JavaScript, JavaScript icon, icon, svg icon"
                className="icon"
                width="24"
                height="24"
              />
              JavaScript
            </p>
            <p data-aos="fade-right">
              <img
                src="/assets/react-icon.svg"
                alt="React, svg icon, icon, react icon"
                className="icon"
                width="24"
                height="24"
              />
              React
            </p>
            <p data-aos="fade-right">
              <img
                src="/assets/bootstrap.svg"
                alt="bootstrap, icon, bootstrap icon svg"
                className="icon"
                width="24"
                height="24"
              />
              Bootstrap
            </p>
            <p data-aos="fade-right">
              <img
                src="/assets/netlify.svg"
                alt="netlify, icon, netlify icon svg"
                className="icon"
                width="24"
                height="24"
                style={{
                  filter:
                    "brightness(0) saturate(100%) invert(100%) sepia(87%) saturate(768%) hue-rotate(194deg) brightness(123%) contrast(95%)",
                }}
              />
              Netlify
            </p>
            <p data-aos="fade-right">
              <img
                src="/assets/github.svg"
                alt="github, icon, github svg icon"
                className="icon"
                width="24"
                height="24"
              />
              Github
            </p>
          </div>
          <div className="row2"></div>
        </div>
        <div className="education" data-aos="fade-up">
          <span className="info-title">Education</span>
          <h3>9th general education school of 2015</h3>
          <p>
            In 2015, I entered the 9th general secondary school in Karshi. I
            studied there with excellent grades and wanted to graduate. At
            school I was interested in sports and mental sports games. I also
            exercise to keep my body healthy. I am good at English, Mathematics,
            Geometry.
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
