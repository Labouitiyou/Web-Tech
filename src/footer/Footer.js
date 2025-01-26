import React from "react";
import "./Footer.css";
import { Mail, Phone, Facebook, Instagram, X } from "lucide-react";
import logo from "../assets/logo.jpg";

const Footer = () => (
  <footer className="footer">
    <div>
      <img src={logo} alt="logo" className="footer-logo" />
    </div>
    <div className="footer-contact">
      <div className="contact-item">
        <Mail className="icon" /> contact@webtech.com
      </div>
      <div className="contact-item">
        <Phone className="icon" /> +33 7 52 10 28 30
      </div>
    </div>
    <div className="footer-socials">
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="social-item"
      >
        <Facebook className="icon" />
      </a>
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="social-item"
      >
        <Instagram className="icon" />
      </a>
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="social-item"
      >
        <X className="icon" />
      </a>
    </div>
  </footer>
);

export default Footer;
