import React from "react";
import "../css/Footer.css";
import LogoBlanco from "../assets/logoBlanco.png";
import { FaInstagram, FaFacebookF, FaPhoneAlt } from "react-icons/fa";

const Footer = ({ theme = "dark" }) => {
  return (
    <footer className={`footer ${theme === "dark" ? "footer--dark" : ""}`}>
      <div className="footer-inner">
        {/* Logo */}
        <div className="footer-left">
          <img
            src={LogoBlanco}
            alt="Logo de la empresa"
            className="footer-logo"
          />
        </div>

        {/* Bloques de información */}
        <div className="footer-right">
          {/* Contacto */}
          <div className="footer-block">
            <p className="footer-title">Contáctanos:</p>
            <div className="footer-contact">
              <FaPhoneAlt className="icon" />
              <a
                href="https://wa.me/5493517633783"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-whatsapp"
              >
                +54 9 351 763-3783
              </a>
            </div>
          </div>

          {/* Redes */}
          <div className="footer-block">
            <p className="footer-title">Seguinos:</p>
            <div className="footer-social">
              <a
                href="https://www.instagram.com/macobella.re"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61581651334426#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
            </div>
          </div>
        </div>
      </div>

      <p className="footer-copy">
        © {new Date().getFullYear()} Macobella. Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;
