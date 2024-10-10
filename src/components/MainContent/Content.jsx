import "./Content.css";
import "/src/index.css";
import devImage from "/dev-image.webp";
import { useEffect } from "react";
//* GSAP
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export function MainContent() {
  return (
    <main className="main" id="hero">
      <div className="main-container" data-depth="1.00" data-type="parallax">
        <div className="main-title layer">
          <h1>
            Hi!
            <br />
            My Name is <br /> Abdumalik Bozorov
          </h1>
          <h2 className="job">Front-end Developer</h2>
        </div>
        <div className="main-image layer">
          <img src={devImage} alt="User Image" />
        </div>
      </div>
    </main>
  );
}
// https://yt3.googleusercontent.com/ytc/AGIKgqP12vJkTY96T5lDUvKkI8WtvMR151ItBCI_hbFy=s900-c-k-c0x00ffffff-no-rj
