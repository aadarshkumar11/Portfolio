import React from "react";
import "./Footer.css";

const Footer = () => (
  <footer className="footer">
    <div>
      &copy; {new Date().getFullYear()} Aadarsh | GenAI Portfolio
    </div>
    <div className="footer-links">
      <a href="mailto:your.email@example.com">Email</a>
      <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
    </div>
  </footer>
);

export default Footer;