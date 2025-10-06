import "./../css/About.css";
import aboutImg from "../assets/golf.webp";

export default function About() {
  return (
    <section id="about" className="section section--alt">
      <div className="container about">
        <div className="about-image">
          <img src={aboutImg} alt="Nuestro espacio" />
        </div>
        <div className="about-text">
          <h2>Quiénes Somos</h2>
          <p>
            Somos un club que combina naturaleza, confort y excelencia deportiva.
            Desde nuestros inicios, nos propusimos crear un espacio donde cada
            visitante pueda vivir experiencias únicas rodeado de paisajes
            excepcionales.
          </p>
          <p>
            Nuestra misión es brindar servicios de primer nivel, fomentando la
            comunidad y el disfrute en cada rincón de nuestras instalaciones.
          </p>
        </div>
      </div>
    </section>
  );
}
