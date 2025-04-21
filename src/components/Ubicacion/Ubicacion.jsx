import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaClock, FaDirections } from 'react-icons/fa';
import './ubicacion.css';

function Ubicacion() {
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  return (
    <section className="location-section py-0" id="ubicacion">
      <div className="container shadow-lg py-2 pb-5 mt-0">
        <div className="section-header text-center mb-0">
          <h2 className="section-title mb-2">Visítanos</h2>
          <p className="section-subtitle mb-0">Te esperamos en nuestro lugar de reunión</p>
        </div>

        <div className="location-container mt-2">
          <div className="location-map">
            {!isMapLoaded && (
              <div className="map-placeholder">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Cargando mapa...</span>
                </div>
              </div>
            )}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3278.206419809478!2d-58.61399612425336!3d-34.750392672902066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc44f7e343791%3A0x28e442bcd2099c53!2sColegiales%204950%2C%20B1757EQL%20Gregorio%20de%20Laferrere%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1739289290103!5m2!1ses!2sar"
              className="map-iframe"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              onLoad={() => setIsMapLoaded(true)}
              style={{ border: 0 }}
            />
          </div>
          <div className="location-info">

            <div className="info-card">
              <div className="info-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="info-content">
                <h3>Dirección</h3>
                <p>Colegiales 4950, Gregorio de Laferrere, Buenos Aires</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <FaClock />
              </div>
              <div className="info-content">
                <h3>Horarios</h3>
                <p>Miércoles: 19:00hs (Grupo de Conexión)</p>
                <p>Sábado: 18:00hs (Pre-Adolescentes) / 19:00hs (Jóvenes)</p>
                <p>Domingo: 08:00hs (Oración) / 19:00hs (Reunión General)</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <FaPhone />
              </div>
              <div className="info-content">
                <h3>Contacto</h3>
                <p>Tel: (011) 1234-5678</p>
                <p>Email: info@piedrasvivas.com</p>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/dir//Colegiales+4950,+B1757EQL+Gregorio+de+Laferrere,+Provincia+de+Buenos+Aires/@-34.750393,-58.613996,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x95bcc44f7e343791:0x28e442bcd2099c53!2m2!1d-58.6139961!2d-34.7503927"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-directions"
            >
              <FaDirections className="me-2" />
              Cómo llegar
            </a>
          </div>


        </div>
      </div>


    </section>
  );
}

export default Ubicacion;