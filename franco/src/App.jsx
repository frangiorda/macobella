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
        <Carousel />
        <Card />  
        <About />
      </main>
      <Footer theme="dark" />
    </div>
  );
}

export default App;
