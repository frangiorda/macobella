import house from '../assets/house.jpeg'
import golf from '../assets/golf.webp'
import casa from '../assets/casa.jpg'

export default function Carousel() {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>

      <div className="carousel-inner" style={{ height: '70vh' }}>
        <div className="carousel-item active">
          <img src={casa} className="d-block w-100" alt="Slide 1" style={{ objectFit: 'cover', height: '100%' }} />
        </div>
        <div className="carousel-item">
          <img src={golf} className="d-block w-100" alt="Slide 2" style={{ objectFit: 'cover', height: '100%' }} />
        </div>
        <div className="carousel-item">
          <img src={house} className="d-block w-100" alt="Slide 3" style={{ objectFit: 'cover', height: '100%' }} />
        </div>
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Anterior</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Siguiente</span>
      </button>
    </div>
  )
}
