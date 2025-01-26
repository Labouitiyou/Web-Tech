import React from "react";
import "./Header.css";
import logo from "../assets/logo.jpg";

const Header = () => (
  <header className="header">
    <img src={logo} alt="logo" className="logo" />
    <nav>
      <ul className="menu">
        <li>
          <a href="#about">À propos</a>
        </li>
        <li>
          <a href="#services">Nos services</a>
        </li>
        <li>
          <a href="#projects">Nos projets</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
