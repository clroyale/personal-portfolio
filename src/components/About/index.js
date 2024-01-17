/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  faPython,
  faLaravel,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.scss";

const About = () => {
  const aboutArray = "About Me".split("");

  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={aboutArray}
              idx={15}
            />
          </h1>
          <p>
            I hold a Bachelor of Computer Science with over 10 years of web
            development experience, specializing in Frontend technologies.
          </p>
          <p>
            Proficient in JavaScript and TypeScript, I have expertise in React,
            Vue.js, and Angular. My skills extend to Node.js frameworks such as
            Express and NestJS, as well as PHP (Laravel) and Python (Django).
          </p>
          <p>
            I possess a deep understanding of SSR, utilizing Next.js and Gatsby,
            and have successfully improved SEO performance through techniques
            like sitemaps and preview link implementation.
          </p>
          <p>
            Transforming designs into responsive, pixel-perfect websites using
            CSS frameworks like Tailwind CSS, MUI, and Chakra is a key strength.
          </p>
          <p>
            I am confident in my ability to contribute significantly to your
            project and would welcome the opportunity for a detailed discussion.
          </p>
          <p>Thanks for your kind attention.</p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faJsSquare} color="#4B8BBE" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faLaravel} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faNodeJs} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default About;
