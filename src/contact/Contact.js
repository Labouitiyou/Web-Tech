import React from "react";
import "./Contact.css";

const Contact = () => (
  <section id="contact" className="contact">
    <h2>Contactez-nous</h2>
    <form className="contact-form">
      <input type="text" placeholder="Votre nom" className="input" />
      <input type="email" placeholder="Votre email" className="input" />
      <textarea placeholder="Votre message" className="textarea"></textarea>
      <button type="submit" className="button">
        Envoyer
      </button>
    </form>
  </section>
);

export default Contact;
