import React from "react";
import { motion } from "framer-motion";
import "./Hero.css";

const Hero = () => (
  <section className="hero-section">
    <motion.div
      className="hero-content"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h1>Hi, I'm Aadarsh 👋</h1>
      <h2>GenAI | LLM | Machine Learning | Azure | Automation</h2>
      <p>
        Final year student passionate about building intelligent solutions with GenAI, LLMs, and cloud technologies.
      </p>
      <a href="/hire-me" className="hero-hire-btn">Hire Me</a>
    </motion.div>
  </section>
);

export default Hero;