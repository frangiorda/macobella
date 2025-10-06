import React from "react";
import NavBar from "./components/navBar.jsx";
import Footer from "./components/Footer.jsx";
import Carousel from "./components/Carousel.jsx";

function App() {
  return (
    <div className="page">   {/* <- clave */}
      <NavBar />
      <main>
        <Carousel />
      </main>
      <Footer theme="dark" />
    </div>
  );
}

export default App;
