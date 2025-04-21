import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

function EventDetail({ event, onClose }) {
  // Galería de imágenes de ejemplo para cada evento
  const eventGalleries = {
    miercoles_grupo: [
      { image: "./img/reunion/reunion4.jpeg", caption: "Reunión de estudio bíblico" },
      { image: "./img/reunion/reunion1.jpeg", caption: "Compartiendo en grupo" },
      { image: "./img/reunion/reunion2.jpeg", caption: "Oración en comunidad" },
      { image: "./img/reunion/reunion4.jpeg", caption: "Reunión de estudio bíblico" },
      { image: "./img/reunion/reunion1.jpeg", caption: "Compartiendo en grupo" },
      { image: "./img/reunion/reunion2.jpeg", caption: "Oración en comunidad" }
    ],
    sabado_pre: [
      { image: "./img/reunion/reunion2.jpeg", caption: "Actividades para pre-adolescentes" },
      { image: "./img/reunion/reunion3.jpeg", caption: "Aprendiendo valores cristianos" },
      { image: "./img/reunion/reunion4.jpeg", caption: "Juegos y dinámicas" }
    ],
    sabado_jovenes: [
      { image: "./img/reunion/reunion1.jpeg", caption: "Reunión de jóvenes" },
      { image: "./img/reunion/reunion3.jpeg", caption: "Alabanza y adoración" },
      { image: "./img/reunion/reunion4.jpeg", caption: "Charlas y debates" }
    ],
    domingo_oracion: [
      { image: "./img/reunion/reunion3.jpeg", caption: "Momento de oración" },
      { image: "./img/reunion/reunion1.jpeg", caption: "Intercesión comunitaria" },
      { image: "./img/reunion/reunion2.jpeg", caption: "Oración por necesidades" }
    ],
    domingo_general: [
      { image: "./img/reunion/reunion.jpeg", caption: "Culto dominical" },
      { image: "./img/reunion/reunion1.jpeg", caption: "Predicación de la Palabra" },
      { image: "./img/reunion/reunion3.jpeg", caption: "Comunión entre hermanos" }
    ]
  };

  // Descripciones detalladas para cada evento
  const eventDescriptions = {
    miercoles_grupo: "Nuestro Grupo de Conexión es un espacio íntimo donde nos reunimos para estudiar la Biblia, compartir nuestras vidas y apoyarnos mutuamente en el caminar cristiano. Cada miércoles profundizamos en diferentes temas bíblicos aplicables a la vida cotidiana.",
    sabado_pre: "El ministerio de pre-adolescentes está diseñado para chicos de 10 a 13 años. A través de juegos, dinámicas y enseñanzas bíblicas adaptadas, ayudamos a los jóvenes a construir una base sólida en su relación con Dios.",
    sabado_jovenes: "Nuestras reuniones juveniles son un espacio vibrante donde los jóvenes de 14 a 25 años pueden crecer en su fe, formar amistades sólidas y descubrir su propósito en Cristo. Incluye alabanza, enseñanza relevante y actividades sociales.",
    domingo_oracion: "Comenzamos el domingo con un poderoso tiempo de oración comunitaria. Intercedemos por las necesidades de la congregación, nuestra ciudad y el mundo. Un espacio para experimentar la presencia de Dios y ver su poder en acción.",
    domingo_general: "Nuestro culto principal es un encuentro con Dios a través de la alabanza, la Palabra y la comunión. Un espacio para toda la familia donde predicamos el evangelio de manera relevante y transformadora."
  };

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="event-detail-overlay">
      <div className="event-detail-container">
        <button className="event-detail-close" onClick={onClose}>
          <i className="bi bi-x-lg"></i>
        </button>
        
        <div className="event-detail-content">
          <div className="event-detail-gallery">
            <Swiper
              modules={[Autoplay, Navigation, Thumbs]}
              spaceBetween={10}
              navigation={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              thumbs={{ swiper: thumbsSwiper }}
              className="event-detail-main-slider"
            >
              {eventGalleries[event.id].map((img, index) => (
                <SwiperSlide key={index}>
                  <div 
                    className="event-detail-slide-img" 
                    style={{ backgroundImage: `url(${img.image})` }}
                  >
                    <div className="event-detail-slide-caption">{img.caption}</div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            
            <Swiper
              modules={[Thumbs]}
              watchSlidesProgress
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              className="event-detail-thumbs"
            >
              {eventGalleries[event.id].map((img, index) => (
                <SwiperSlide key={index}>
                  <div 
                    className="event-detail-thumb-img" 
                    style={{ backgroundImage: `url(${img.image})` }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          
          <div className="event-detail-info">
            <div className="event-detail-header">
              <span className="event-detail-day">{event.day}</span>
              <h2 className="event-detail-title mb-1">{event.title}</h2>
              <div className="event-detail-time mb-1">
                <i className="bi bi-clock-fill mb-1"></i> {event.time}
              </div>
            </div>
            
            <div className="event-detail-description mt-1 mb-0">
              <p>{eventDescriptions[event.id]}</p>
              
              <div className="event-detail-features my-0">
                <div className="event-feature">
                  <i className="bi bi-people-fill"></i>
                  <span>10 a 13 años.</span>
                </div>
                
                <button className="btn btn-secondary">
                <i className="bi bi-share-fill"></i> Compartir
              </button>
              </div>
            </div>
            

          </div>
        </div>
      </div>
    </div>
  );
}

export default EventDetail;