import React from "react";
import Header from "./header/Header";
import About from "./about/About";
import Services from "./services/Services";
import Projects from "./projects/Projects";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";

const App = () => (
  <div>
    <Header />
    <main>
      <About />
      <Services />
      <Projects />
      <Contact />
    </main>
    <Footer />
  </div>
);

export default App;
