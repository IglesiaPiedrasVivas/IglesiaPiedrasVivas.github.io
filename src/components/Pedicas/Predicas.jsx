import React, { useState } from 'react';
import './predicas.css'
import { FaYoutube } from 'react-icons/fa';

function Predicas() {
    const [visibleCards, setVisibleCards] = useState(3);
    const [activeAudio, setActiveAudio] = useState(null);

    const predicas = [
        {
            id: 1,
            titulo: "Isaias 49",
            fecha: "23/04/2025",
            predicador: "Jessica Lopez",
            duracion: "21min",
            audioSrc: "./predica/isaias49-jessi.mp3"
        },
        {
            id: 2,
            titulo: "Santa Cena",
            fecha: "20/04/2025",
            predicador: "Gustavo Farias",
            duracion: "20min",
            audioSrc: "./predica/isaias-pastor.mp3"
        },
        {
            id: 3,
            titulo: "El Perdón",
            fecha: "17/04/2025",
            predicador: "Luis Hernandez",
            duracion: "30min",
            audioSrc: "./predica/isaias-luis.mp3"
        },
    ];

    const toggleAudio = (audioId) => {
        if (activeAudio === audioId) {
            setActiveAudio(null);
        } else {
            setActiveAudio(audioId);
        }
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
                                            <source src={predica.audioSrc} type="audio/mpeg" />
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


                <div className="text-center mt-2">
                    <a
                        href="https://youtube.com/@ccpv600?si=JZLxg-sJgSS6RNE2"
                        className="btn btn-predicas"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}
                    >
                        <FaYoutube className='fs-5 me-1' />
                        Ver más prédicas
                    </a>
                </div>

            </div>
        </section>
    );
}

export default Predicas;

