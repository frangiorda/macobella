import React from "react";
import logoBlanco from "../assets/logoBlanco.png"; 
import "../css/NavBar.css";

function NavBar() {
  return (
    <header className="navbar">
      <div className="nav-container">
        <div className="logo">
          <img src={logoBlanco} alt="Mi Logo" className="logo-img" />
        </div>
        <nav className="nav-links">
          <a href="#home">Inicio</a>
          <a href="#about">Servicios</a>
          <a href="#about">Quiénes Somos</a>
          <a href="#footer">Contacto</a>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
