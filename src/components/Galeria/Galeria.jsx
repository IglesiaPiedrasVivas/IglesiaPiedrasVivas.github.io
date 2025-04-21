import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import './galeria.css'

function Galeria() {
  const [activeGallery, setActiveGallery] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [loadedImages, setLoadedImages] = useState(8); // Número inicial de imágenes a mostrar

  // Datos de las galerías
  const galleries = [
    {
      id: 1,
      images: Array.from({length: 8}, (_, i) => `./img/galeria/galery (${i+1}).jpeg`)
    },
    {
      id: 2,
      images: Array.from({length: 8}, (_, i) => `./img/galeria/galery (${i+9}).jpeg`)
    },
    {
      id: 3,
      images: Array.from({length: 8}, (_, i) => `./img/galeria/galery (${i+17}).jpeg`)
    }
  ];

  const handleImageClick = (imgSrc) => {
    setSelectedImage(imgSrc);
    setShowModal(true);
  };

  const loadMoreImages = () => {
    setLoadedImages(prev => prev + 4); // Cargar 4 imágenes más
  };

  return (
    <section className="gallery-section  bg-dark ">
      <div className="container shadow-lg py-3 pt-4">
        <div className="section-header text-center mb-1 mt-1">
          <h2 className="section-title text-light">Galería de Fotos</h2>
          <p className="section-subtitle">Momentos especiales de nuestra congregación</p>
        </div>

        

        {/* Galería de imágenes */}
        <div className="gallery-grid">
          {galleries[activeGallery - 1].images.slice(0, loadedImages).map((img, index) => (
            <div className="gallery-item" key={index} onClick={() => handleImageClick(img)}>
              <img 
                src={img} 
                alt={`Imagen ${index + 1}`} 
                className="gallery-img"
                loading="lazy"
              />
              <div className="gallery-hover">
                <i className="bi bi-zoom-in"></i>
              </div>
            </div>
          ))}
        </div>

        {/* Botón para cargar más imágenes */}
        {loadedImages < galleries[activeGallery - 1].images.length && (
          <div className="text-center mt-2">
            <button className="btn btn-load-more" onClick={loadMoreImages}>
              <i className="bi bi-plus-circle me-2"></i>
              Cargar más fotos
            </button>
          </div>
        )}

        {/* Controles de galería */}
        <div className="gallery-controls mt-3 d-flex justify-content-center">
          {galleries.map(gallery => (
            <button
              key={gallery.id}
              className={`gallery-control-btn mx-2 ${activeGallery === gallery.id ? 'active' : ''}`}
              onClick={() => {
                setActiveGallery(gallery.id);
                setLoadedImages(8); // Resetear al cambiar de galería
              }}
              aria-label={`Mostrar galería ${gallery.id}`}
            >
              <span className="gallery-control-dot"></span>
            </button>
          ))}
        </div>

        {/* Enlace a Instagram */}
        <div className="text-center mt-3">
          <a 
            href="https://www.instagram.com/iglesia.piedrasvivas?igsh=NjV4OGhkYjlteG5n" 
            className="btn btn-instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-instagram me-2"></i>
            Ver más en Instagram
          </a>
        </div>

        {/* Modal para imagen ampliada */}
        <Modal 
          show={showModal} 
          onHide={() => setShowModal(false)}
          centered
          size="lg"
          className="gallery-modal"
        >
          <Modal.Body className="p-0">
            <img 
              src={selectedImage} 
              alt="Imagen ampliada" 
              className="img-fluid w-100"
            />
            <button 
              className="modal-close-btn"
              onClick={() => setShowModal(false)}
              aria-label="Cerrar modal"
            >
              <i className="bi bi-x"></i>
            </button>
          </Modal.Body>
        </Modal>
      </div>

     
    </section>
  );
}

export default Galeria;