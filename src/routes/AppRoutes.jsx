import React from "react";
import { Routes, Route } from "react-router-dom";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";
import Experience from "../components/Experience/Experience";
import Contact from "../components/Contact/Contact";
import HireMe from "../components/HireMe/HireMe";
import Blog from "../components/Blog/Blog";
import NotFound from "../components/NotFound/NotFound";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Hero />} />
    <Route path="/about" element={<About />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/skills" element={<Skills />} />
    <Route path="/experience" element={<Experience />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/hire-me" element={<HireMe />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRoutes;