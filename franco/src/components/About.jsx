import "../css/about.css"

export default function About() {
  return (
    <section id="quienes-somos" className="quienes-section">
      <div className="quienes-container">
        <div className="quienes-text">
          <h2>Quiénes Somos</h2>
          <p>
            Somos un equipo especializado en el mercado inmobiliario, con una visión
            integral que combina experiencia, innovación y compromiso. Acompañamos a
            nuestros clientes en cada etapa del proceso, generando confianza a través
            de un enfoque profesional y transparente.
          </p>
          <p>
            Nos destacamos por brindar soluciones a medida para particulares,
            desarrolladores y empresas, impulsando proyectos sólidos y relaciones de
            largo plazo.
          </p>
        </div>

        <div className="quienes-image">
          <img
            src="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80"
            alt="Nuestro equipo"
          />
        </div>
      </div>
    </section>
  )
}
