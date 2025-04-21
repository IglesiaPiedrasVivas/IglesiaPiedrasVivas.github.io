import React, { useState } from 'react';
import './predicas.css'

function Predicas() {
    const [visibleCards, setVisibleCards] = useState(3);
    const [activeAudio, setActiveAudio] = useState(null);

    const predicas = [
        {
            id: 1,
            titulo: "El Amor de Dios",
            fecha: "10/10/2023",
            predicador: "Juan Pérez",
            duracion:"20min",
            audioSrc: "./predica/Boca (online-audio-converter.com).mp3"
        },
        {
            id: 2,
            titulo: "La Fe en Acción",
            fecha: "15/10/2023",
            predicador: "María Gómez",
            duracion:"20min",
            audioSrc: "predica2.mp3"
        },
        {
            id: 3,
            titulo: "El Perdón",
            fecha: "20/10/2023",
            predicador: "Pedro López",
            duracion:"20min",
            audioSrc: "predica3.mp3"
        },
        {
            id: 4,
            titulo: "Vida en Cristo",
            fecha: "25/10/2023",
            predicador: "Ana Rodríguez",
            duracion:"20min",
            audioSrc: "predica4.mp3"
        },
        {
            id: 5,
            titulo: "La Oración Poderosa",
            fecha: "30/10/2023",
            predicador: "Carlos Martínez",
            duracion:"20min",
            audioSrc: "predica5.mp3"
        }
    ];

    const toggleAudio = (audioId) => {
        if (activeAudio === audioId) {
            setActiveAudio(null);
        } else {
            setActiveAudio(audioId);
        }
    };

    const loadMore = () => {
        setVisibleCards(prev => prev + 2);
    };

    return (
        <section className="predicas-section " id="predicas">
            <div className="container py-3 shadow-lg">
                <div className="section-header text-center mb-1">
                    <h2 className="section-title mb-3">Prédicas Recientes</h2>
                    <p className="section-subtitle">Escucha las enseñanzas más recientes de nuestra congregación</p>
                </div>

                <div className="row">
                    {predicas.slice(0, visibleCards).map((predica) => (
                        <div className="col-lg-4 col-md-6 mb-2" key={predica.id}>
                            <div className={`card predica-card h-100 ${activeAudio === predica.id ? 'active' : ''}`}>
                                <div className="card-header pt-3">
                                    <h5>{predica.titulo}</h5>
                                    <div className="waveform">
                                        <div className="wave"></div>
                                        <div className="wave"></div>
                                        <div className="wave"></div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="predica-meta mb-3">
                                        <p><i className="bi bi-calendar-event me-2"></i> <strong>Fecha:</strong> {predica.fecha}</p>
                                        <p><i className="bi bi-person-fill me-2"></i> <strong>Predicador:</strong> {predica.predicador}</p>
                                        <p><i className="bi bi-alarm me-2"></i> <strong>Duracion:</strong> {predica.duracion}</p>
                                    </div>
                                    
                                    <div className={`audio-player ${activeAudio === predica.id ? 'expanded' : ''}`}>
                                        <audio controls id={`audio-${predica.id}`} className="w-100">
                                            <source src={predica.audioSrc} type="audio/mpeg"/>
                                            Tu navegador no soporta audio.
                                        </audio>
                                    </div>
                                    
                                    <button 
                                        className="btn-play mt-3 w-100"
                                        onClick={() => toggleAudio(predica.id)}
                                    >
                                        <i className={`bi ${activeAudio === predica.id ? 'bi-pause-fill' : 'bi-play-fill'}`}></i>
                                        {activeAudio === predica.id ? ' Pausar' : ' Escuchar'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {visibleCards < predicas.length && (
                    <div className="text-center mt-0">
                    <button 
                      className="btn btn-predicas"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={loadMore}
                    >
                      <i className="bi bi-arrow-down-circle me-2"></i>
                      Ver más prédicas
                    </button>
                  </div>
                )}
            </div>
        </section>
    );
}

export default Predicas;

