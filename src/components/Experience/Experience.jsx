import React from "react";
import "./Experience.css";

const experiences = [
  {
    role: "GenAI Intern",
    company: "Innovative AI Labs",
    period: "May 2024 - Aug 2024",
    description: "Developed LLM-powered chatbots and automated data pipelines for enterprise clients."
  },
  {
    role: "Machine Learning Researcher",
    company: "University Research Group",
    period: "Jan 2024 - May 2024",
    description: "Worked on NLP-based document summarization and published findings in a peer-reviewed journal."
  },
  {
    role: "Azure Automation Intern",
    company: "Cloud Solutions Inc.",
    period: "Jun 2023 - Dec 2023",
    description: "Built automated deployment scripts and integrated ML models with Azure services."
  }
];

const Experience = () => (
  <section className="experience-section">
    <h2>Experience</h2>
    <div className="experience-timeline">
      {experiences.map((exp, idx) => (
        <div className="experience-item" key={idx}>
          <div className="experience-role">{exp.role}</div>
          <div className="experience-company">{exp.company}</div>
          <div className="experience-period">{exp.period}</div>
          <div className="experience-desc">{exp.description}</div>
        </div>
      ))}
    </div>
  </section>
);

export default Experience;