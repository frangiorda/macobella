import familia from '../assets/familia.png';
import masterplan from '../assets/masterplan.png';
import lotes from '../assets/lotes.png';

export default function CarouselHero() {
  const NAVBAR_HEIGHT = 70;

  const heroStyle = {
    height: `calc(100vh - ${NAVBAR_HEIGHT}px)`,
    paddingTop: `${NAVBAR_HEIGHT}px`,
    width: '100%',
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: '#0a0a0a',
  };

  const slideWrapper = { position: 'relative', width: '100%', height: '100%' };

  const imgCover = (objectPosition = 'center') => ({
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition,
  });

  const overlayStyle = {
    position: 'absolute',
    inset: 0,
    background:
      'linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.35) 35%, rgba(0,0,0,0.75) 100%)',
    pointerEvents: 'none',
  };

  const captionWrap = {
    position: 'absolute',
    inset: 0,
    display: 'grid',
    placeItems: 'center',
    padding: '0 6vw',
    textAlign: 'center',
  };

  const captionBox = {
    maxWidth: 900,
    opacity: 0,
    transform: 'translateY(30px)',
    animation: 'fadeUp 1.2s ease forwards',
    animationDelay: '0.4s', // se puede ajustar
  };

  const titleStyle = {
    fontFamily:
      '"Agrandir", system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif',
    fontSize: 'clamp(20px, 5vw, 50px)',
    fontWeight: 550,
    color: '#fff',
    marginBottom: '0.5rem',
    lineHeight: 1.08,
    letterSpacing: '0.2px',
    textShadow: '0 2px 18px rgba(0,0,0,0.5)',
  };

  const descStyle = {
    fontFamily:
      '"Montserrat", system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif',
    fontSize: 'clamp(14px, 1.6vw, 20px)',
    fontWeight: 600,
    color: '#BF4827',
    lineHeight: 1.5,
    /* fondo blanco para mejorar legibilidad */
    padding: '0.25rem 0.5rem',
    textShadow: '#ffffff',
  };

  const slides = [
    {
      img: masterplan,
      alt: 'Masterplan',
      title: 'Donde la visión integral se convierte en valor',
      focus: 'center',
      highPriority: true,
    },
    {
      img: familia,
      alt: 'Familia disfrutando del espacio',
      title: 'Convertimos espacios en estilos de vida',
      focus: 'center',
    },
    {
      img: lotes,
      alt: 'Lotes',
      title: 'Ver más allá... Nuestra experiencia al servicio de tu negocio',
      focus: 'center',
    },
  ];

  return (
    <>
      {/* keyframes internos */}
      <style>{`
        @keyframes fadeUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <section style={heroStyle} id="inicio">
        <div
          id="carouselHero"
          className="carousel slide h-100"
          data-bs-ride="carousel"
          data-bs-touch="true"
        >
          <div className="carousel-indicators" style={{ marginBottom: '1.25rem' }}>
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                data-bs-target="#carouselHero"
                data-bs-slide-to={i}
                className={i === 0 ? 'active' : ''}
                aria-current={i === 0 ? 'true' : undefined}
                aria-label={`Slide ${i + 1}`}
                style={{ width: 12, height: 12, borderRadius: '50%' }}
              />
            ))}
          </div>

          <div className="carousel-inner h-100">
            {slides.map((s, i) => (
              <div
                key={s.alt}
                className={`carousel-item h-100 ${i === 0 ? 'active' : ''}`}
                data-bs-interval="7000"
              >
                <div style={slideWrapper}>
                  <img
                    src={s.img}
                    alt={s.alt}
                    style={imgCover(s.focus)}
                    {...(s.highPriority
                      ? { fetchPriority: 'high', decoding: 'async' }
                      : { loading: 'lazy', decoding: 'async' })}
                  />
                  <div style={overlayStyle} />
                  <div style={captionWrap}>
                    <div style={captionBox}>
                      <h2 style={titleStyle}>{s.title}</h2>
                      <p style={descStyle}>{s.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselHero"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Anterior</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselHero"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Siguiente</span>
          </button>
        </div>
      </section>
    </>
  );
}
