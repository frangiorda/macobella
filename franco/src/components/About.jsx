import "../css/about.css"
import about from "../assets/about.jpg"

export default function About() {
  return (
    <section id="quienes-somos" className="quienes-section">
      <div className="quienes-container">
        <div className="quienes-text">
          <h2>Quiénes Somos</h2>
          <p>
            En Macobella concebimos el desarrollo inmobiliario como un proceso integral donde cada etapa se conecta con la siguiente. Unimos visión, diseño y comercialización para dar forma a proyectos con identidad, coherencia y propósito.
          Nuestra experiencia en conceptualización y diseño de desarrollos nos permite interpretar el territorio, entender la demanda y transformar ideas en productos sólidos, sostenibles y con valor real.

          </p>
          <p>
              Creemos que la excelencia nace de ver más allá: anticipar el potencial, cuidar los detalles y mantener una mirada estratégica que equilibra lo comercial con lo humano.
            En cada proyecto buscamos crear experiencias que trasciendan, combinando profesionalismo, sensibilidad estética y una gestión transparente orientada a resultados
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
