import { useState } from "react"
import "../css/card.css"

const services = [
  {
    id: 1,
    title: "Comercialización de Desarrollos",
    teaser: "Descubre la propiedad de tus sueños",
    detail:
      "Explora propiedades seleccionadas, programa visitas y recibe orientación personalizada con información basada en datos y apoyo dedicado de agentes.",
  },
  {
    id: 2,
    title: "Venta de Particulares",
    teaser: "Maximiza el valor de tu propiedad",
    detail:
      "Acompañamos cada operación con transparencia y asesoramiento personalizado",
  },
  {
    id: 3,
    title: "Conceptualización y Diseños de Desarrollo",
    teaser: "Transforma ideas en realidad",
    detail:
      "Transformamos ideas en proyectos inmobiliarios sólidos y atractivos",
  },
]

export default function FlipCards() {
  const [flipped, setFlipped] = useState([])

  const toggle = (id) => {
    setFlipped((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    )
  }

  return (
    <section className="cards-section">
      <div className="cards-header">
        <h2>Servicios</h2>
        <p>Tus ideas convertidas en valor</p>
      </div>

      <div className="cards-wrapper">
        {services.map((s) => {
          const isFlipped = flipped.includes(s.id)
          return (
            <div
              key={s.id}
              className="flip-card"
              onClick={() => toggle(s.id)}
              onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && toggle(s.id)}
              role="button"
              tabIndex={0}
              aria-label={`${s.title} – click to flip`}
            >
              <div className={`flip-card-inner ${isFlipped ? "flipped" : ""}`}>
                {/* Frente */}
                <div className="flip-card-face flip-card-front">
                  <div className="front-content">
                    <h3>{s.title}</h3>
                    <p className="teaser">{s.teaser}</p>
                  </div>
                </div>

                {/* Dorso (sin botón) */}
                <div className="flip-card-face flip-card-back">
                  <p className="detail">{s.detail}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
