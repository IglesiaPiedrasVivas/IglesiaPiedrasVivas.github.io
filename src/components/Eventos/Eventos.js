import React, { useState, useEffect } from 'react';
import './eventos.css';

const Eventos = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  // Bloquear scroll cuando el modal está abierto
  useEffect(() => {
    if (selectedImg) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [selectedImg]);

  const imagenesEventos = [
    { id: 1, url: './img/Pareja.jpg', alt: 'Evento 1' },
    { id: 2, url: './img/Expansion.png', alt: 'Evento 2' },
    { id: 3, url: './img/VuelveEscuelita.png', alt: 'Evento 3' },
    { id: 4, url: './img/libros.png', alt: 'Evento 4' },
  ];

  return (
    <section className="events-section bg-dark m-0 p-0" id="eventos">
      <div className="container shadow-lg px-0 pb-5 pt-3">
        <div className="section-header text-center mb-4">
          <h2 className="section-title text-light mb-1">¡Importante!</h2>
        </div>

        <div className="events-grid">
          {imagenesEventos.map((evento) => (
            <div 
              key={evento.id} 
              className="event-card-simple"
              onClick={() => setSelectedImg(evento.url)}
            >
              <img src={evento.url} alt={evento.alt} className="event-img" />
              <div className="event-hover-overlay">
                <span>Ampliar</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImg && (
        <div className="event-lightbox" onClick={() => setSelectedImg(null)}>
          <button className="close-btn">&times;</button>
          <img src={selectedImg} alt="Evento ampliado" />
        </div>
      )}
    </section>
  );
};

export default Eventos;