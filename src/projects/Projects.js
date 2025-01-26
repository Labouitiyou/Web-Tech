import React from "react";
import "./Projects.css";

const Projects = () => (
  <section id="projects" className="projects">
    <h2>Nos projets</h2>
    <div className="project-list">
      {[
        { name: "Projet 1", description: "Un site e-commerce performant." },
        { name: "Projet 2", description: "Une application mobile intuitive." },
        { name: "Projet 3", description: "Un site vitrine attractif." },
        { name: "Projet 4", description: "Un site vitrine attractif." },
      ].map((project, index) => (
        <div key={index} className="project-item">
          <h3>{project.name}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
