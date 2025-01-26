import React from "react";
import "./Projects.css";

const Projects = () => (
  <section id="projects" className="projects">
    <h2>Nos projets</h2>
    <div className="project-list">
      {[
        {
          name: "Oh Myfood",
          description: "Un site d'un restaurant.",
          image: `${process.env.PUBLIC_URL}/image/ohmyfood.jpg`,
          link: "https://labouitiyou.github.io/Projet-Site-d-un-restaurant/",
        },
        {
          name: "Booki",
          description: "Un site d'une agence de voyage",
          image: `${process.env.PUBLIC_URL}/image/booki.jpg`,
          link: "https://labouitiyou.github.io/Projet_Agence-de-voyage/",
        },
        {
          name: "ArgentBank",
          description: "Une application bancaire",
          image: `${process.env.PUBLIC_URL}/image/argentbank.jpg`,
          link: "https://project3.com",
        },
        {
          name: "Kasa",
          description: "Une application de location immobilière",
          image: `${process.env.PUBLIC_URL}/image/kasa.png`,
          link: "https://project3.com",
        },
      ].map((project, index) => (
        <a
          key={index}
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-item"
        >
          <img
            src={project.image}
            alt={project.name}
            className="project-image"
          />
          <div className="project-content">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </div>
        </a>
      ))}
    </div>
  </section>
);

export default Projects;
