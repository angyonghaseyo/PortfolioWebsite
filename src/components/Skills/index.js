import { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import React from "react";
import { DynamicCloud } from "./dynamic-cloud";
import "./index.scss";

const slugs = [
  "amazonwebservices",
  "css3",
  "csharp",
  "cplusplus",
  "html5",
  "javascript",
  "java",
  "jquery",
  "kotlin",
  "microsoftoffice",
  "mysql",
  "postgresql",
  "python",
  "r",
  "react",
  "reactnative",
  "swift",
  "unity",
  ".net"
];

const Skills = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  return (
    <>
      <div className="container skills-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["Skills", " ", "&", " ", "Experiences"]}
              idx={15}
            />
          </h1>
          <div className="fade">
          <p align="LEFT">
            <h2 class="quote">"Walking every lane, but peak yet to gain"</h2>
          </p>
          <p>
            Some compentencies I possessed are:
            <span class="tech-tag"> AWS</span>,
            <span class="tech-tag"> CSS</span>,
            <span class="tech-tag"> C#</span>,
            <span class="tech-tag"> C++</span>,
            <span class="tech-tag"> HTML</span>,
            <span class="tech-tag"> JavaScript</span>,
            <span class="tech-tag"> Kotlin</span>,
            <span class="tech-tag"> Microsoft Visual Basic</span>,
            <span class="tech-tag"> MySQL</span>,
            <span class="tech-tag"> postgreSQL</span>,
            <span class="tech-tag"> Python</span>,
            <span class="tech-tag"> R</span>,
            <span class="tech-tag"> React</span>,
            <span class="tech-tag"> React Native</span>,
            <span class="tech-tag"> SwiftUI</span>,
            <span class="tech-tag"> Unity 2D and</span>
            <span class="tech-tag"> .NET</span>.
          </p>
          <p>
            As an aspiring software engineer, my expertise lies in crafting scalable solutions across diverse domains, from cloud computing with AWS to front-end development using React. Proficient in languages like Javascript and C#, my skill set is geared towards efficient problem-solving and clean code practices, essential for robust and maintainable software. This technical versatility enables me to navigate and innovate within the rapidly evolving tech landscape, consistently delivering high-quality results.
          </p>
          <p>
            Feel free to visit my{" "}
            <a
              href="https://www.linkedin.com/in/chia-ang-yong/"
              target="_blank"
            >
              LinkedIn 
            </a>{" "}
            profile to contact me for any learning opportunities! 
            
          </p>
          </div>
        </div>
        <div className="tag-wrap">
          <DynamicCloud iconSlugs={slugs}/>
        </div>
      </div>
      <Loader type="square-spin" />
    </>
  );
};

export default Skills;
