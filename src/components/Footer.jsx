import React from 'react';

function Footer() {
    return (
        // Usamos un color oscuro similar al de tu diseño. Puedes ajustar el hex en el style si bg-dark no es exacto.
        <footer className="bg-dark text-white pt-5 pb-4" style={{ backgroundColor: '#1b1e22' }}>
            <div className="container">
                <div className="row">
                    
                    {/* Columna 1: Logo, Descripción y Redes Sociales */}
                    <div className="col-lg-4 col-md-6 mb-4 pe-lg-5">
                        <div className="d-flex align-items-center mb-3">
                            {/* Círculo simulando el logo */}
                             

                        <img src="/img/ccpv.png" alt="logo_ccpv" className="logo-img" />


                            <h5 className="mb-0 ms-2 lh-sm fw-normal">Centro Cristiano<br/>Piedras Vivas</h5>
                        </div>
                        <p className="text-secondary small mt-3">
                            Una comunidad de fe donde cada vida es transformada por el amor de Cristo.
                        </p>
                        
                        {/* Redes Sociales con colores personalizados */}
                        <div className="d-flex gap-3 mt-4">
                            <a href="#" className="d-flex justify-content-center align-items-center rounded-circle text-white text-decoration-none" style={{ width: '35px', height: '35px', backgroundColor: '#ff0000' }}>
                                <i className="bi bi-youtube"></i>
                            </a>
                            <a href="#" className="d-flex justify-content-center align-items-center rounded-circle text-white text-decoration-none" style={{ width: '35px', height: '35px', background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)' }}>
                                <i className="bi bi-instagram"></i>
                            </a>
                            <a href="#" className="d-flex justify-content-center align-items-center rounded-circle text-white text-decoration-none" style={{ width: '35px', height: '35px', backgroundColor: '#3b5998' }}>
                                <i className="bi bi-facebook"></i>
                            </a>
                        </div>
                    </div>

                    {/* Columna 2: Enlaces Rápidos */}
                    <div className="col-lg-4 col-md-6 mb-4">
                        <h5 className="mb-1 fw-bold">Enlaces Rápidos</h5>
                        {/* Línea roja decorativa */}
                        <div style={{ width: '30px', height: '2px', backgroundColor: '#dc3545', marginBottom: '1.5rem' }}></div>
                        
                        <ul className="list-unstyled d-flex flex-column gap-2">
                            <li><a href="#" className="text-secondary text-decoration-none">Inicio</a></li>
                            <li><a href="#" className="text-secondary text-decoration-none">Ubicacion</a></li>
                            <li><a href="#" className="text-secondary text-decoration-none">Predicas</a></li>
                            <li><a href="#" className="text-secondary text-decoration-none">Reflexiones</a></li>
                            <li><a href="#" className="text-secondary text-decoration-none">Explicaciones</a></li>
                        </ul>
                    </div>

                    {/* Columna 3: Contacto */}
                    <div className="col-lg-4 col-md-12 mb-4">
                        <h5 className="mb-1 fw-bold">Contacto</h5>
                        {/* Línea roja decorativa */}
                        <div style={{ width: '30px', height: '2px', backgroundColor: '#dc3545', marginBottom: '1.5rem' }}></div>
                        
                        <ul className="list-unstyled d-flex flex-column gap-3 text-secondary">
                            <li className="d-flex align-items-center gap-3">
                                <i className="bi bi-geo-alt-fill text-danger fs-6"></i>
                                <span>Dirección de la iglesia, Ciudad</span>
                            </li>
                            <li className="d-flex align-items-center gap-3">
                                <i className="bi bi-telephone-fill text-danger fs-6"></i>
                                <span>sin telefono directo actual</span>
                            </li>
                            <li className="d-flex align-items-center gap-3">
                                <i className="bi bi-envelope-fill text-danger fs-6"></i>
                                <span>centropiedrasvivas@gmail.com</span>
                            </li>
                            <li className="d-flex align-items-center gap-3">
                                <i className="bi bi-clock-fill text-danger fs-6"></i>
                                <span>Domingos 18:00hs - Culto Principal</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Separador y Copyright */}
                <div className="border-top border-secondary pt-4 mt-2">
                    <p className="text-secondary small mb-0">
                        &copy; 2026 Centro Cristiano Piedras Vivas. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;