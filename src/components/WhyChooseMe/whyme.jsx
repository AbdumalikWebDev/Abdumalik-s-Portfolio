import "./whyme.css";
//* SplitType Library
import SplitType from "split-type";
//* GSAP
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const Whyme = () => {
  return (
    <section id="whyme">
      <div className="wrapper">
        <span className="inner-shadow"></span>
        <div className="whyme-title">
          <h5 className="reveal-type">Why Choose Me?</h5>
          <p className="reveal-type">
            I don't leave work unfinished and I try to build websites for my
            clients as fast as possible.
          </p>
        </div>
        <div className="whyme-content">
          <div className="quality row1 row">
            <div className="quality_title">
              Quality{" "}
              <img
                src="/assets/checked.webp"
                alt="checked icon, icon"
                loading="lazy"
                width="50"
                height="50"
                className="checked-icon"
              />
            </div>
            <p className="paragraph">
              With a commitment to excellence, I specialize in crafting websites
              that are 100% SEO-optimized, with 90%+ performance and best
              practices. My work is not only fast and efficient but also 100%
              accessible and fully responsive across all devices, ensuring your
              website stands out and delivers top-tier results.
            </p>
          </div>
          <div className="personal-touch row2 row">
            <div className="personal-touch_title">
              Personal Touch{" "}
              <img
                src="/assets/handshake.webp"
                alt="handshake icon"
                loading="lazy"
                className="handshake-icon"
                width="50"
                height="50"
              />
            </div>
            <p className="paragraph">
              I believe that every project is unique, and I take the time to
              understand your specific needs and vision. By offering a
              personalized approach, I ensure that each website reflects your
              brand’s identity and goals.
            </p>
          </div>
          <div className="innovative-approach row3 row">
            <div className="innovative-approach_title">
              Innovative <br />
              Approach
              <img
                src="/assets/creativity.webp"
                loading="lazy"
                className="creativity-icon"
                alt="icon"
                width="70"
                height="70"
              />
            </div>
            <p className="paragraph">
              I leverage cutting-edge tools and technologies to make your
              website dynamic and engaging. Whether it’s using the powerful GSAP
              JavaScript Library for advanced animations or Bootstrap for rapid,
              responsive design, I ensure that your site is both visually
              impressive and functional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
