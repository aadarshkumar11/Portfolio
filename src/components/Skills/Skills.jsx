import React from "react";
import "./Skills.css";

const skills = [
  "GenAI",
  "LLM",
  "Machine Learning",
  "Deep Learning",
  "NLP",
  "Azure",
  "Python",
  "JavaScript",
  "React",
  "Automation",
  "Docker",
  "Git"
];

const Skills = () => (
  <section className="skills-section">
    <h2>Skills</h2>
    <div className="skills-grid">
      {skills.map((skill, idx) => (
        <div className="skill-card" key={idx}>
          {skill}
        </div>
      ))}
    </div>
  </section>
);

export default Skills;