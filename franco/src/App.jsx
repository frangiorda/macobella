import React from "react";
import NavBar from "./components/navBar.jsx";
import Footer from "./components/Footer.jsx";
import Carousel from "./components/Carousel.jsx";
import Card from "./components/Card.jsx";
import About from "./components/About.jsx";
import "./App.css";
import "./index.css";

function App() {
  return (
    <div className="page">   {/* <- clave */}
      <NavBar />
      <main>
        <section id="inicio">
          <Carousel />
        </section>
        <section id="servicios">
        <Card />  
        </section>
        <section id="quienes-somos">
        <About />
        </section>
      </main>
      <section id="contacto">
      <Footer theme="dark" />
      </section>
    </div>
  );
}

export default App;
