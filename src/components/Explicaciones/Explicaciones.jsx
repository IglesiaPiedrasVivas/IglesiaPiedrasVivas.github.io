import React, { useState } from 'react';
import { FaBookBible, FaCross, FaHandHoldingHeart, FaChurch } from 'react-icons/fa6';
import './explicaciones.css'

function Explicaciones() {
  const [activeAccordion, setActiveAccordion] = useState('collapseOne');

  const toggleAccordion = (id) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  const explanations = [
    {
      id: 'collapseOne',
      title: '¿Qué es la Gracia de Dios?',
      content: 'La gracia de Dios es un regalo inmerecido que nos ofrece salvación y perdón a través de Jesucristo. No es algo que podamos ganar con obras o méritos propios, sino un acto de amor divino (Efesios 2:8-9). La gracia nos justifica, nos santifica y nos da fuerza para vivir una vida que honre a Dios.',
      icon: <FaHandHoldingHeart />,
      verse: 'Efesios 2:8-9',
      color: '#9b59b6'
    },
    {
      id: 'collapseTwo',
      title: '¿Qué significa el Amor Ágape?',
      content: 'El amor ágape es el amor incondicional y sacrificial que Dios tiene por la humanidad. Es el tipo de amor más elevado, que busca el bien del otro sin esperar nada a cambio. Este amor se manifestó plenamente en Jesucristo, quien dio su vida por nosotros (Juan 3:16). Como creyentes, estamos llamados a amar con este mismo amor ágape a Dios y al prójimo.',
      icon: <FaCross />,
      verse: '1 Corintios 13:4-8',
      color: '#e74c3c'
    },
    {
      id: 'collapseThree',
      title: '¿Qué es el Reino de Dios?',
      content: 'El Reino de Dios es el gobierno espiritual de Dios en los corazones de los creyentes y en la tierra. No es un reino terrenal con fronteras geográficas, sino la esfera donde la voluntad de Dios se cumple perfectamente (Mateo 6:10). Jesús anunció la llegada del Reino y demostró su poder a través de milagros, sanidades y enseñanzas. Vivimos como ciudadanos de este Reino mientras esperamos su consumación final.',
      icon: <FaChurch />,
      verse: 'Mateo 6:33',
      color: '#3498db'
    },
    {
      id: 'collapseFour',
      title: '¿Qué es la Fe según la Biblia?',
      content: 'La fe es la certeza de lo que se espera y la convicción de lo que no se ve (Hebreos 11:1). Es un don de Dios que nos permite creer en Él y confiar en Sus promesas. La fe genuina se manifiesta en obediencia y acciones (Santiago 2:17), y es el fundamento de nuestra relación con Dios. Sin fe es imposible agradar a Dios, porque es necesario que quien se acerca a Dios crea que Él existe.',
      icon: <FaBookBible />,
      verse: 'Hebreos 11:1-6',
      color: '#2ecc71'
    }
  ];

  return (
    <section className="explanations-section bg-dark" id="explicaciones">
      <div className="container py-3 shadow-lg">
        <div className="section-header text-center mb-0">
          <h2 className="section-title text-light">Explicaciones Bíblicas</h2>
          <p className="section-subtitle mt-2">Profundizando en las verdades de la Palabra de Dios</p>
        </div>

        <div className="accordion-container w-100">
          {explanations.map((item) => (
            <div className="explanation-card w-100" key={item.id}>
              <button
                className={`explanation-header ${activeAccordion === item.id ? 'active' : ''}`}
                onClick={() => toggleAccordion(item.id)}
                aria-expanded={activeAccordion === item.id}
                aria-controls={item.id}
                style={{ backgroundColor: item.color }}
              >
                <div className="header-content">
                  <span className="explanation-icon">{item.icon}</span>
                  <h3 className="explanation-title">{item.title}</h3>
                </div>
                <span className="explanation-arrow">
                  <i className={`bi bi-chevron-${activeAccordion === item.id ? 'up' : 'down'}`}></i>
                </span>
              </button>
              
              <div
                id={item.id}
                className={`explanation-content ${activeAccordion === item.id ? 'show' : ''}`}
              >
                <div className="content-body">
                  <p>{item.content}</p>
                  <div className="bible-verse">
                    <FaBookBible className="me-2" />
                    <strong className='me-1'>Referencia Bíblica: </strong> {item.verse}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

     
    </section>
  );
}

export default Explicaciones;