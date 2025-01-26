import React from "react";
import "./Services.css";

const Services = () => (
  <section id="services" className="services">
    <h2>Nos services</h2>
    <div className="service-list">
      {[
        {
          title: "Développement web",
          description: "Création de sites web personnalisés.",
        },
        {
          title: "Design UI/UX",
          description: "Conception d'interfaces utilisateurs intuitives.",
        },
        {
          title: "Maintenance",
          description: "Assistance et mises à jour régulières.",
        },
        {
          title: "Réferencement SEO",
          description: "Pour un bon réferencement de votre site",
        },
      ].map((service, index) => (
        <div key={index} className="service-item">
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Services;
