/* eslint-disable react/no-unescaped-entities */
import "./Projects.css";
import "/src/index.css";
import { useState, useEffect } from "react";

export const Projects = () => {
  return (
    <section className="projects" id="projects-section">
      <h1 className="title">My Projects</h1>

      <div className="projects-container">
        <div className="card1 card" data-aos="fade-up-left">
          <div className="card-img">
            <span className="project-title">Web Studio</span>
          </div>
          <div className="content">
            <p className="project-desc">
              <span className="bold">Welcome to My WebStudio</span>
              <br /> – where code meets creativity, and pixels align with
              perfection.
              <br /> At WebStudio, we deliver innovative and efficient web
              solutions tailored to your business needs. Our attention to
              detail, punctuality, and use of modern technologies ensure that
              every project is carefully planned and executed to perfection.
              <img
                src="/public/smile-icon.svg"
                alt="smile"
                className="smile-icon"
              />
            </p>
            <a
              href="https://webstudio-by-abdumalik.netlify.app/"
              target="_blank"
              aria-label="View Project"
              className="view-project-btn">
              <button class="cta btn">
                <span class="hover-underline-animation"> View Now </span>
                <svg
                  id="arrow-horizontal"
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="10"
                  viewBox="0 0 46 16">
                  <path
                    id="Path_10"
                    data-name="Path 10"
                    d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                    transform="translate(30)"></path>
                </svg>
              </button>
            </a>
          </div>
        </div>
        <div className="card2 card" data-aos="fade-up-right">
          <div className="card-img">
            <span className="project-title">Pro Monitor</span>
          </div>
          <div className="content">
            <p className="project-desc">
              <span className="bold">Welcome to ProMonitor</span>
              <br />
              ProMonitor is designed to help you stay on top of your website’s
              performance with customizable dashboards and real-time data
              updates. Offering features like sales monitoring, customer support
              automation, and growth tracking, it provides the tools you need to
              boost productivity and streamline your workflow.
            </p>
            <a
              href="https://promonitor.netlify.app/"
              target="_blank"
              aria-label="View Project"
              className="view-project-btn">
              <button class="cta btn">
                <span class="hover-underline-animation"> View Now </span>
                <svg
                  id="arrow-horizontal"
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="10"
                  viewBox="0 0 46 16">
                  <path
                    id="Path_10"
                    data-name="Path 10"
                    d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                    transform="translate(30)"></path>
                </svg>
              </button>
            </a>
          </div>
        </div>
        <div className="card3 card" data-aos="fade-up-left">
          <div className="card-img">
            <span className="project-title">FoodWagon</span>
          </div>
          <div className="content">
            <p className="project-desc">
              <span className="bold">FoodWagon</span>
              <br /> – brings you the best in online food ordering, offering a
              simple, user-friendly platform to browse and order delicious meals
              from a variety of local restaurants.
              <br /> With a focus on speed, convenience, and variety, FoodWagon
              ensures that your favorite dishes are just a few clicks away.
              Whether you're craving fast food or fine dining, FoodWagon makes
              it easy to satisfy your hunger with a seamless and enjoyable
              experience.
            </p>
            <a
              href="https://foodwagon-abdumalik.netlify.app/"
              target="_blank"
              aria-label="View Project"
              className="view-project-btn">
              <button class="cta btn">
                <span class="hover-underline-animation"> View Now </span>
                <svg
                  id="arrow-horizontal"
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="10"
                  viewBox="0 0 46 16">
                  <path
                    id="Path_10"
                    data-name="Path 10"
                    d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                    transform="translate(30)"></path>
                </svg>
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
