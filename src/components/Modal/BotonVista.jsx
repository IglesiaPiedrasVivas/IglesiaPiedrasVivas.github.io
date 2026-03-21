import React, { useState } from 'react';
import { FaEye } from 'react-icons/fa';

function BotonVista({ onClick }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="vision-button-container">
      <button 
        className="vision-button"
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Ver visión 2026"
      >
        <FaEye className="vision-icon" />
        {isHovered && <span className="vision-tooltip">Ver Visión 2026</span>}
      </button>

    </div>
  );
}

export default BotonVista;