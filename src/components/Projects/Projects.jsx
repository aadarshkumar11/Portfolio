import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "GenAI Chatbot",
    description: "A conversational AI chatbot using LLMs for contextual responses.",
    tech: ["Python", "OpenAI", "React"],
    link: "#"
  },
  {
    title: "Automated ML Pipeline",
    description: "End-to-end ML pipeline with data preprocessing, training, and deployment on Azure.",
    tech: ["Azure", "scikit-learn", "Docker"],
    link: "#"
  },
  {
    title: "NLP Text Summarizer",
    description: "Deep learning-based tool for summarizing long documents.",
    tech: ["TensorFlow", "NLP", "Flask"],
    link: "#"
  }
];

const Projects = () => (
  <section className="projects-section">
    <h2>Projects</h2>
    <div className="projects-grid">
      {projects.map((project, idx) => (
        <div className="project-card" key={idx}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="project-tech">
            {project.tech.map((t, i) => (
              <span key={i}>{t}</span>
            ))}
          </div>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;