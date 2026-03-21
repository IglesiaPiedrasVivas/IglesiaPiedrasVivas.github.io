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
      { image: "./img/reunion/reumiercoles/miercoles1.jpeg", caption: "Reunión de estudio bíblico" },
      { image: "./img/reunion/reumiercoles/miercoles2.jpeg", caption: "Compartiendo en grupo" },
      { image: "./img/reunion/reumiercoles/miercoles3.jpeg", caption: "Oración en comunidad" },
      { image: "./img/reunion/reumiercoles/miercoles4.jpeg", caption: "Reunión de estudio bíblico" },
      { image: "./img/reunion/reumiercoles/miercoles5.jpeg", caption: "Compartiendo en grupo" },
      { image: "./img/reunion/reumiercoles/miercoles6.jpeg", caption: "Oración en comunidad" }
    ],
    sabado_escuelita: [
      { image: "./img/reunion/escuelita/escuelitaimg1.jpeg", caption: "Actividades para pre-adolescentes" },
      { image: "./img/reunion/escuelita/escuelitaimg2.jpeg", caption: "Aprendiendo valores cristianos" },
      { image: "./img/reunion/escuelita/escuelitaimg3.jpeg", caption: "Juegos y dinámicas" },
      { image: "./img/reunion/escuelita/escuelitaimg4.jpeg", caption: "Juegos y dinámicas" },
      { image: "./img/reunion/escuelita/escuelitaimg5.jpeg", caption: "Juegos y dinámicas" }
    ],
    sabado_escuela_de_vida: [
      { image: "./img/reunion/escueladevida/escueladevida1.jpeg", caption: "Actividades para pre-adolescentes" },
      { image: "./img/reunion/escueladevida/escueladevida2.jpeg", caption: "Aprendiendo valores cristianos" },
      { image: "./img/reunion/escueladevida/escueladevida3.jpeg", caption: "Juegos y dinámicas" },
      { image: "./img/reunion/escueladevida/escueladevida4.jpeg", caption: "Juegos y dinámicas" },
      { image: "./img/reunion/escueladevida/escueladevida5.jpeg", caption: "Juegos y dinámicas" }
    ],
    sabado_pre: [
        { image: "./img/reunion/reunion2.jpeg", caption: "Juegos y dinámicas" },
      { image: "./img/reunion/pre/pre2.jpeg", caption: "Aprendiendo valores cristianos" },
      { image: "./img/reunion/pre/pre3.jpeg", caption: "Juegos y dinámicas" }
    ],
    sabado_jovenes: [
      { image: "./img/reunion/jovenes/jovenes1.jpeg", caption: "Reunión de jóvenes" },
      { image: "./img/reunion/jovenes/jovenes2.jpeg", caption: "Alabanza y adoración" },
      { image: "./img/reunion/jovenes/jovenes3.jpeg", caption: "Charlas y debates" },
      { image: "./img/reunion/jovenes/jovenes4.jpeg", caption: "Charlas y debates" },
      { image: "./img/reunion/jovenes/jovenes5.jpeg", caption: "Charlas y debates" },
    ],
    domingo_oracion: [
      { image: "./img/reunion/oracion/oracion1.jpeg", caption: "Momento de oración" },
      { image: "./img/reunion/oracion/oracion2.jpeg", caption: "Intercesión comunitaria" },
      { image: "./img/reunion/oracion/oracion3.jpeg", caption: "Oración por necesidades" },
      { image: "./img/reunion/oracion/oracion4.jpeg", caption: "Oración por necesidades" }
    ],
    domingo_general: [
      { image: "./img/reunion/reudomingo/domingo1.jpeg", caption: "Momento de oración" },
      { image: "./img/reunion/reudomingo/domingo2.jpeg", caption: "Intercesión comunitaria" },
      { image: "./img/reunion/reudomingo/domingo3.jpeg", caption: "Oración por necesidades" },
      { image: "./img/reunion/reudomingo/domingo4.jpeg", caption: "Oración por necesidades" }
    ]
  };

  // Descripciones detalladas para cada evento
  const eventDescriptions = {
    miercoles_grupo: "El Grupo de Conexión es un espacio donde nos reunimos para estudiar la Biblia, compartir nuestra semana, orar y apoyarnos mutuamente en el caminar cristiano. Cada miércoles profundizamos en diferentes temas bíblicos aplicables a la vida cotidiana.",
    sabado_escuelita: `

    ¡¡¡COMENZAMOS EL SABADO 28 DE MARZO!!! 
    
    📖 El Ministerio de Escuela Bíblica está pensado para niños de 3 a 11 años. Buscamos que los más pequeños conozcan a Dios de una manera divertida y significativa. Cada encuentro está lleno de alegría, aprendizaje y compañerismo.

❓ ¿Cómo es una tarde en la Escuela Bíblica Infantil?

🎉 ¡Bienvenida alegre!: Comenzamos con un saludo lleno de entusiasmo para dar la bienvenida a todos los niños.

🙏 Oración inicial: Damos gracias a Dios y presentamos el encuentro.

🎶 Alabanza y danza: Bailamos y cantamos canciones cristianas especialmente pensadas para los niños.

🙌 Oración grupal: Volvemos a orar, animando a los niños a hablar con Dios.

👧👦 Clases por edades:

🦜 Sala Pequeña (3 a 5 años)

🐵 Sala Mediana (6 a 8 años)

🐋 Sala Grande (9 a 11 años)

📚 En cada clase se comparte una historia bíblica o reflexión, junto con actividades creativas que refuerzan el mensaje.

☕ Merienda y recreo: Un momento para compartir, descansar y disfrutar.

🎁 Cierre especial: Terminamos con un saludo final y cada niño se lleva el versículo del día, junto con una golosina🍬.

✨ Nuestro objetivo es que cada niño experimente el amor de Dios, aprenda valores bíblicos y se divierta mientras crece en su fe.
    
    
    `,
    sabado_escuela_de_vida:"",
    sabado_pre: "El ministerio de preadolescentes está diseñado para chicos de 12 a 14 años. A través de juegos, dinámicas y enseñanzas bíblicas adaptadas, ayudamos a los jóvenes a construir una base sólida en su relación con Dios.",
    sabado_jovenes: "Nuestras reuniones de adoles y jóvenes son un espacio donde los jóvenes desde los 15 años pueden crecer en su fe, formar amistades sólidas y descubrir su propósito en Cristo.",
    domingo_oracion: "Comenzamos el domingo con un poderoso tiempo de oración comunitaria. Intercedemos por las necesidades de la congregación, nuestra ciudad y el mundo. Un espacio para experimentar la presencia de Dios y ver su poder en acción.",
    domingo_general: "Nuestro culto principal es un momento de encuentro con Dios a través de la alabanza, la palabra y la comunión. Un espacio para que toda la familia pueda disfrutar y seguir aprendiendo de Cristo."
  };

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  // NUEVA FUNCIÓN: Maneja el envío del mensaje a WhatsApp
  const handleShareWhatsApp = () => {
    const description = eventDescriptions[event.id] || "";
    
    // Armamos el texto usando template literals
    const textToShare = `*${event.title}*

📅 *Día:* ${event.day}
⏰ *Horario:* ${event.time}
👥 *Edades:* ${event.for}

*Descripción:*
${description.trim()}

📍 *Ubicación:* Colegiales 4950

🌐 *Más información:* https://iglesiapiedrasvivas.github.io/

¡Te esperamos! 🙌`;

    // Codificamos el texto para que sea una URL válida
    const encodedText = encodeURIComponent(textToShare);
    
    // Abrimos WhatsApp en una nueva pestaña
    window.open(`https://api.whatsapp.com/send?text=${encodedText}`, '_blank');
  };

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
                  {<span>{event.for}</span>}
                </div>
                
                <button className="btn btn-secondary" onClick={handleShareWhatsApp}>
                  <i className="bi bi-whatsapp"></i> Compartir
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