import React, { useEffect, useState } from "react";
import logoBlanco from "../assets/logoBlanco.png";

const MOBILE_MAX = 768; // ajuste de breakpoint

function NavBar() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= MOBILE_MAX);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const navbarStyle = {
    backgroundColor: "#212121",
    color: "white",
    padding: isMobile ? "0.5rem 0" : "1rem 0",
    margin: 0,
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 1000,
  };

  const containerStyle = {
    display: "flex",
    justifyContent: isMobile ? "center" : "space-between",
    alignItems: "center",
    width: "90%",
    margin: "0 auto",
  };

  const logoImgStyle = {
    height: isMobile ? "48px" : "60px",
    width: "auto",
    objectFit: "contain",
    display: "block",
  };

  const linkContainerStyle = {
    display: isMobile ? "none" : "flex", // <— OCULTA EL MENÚ EN MOBILE
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
        <div className="logo" aria-label="Logo">
          <img src={logoBlanco} alt="Mi Logo" style={logoImgStyle} />
        </div>

        <nav style={linkContainerStyle} aria-label="Primary">
          {[
            { href: "#inicio", label: "Inicio" },
            { href: "#servicios", label: "Servicios" },
            { href: "#quienes-somos", label: "Quiénes Somos" },
            { href: "#contacto", label: "Contacto" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              style={linkStyle}
              onMouseEnter={(e) => (e.target.style.color = "#BF4827")}
              onMouseLeave={(e) => (e.target.style.color = "white")}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
