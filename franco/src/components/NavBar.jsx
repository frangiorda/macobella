import React from "react";
import logoBlanco from "../assets/logoBlanco.png";

function NavBar() {
  const navbarStyle = {
    backgroundColor: "#212121",
    color: "white",
    padding: "1rem",
    margin: 0,
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 1000,
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    margin: "0 auto",
  };

  const logoImgStyle = {
    height: "60px",
    width: "auto",
    objectFit: "contain",
    display: "block",
  };

  const linkContainerStyle = {
    display: "flex",
    alignItems: "center",
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    marginLeft: "1.5rem",
    transition: "color 0.3s",
  };

  return (
    <header style={navbarStyle}>
      <div style={containerStyle}>
        <div className="logo">
          <img src={logoBlanco} alt="Mi Logo" style={logoImgStyle} />
        </div>
        <nav style={linkContainerStyle}>
          <a
            href="#inicio"
            style={linkStyle}
            onMouseEnter={(e) => (e.target.style.color = "#fbbf24")}
            onMouseLeave={(e) => (e.target.style.color = "white")}
          >
            Inicio
          </a>
          <a
            href="#servicios"
            style={linkStyle}
            onMouseEnter={(e) => (e.target.style.color = "#fbbf24")}
            onMouseLeave={(e) => (e.target.style.color = "white")}
          >
            Servicios
          </a>
          <a
            href="#quienes-somos"
            style={linkStyle}
            onMouseEnter={(e) => (e.target.style.color = "#fbbf24")}
            onMouseLeave={(e) => (e.target.style.color = "white")}
          >
            Quiénes Somos
          </a>
          <a
            href="#contacto"
            style={linkStyle}
            onMouseEnter={(e) => (e.target.style.color = "#fbbf24")}
            onMouseLeave={(e) => (e.target.style.color = "white")}
          >
            Contacto
          </a>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
