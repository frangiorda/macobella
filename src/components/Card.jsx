import { useState } from "react"
import "../css/card.css"

const services = [
  {
    id: 1,
    title: "Conceptualización y diseño de Desarrollo",
    detail:
      "En Macobella generamos conceptos inmobiliarios innovadores y funcionales,   enfocados hacia las personas y sus nuevos estilos de vida,  partiendo desde un análisis territorial y competitivo estratégico, reflejando el equilibrio entre  producto,  demanda  y  esencia del lugar.",
  },
  {
    id: 2,
    title: "Comercialización de Desarrollos",
    detail:
    
      "Gestionamos la comercialización diseñando estrategias de comunicación efectiva,  partiendo de los principales  atributos del proyecto y orientadas al Cliente objetivo,  con métodos documentados que nos permiten un control estadístico del proceso de Venta, asegurando la eficacia de la conversión de contactos en Ventas y maximizando la inversión Publicitaria.",
  },
  {
    id: 3,
    title: "Gestión de Ventas Particulares",
    detail:
      "Basados en nuestra experiencia, brindamos un asesoramiento personalizado, partiendo de un profundo conocimiento del producto que logra maximizar su valor, generando una experiencia de gestión de venta profesional, transparente y orientada a resultados.",
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
    <section className="cards-section" id="servicios">
      <div className="cards-header" >
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
