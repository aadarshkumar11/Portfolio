import React from "react";
import "./Blog.css";

const posts = [
  {
    title: "Getting Started with GenAI",
    date: "June 2025",
    summary: "A beginner’s guide to building generative AI applications using LLMs.",
    link: "#"
  },
  {
    title: "Deploying ML Models on Azure",
    date: "May 2025",
    summary: "Step-by-step process to deploy and scale ML models using Azure Web Services.",
    link: "#"
  },
  {
    title: "NLP Tricks for Better Chatbots",
    date: "April 2025",
    summary: "Tips and techniques to improve chatbot performance with NLP.",
    link: "#"
  }
];

const Blog = () => (
  <section className="blog-section">
    <h2>Blog</h2>
    <div className="blog-grid">
      {posts.map((post, idx) => (
        <div className="blog-card" key={idx}>
          <h3>{post.title}</h3>
          <div className="blog-date">{post.date}</div>
          <p>{post.summary}</p>
          <a href={post.link} target="_blank" rel="noopener noreferrer">
            Read More
          </a>
        </div>
      ))}
    </div>
  </section>
);

export default Blog;