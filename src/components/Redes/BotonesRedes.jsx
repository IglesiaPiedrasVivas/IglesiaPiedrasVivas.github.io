import React, { useState } from 'react';
import { FaFacebookF, FaInstagram, FaYoutube, FaLink, FaTimes } from 'react-icons/fa';
import './botonesRedes.css'

function BotonesRedes() {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/share/1HGiMfkfdb/?mibextid=qi2Omg',
      icon: <FaFacebookF />,
      color: '#1877f2',
      hoverColor: '#166fe5'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/iglesia.piedrasvivas?igsh=NjV4OGhkYjlteG5n',
      icon: <FaInstagram />,
      color: '#e4405f',
      hoverColor: '#d8335a'
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com/@ccpv600?si=JZLxg-sJgSS6RNE2',
      icon: <FaYoutube />,
      color: '#ff0000',
      hoverColor: '#e60000'
    }
  ];

  return (
    <div className={`social-buttons-container ${isExpanded ? 'expanded' : ''}`}>
      {/* Botón flotante principal */}
      <button 
        className="social-toggle-button"
        onClick={toggleExpand}
        aria-label={isExpanded ? 'Ocultar redes sociales' : 'Mostrar redes sociales'}
      >
        {isExpanded ? <FaTimes /> : <FaLink />}
      </button>

      {/* Contenedor de botones de redes */}
      <div className={`social-buttons ${isExpanded ? 'visible' : ''}`}>
        {socialLinks.map((social, index) => (
          <a
            key={social.name}
            href={social.url}
            className="social-button"
            target="_blank"
            rel="noopener noreferrer"
            style={{ 
              backgroundColor: social.color,
              animationDelay: isExpanded ? `${index * 0.1}s` : '0s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = social.hoverColor}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = social.color}
          >
            <span className="social-icon">{social.icon}</span>
            {isExpanded && <span className="social-text">{social.name}</span>}
          </a>
        ))}
      </div>

      
    </div>
  );
}

export default BotonesRedes;