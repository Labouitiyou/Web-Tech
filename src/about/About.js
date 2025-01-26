import React from "react";
import "./About.css";
import webtech from "../assets/webtech.jpg";

const About = () => (
  <section id="about" className="about">
    <img src={webtech} alt="À propos de Web Tech" className="about-image" />
    <div className="about-content">
      <h2>À propos de nous</h2>
      <p>
        Chez Web Tech, nous sommes spécialisés dans la création de sites web
        modernes, performants et adaptés à vos besoins. Notre équipe
        expérimentée vous accompagne dans la réalisation de vos projets
        numériques.
      </p>
    </div>
  </section>
);

export default About;
