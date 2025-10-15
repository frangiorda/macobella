import "../css/About.css"
import about from "../assets/about.jpg"

export default function About() {
  return (
    <section id="quienes-somos" className="quienes-section">
      <div className="quienes-container">
        <div className="quienes-text">
          <h2>Quiénes Somos</h2>
          <p>
            En Macobella generamos desarrollos inmobiliarios  desde una visión estratégica que integra concepción, diseño, 
            posicionamiento y  gestión comercial, logrando maximizar su valor.
          </p>
        </div>

        <div className="quienes-image">
          <img
            src={about}
            alt="Nuestro equipo"
          />
        </div>
      </div>
    </section>
  )
}
