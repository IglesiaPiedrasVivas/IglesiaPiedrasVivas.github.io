import React, { useState } from 'react';
import './eventos.css';

const Eventos = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  // Lista de tus 4 eventos (reemplaza las URLs con tus imágenes reales)
  const imagenesEventos = [
    { id: 1, url: 'https://via.placeholder.com/800x1000?text=Evento+1', alt: 'Evento 1' },
    { id: 2, url: 'https://via.placeholder.com/800x1000?text=Evento+2', alt: 'Evento 2' },
    { id: 3, url: 'https://via.placeholder.com/800x1000?text=Evento+3', alt: 'Evento 3' },
    { id: 4, url: 'https://via.placeholder.com/800x1000?text=Evento+4', alt: 'Evento 4' },
  ];

  return (
    <section className="events-section bg-dark m-0 p-0" id="eventos">
      <div className="container shadow-lg px-0 py-4">
        <div className="section-header text-center mb-5">
          <h2 className="section-title text-light mb-1">Nuestros Eventos</h2>
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
                <span>Ver más</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Modal a pantalla completa */}
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