import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../styles/theme";
import "./Navbar.css";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Aadarsh</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/experience">Experience</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/hire-me" className="hire-me-btn">Hire Me</Link></li>
        <li>
          <button
            aria-label="Toggle theme"
            className="theme-toggle"
            onClick={toggleTheme}
          >
            {theme === "dark" ? "🌞" : "🌙"}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

