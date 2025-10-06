import { useState } from "react";
import "./../css/Card.css";

// Importá tus imágenes (usé las que vi en tu carpeta)
import casa from "../assets/casa.jpg";
import golf from "../assets/golf.webp";
import house from "../assets/house.jpeg";

function CardItem({ title, text, img }) {
  const [flipped, setFlipped] = useState(false);

  const toggle = () => setFlipped(v => !v);

  return (
    <div
      className={`flip-card ${flipped ? "is-flipped" : ""}`}
      onClick={toggle}               // tap/click para mobile
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && toggle()}
      role="button"
      tabIndex={0}
      aria-pressed={flipped}
    >
      <div className="flip-card-inner">
        {/* Front */}
        <div className="flip-card-face flip-card-front">
          <h3>{title}</h3>
        </div>

        {/* Back */}
        <div
          className="flip-card-face flip-card-back"
          style={{ backgroundImage: `url(${img})` }}
        >
          <div className="flip-card-overlay" />
          <div className="flip-card-content">
            <h4>{title}</h4>
            <p>{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Card() {
  const items = [
    {
      title: "Casa moderna",
      text:
        "Ambientes luminosos, materiales nobles y eficiente en energía. Ideal para familias jóvenes.",
      img: casa,
    },
    {
      title: "Barrio con golf",
      text:
        "Acceso a amenities premium, seguridad 24/7 y naturaleza. Perfecto para vida tranquila.",
      img: golf,
    },
    {
      title: "Clásica renovada",
      text:
        "Restaurada a nuevo respetando su esencia. Lista para mudarte y disfrutar.",
      img: house,
    },
  ];

  return (
    <section className="cards-wrap">
      {items.map((it) => (
        <CardItem key={it.title} {...it} />
      ))}
    </section>
  );
}
