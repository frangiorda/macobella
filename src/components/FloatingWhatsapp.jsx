import { FaWhatsapp } from "react-icons/fa";
import "../css/FloatingWhatsapp.css";

export default function FloatingWhatsApp() {
  const phone = "5493517633783"; 
  const text  = encodeURIComponent("Hola, me gustaría saber más acerca de ...");
  const href  = `https://wa.me/${phone}?text=${text}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactanos por WhatsApp"
      className="whatsapp-float"
    >
      <FaWhatsapp className="whatsapp-icon" />
      <span className="whatsapp-label">Contactanos</span>
    </a>
  );
}
