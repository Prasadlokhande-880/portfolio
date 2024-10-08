import React from "react";
import icon from "./Screenshot_2024-03-06_at_22.05.36-removebg-preview.png";
import "./About.css";

const About = () => {
  return (
    <div className="about" id="contact">
      <div className="about-info">
        <h2 className="about-header">Let's Hire Me and Create the Best Product</h2>
        <p className="about-description">
          If you’re interested in entrusting your work to me, feel free to reach out. You can also check out my YouTube channel to see how I work. Thank you!
        </p>
        <a
          href="https://www.linkedin.com/in/prasad-lokhande-540020254/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="linkedin-button">LinkedIn</button>
        </a>
      </div>
      <div className="about-image">
        <img src={icon} alt="About Me" />
      </div>
    </div>
  );
};

export default About;
