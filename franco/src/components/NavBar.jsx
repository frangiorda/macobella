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
          <a href="#inicio">Inicio</a>
          <a href="#servicios">Servicios</a>
          <a href="#quienes-somos">Quiénes Somos</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
