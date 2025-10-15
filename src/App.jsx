import React from "react";
import NavBar from "./components/navBar.jsx";
import Footer from "./components/Footer.jsx";
import Carousel from "./components/Carousel.jsx";
import Card from "./components/Card.jsx";
import About from "./components/About.jsx";
import Reveal from "./components/Reveal.jsx";
import FloatingWhatsApp from "./components/FloatingWhatsapp.jsx";

function App() {
  return (
    <div className="page">
      <NavBar />
      <main>
          <Carousel />
        <Reveal as="section" id="servicios" y={24} direction="left" duration={1500}>
          <Card />
        </Reveal>

        <Reveal as="section" id="quienes-somos" y={24} direction="left" duration={600}>
          <About />
        </Reveal>

        <FloatingWhatsApp />
      </main>

      <section id="contacto">
          <Footer theme="dark" />
      </section>
    </div>
  );
}

export default App;
