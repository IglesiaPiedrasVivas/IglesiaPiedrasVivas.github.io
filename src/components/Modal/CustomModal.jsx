import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { FaTimes, FaCheck, FaExpand } from 'react-icons/fa';
import BotonVista from './BotonVista';
import './modal.css';

function CustomModal() {
  const [show, setShow] = useState(false);
  const [showAuto, setShowAuto] = useState(true); // Controla si debe mostrarse automáticamente
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    if (showAuto) {
      const timer = setTimeout(() => {
        setShow(true);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [showAuto]); // Se ejecuta cuando showAuto cambia

  const handleClose = () => {
    setShow(false);
    setShowAuto(false); // Al cerrar manualmente, desactivamos el auto-show
  };

  const handleShow = () => {
    setShow(true);
  };

  const toggleFullscreen = () => setIsFullscreen(!isFullscreen);

 

  return (
    <>
      {/* Este botón sería reemplazado por el componente BotonVista */}
      <BotonVista onClick={handleShow} />
      
      <Modal 
        show={show} 
        onHide={handleClose}
        centered
        fullscreen={isFullscreen ? true : false}
        aria-labelledby="vision-modal-title"
        className="vision-modal"
      >
        <Modal.Header className="modal-header-custom">
          <Modal.Title id="vision-modal-title">
            <span className="vision-year">2025</span>
            <span className="vision-title">Visión CCPV</span>
          </Modal.Title>
          <div className="modal-controls">
            <button 
              className="btn btn-fullscreen"
              onClick={toggleFullscreen}
              aria-label={isFullscreen ? 'Salir de pantalla completa' : 'Pantalla completa'}
            >
              <FaExpand />
            </button>
            <button 
              className="btn btn-close-custom"
              onClick={handleClose}
              aria-label="Cerrar modal"
            >
              <FaTimes />
            </button>
          </div>
        </Modal.Header>
        <Modal.Body className="p-0">
          <div className="modal-image-container">
            <img 
              src="./img/Expansion.jpg" 
              alt="Mapa de expansión y visión 2025 de CCPV" 
              className="img-fluid"
              loading="lazy"
            />
          </div>
        </Modal.Body>
        <Modal.Footer className="modal-footer-custom">
          <Button variant="primary" onClick={handleClose}>
            <FaCheck className="me-2" />
            Entendido
          </Button>
        </Modal.Footer>
      </Modal>

   
    </>
  );
}

export default CustomModal;