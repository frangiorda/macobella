import { useState } from "react"
import "../css/card.css"

const services = [
  {
    id: 1,
    title: "Conceptualización y Diseños de Desarrollo",
    teaser: "Experiencia, visión y coherencia en cada desarrollo",
    detail:
      "La conceptualización y diseño de desarrollos en Macobella se basan en nuestra experiencia de integrar visión estratégica, análisis territorial y sensibilidad estética, transformando ideas en productos inmobiliarios coherentes, funcionales y con identidad propia, donde cada proyecto refleja el equilibrio entre contexto, demanda y esencia del lugar.",
  },
  {
    id: 2,
    title: "Comercialización de Desarrollos",
    teaser: "Estrategia, confianza y vínculos que perdurab",
    detail:
      " La comercialización de desarrollos en Macobella combina estrategia, conocimiento profundo del producto y comunicación efectiva para posicionar cada proyecto con precisión. Nuestra experiencia garantiza procesos transparentes y un enfoque integral que transforma a los clientes en verdaderos embajadores de la marca.",
  },
  {
    id: 3,
    title: "Venta de Particulares",
    teaser: "Profesionalismo, confianza y valor en cada operación",
    detail:
      "La venta de propiedades particulares en Macobella se basa en un asesoramiento personalizado y un verdadero conocimiento del producto. Aplicamos nuestra experiencia en desarrollos para destacar cada inmueble, maximizando su valor y brindando una experiencia de venta profesional, transparente y orientada a resultados.",
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
        <span className="section-eyebrow">NUESTRAS UNIDADES DE NEGOCIO</span>
        <h2>Se complementan para ofrecer un servicio único:</h2>
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
