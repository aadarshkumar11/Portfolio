import React from "react";
import "./HireMe.css";

const HireMe = () => (
  <section className="hireme-section">
    <h2>Hire Me</h2>
    <p>
      Interested in collaborating or hiring me for your next GenAI, ML, or automation project? Let’s connect!
    </p>
    <a
      href="mailto:your.email@example.com"
      className="hireme-btn"
    >
      Email Me
    </a>
    <a
      href="/Aadarsh_Resume.pdf"
      className="hireme-btn"
      download
    >
      Download Resume
    </a>
  </section>
);

export default HireMe;