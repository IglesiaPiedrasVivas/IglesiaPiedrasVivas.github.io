import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './hero.css';
import EventDetail from '../EventDetail';

function Hero() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = [
    { 
      id: "miercoles_grupo", 
      day: "Miércoles", 
      title: "Reunión Grupo de Conexión", 
      time: "19:00hs",
      bgImage: "./img/reunion/reunion4.jpeg"
    },
    { 
      id: "sabado_pre", 
      day: "Sábado", 
      title: "Reunión de Pre-Adolescentes", 
      time: "18:00hs",
      bgImage: "./img/reunion/reunion2.jpeg"
    },
    { 
      id: "sabado_jovenes", 
      day: "Sábado", 
      title: "Reunión de Jóvenes", 
      time: "19:00hs",
      bgImage: "./img/reunion/reunion1.jpeg"
    },
    { 
      id: "domingo_oracion", 
      day: "Domingo", 
      title: "Reunión de Oración", 
      time: "08:00hs",
      bgImage: "./img/reunion/reunion3.jpeg"
    },
    { 
      id: "domingo_general", 
      day: "Domingo", 
      title: "Reunión General", 
      time: "19:00hs",
      bgImage: "./img/reunion/reunion.jpeg"
    }
  ];

  const [showDetail, setShowDetail] = useState(false);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setShowDetail(true);
    document.body.style.overflow = 'hidden'; // Previene el scroll del body
  };

  const handleCloseDetail = () => {
    setShowDetail(false);
    document.body.style.overflow = 'auto'; // Restaura el scroll del body
  };

  return (
    <section className="hero-section" id='hero'>
      {/* Banner Principal */}
      <div className="hero-banner">
        <div className="hero-overlay"></div>
        <div className="hero-content container">
          <h1 className="hero-title">
            Centro Cristiano <span>Piedras Vivas</span>
          </h1>
          <p className="hero-subtitle">
            "Agranda tu casa; construye una ampliación. Extiende tu hogar, no te limites ni repares en gastos pues pronto estarás llena a rebosar; te expandirás a derecha e izquierda y tus descendientes poseerán naciones y poblarán ciudades abandonadas"
            <br />
            <strong>Isaías 54:2-3 (NTV, PDT)</strong>
          </p>
          <div className="hero-buttons">
            <a href="#ubicacion" className="btn btn-primary btn-hero">
              <i className="bi bi-geo-alt-fill me-2"></i> Ver ubicación
            </a>
            <a href="#predicas" className="btn btn-secondary btn-hero">
              <i className="bi bi-mic-fill me-2"></i> Escuchar prédicas
            </a>
          </div>
        </div>
      </div>

      {/* Slider de Eventos */}
      <div className="events-slider-container">
        <div className="container px-0">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={15}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={false}
            breakpoints={{
              576: {
                slidesPerView: 2,
                spaceBetween: 15
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20
              },
              992: {
                slidesPerView: 3,
                spaceBetween: 20
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 20
              }
            }}
            className="events-slider"
          >
            {events.map((event) => (
              <SwiperSlide key={event.id}>
                <div className="event-card">
                  <div 
                    className="event-card-bg" 
                    style={{ backgroundImage: `url(${event.bgImage})` }}
                  ></div>
                  <div className="event-card-overlay"></div>
                  <div className="event-card-content">
                    <div className="event-day mb-0">{event.day}</div>
                    <h3 className="event-title mb-0">{event.title}</h3>
                    <div className="event-time">
                      <i className="bi bi-clock-fill me-2"></i>
                      {event.time}
                    </div>
                    <button 
                      className="btn btn-event-more"
                      onClick={() => handleEventClick(event)}
                    >
                      Más información
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Modal de Detalle de Evento */}
      {showDetail && (
        <div className={`event-detail-overlay ${showDetail ? 'active' : ''}`}>
          <EventDetail event={selectedEvent} onClose={handleCloseDetail} />
        </div>
      )}
    </section>
  );
}

export default Hero;