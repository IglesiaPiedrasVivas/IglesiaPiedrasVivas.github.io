import React from 'react';
import { useState, useEffect } from 'react';
import './header.css'
function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <div className={`header-container ${scrolled ? 'scrolled' : ''}`}>
            <header className="container-fluid px-4 container">
                <div className="d-flex justify-content-between align-items-center py-2">
                    <a href="/" className="logo-container d-flex align-items-center text-decoration-none">
                        <img src="/img/ccpv.png" alt="logo_ccpv" className="logo-img" />
                        <span className="logo-text ms-2">Piedras Vivas</span>
                    </a>

                    {/* Desktop Navigation */}
                    <nav className="desktop-nav d-none d-lg-block">
                        <ul className="nav">
                            <li className="nav-item">
                                <a href="#hero" className="nav-link">
                                    <i className="bi bi-house-heart-fill me-2"></i>
                                    Inicio
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#ubicacion" className="nav-link">
                                    <i className="bi bi-alarm-fill me-2"></i>
                                    Horarios
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#predicas" className="nav-link">
                                    <i className="bi bi-mic-fill me-2"></i>
                                    Predicas
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#reflexiones" className="nav-link">
                                    <i className="bi bi-bookmark-heart me-2"></i>
                                    Reflexión
                                </a>
                            </li>
                        </ul>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button 
                        className="mobile-menu-button d-lg-none" 
                        onClick={toggleMobileMenu}
                        aria-label="Toggle navigation"
                    >
                        <i className={`bi ${mobileMenuOpen ? 'bi-x' : 'bi-list'}`}></i>
                    </button>
                </div>

                {/* Mobile Navigation */}
                <div className={`mobile-nav ${mobileMenuOpen ? 'open' : ''} d-lg-none`}>
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <a href="/" className="nav-link" onClick={toggleMobileMenu}>
                                <i className="bi bi-house-heart-fill me-2"></i>
                                Inicio
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#contenedor_anuncios" className="nav-link" onClick={toggleMobileMenu}>
                                <i className="bi bi-alarm-fill me-2"></i>
                                Horarios
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#predicas" className="nav-link" onClick={toggleMobileMenu}>
                                <i className="bi bi-mic-fill me-2"></i>
                                Predicas
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#reflexiones" className="nav-link" onClick={toggleMobileMenu}>
                                <i className="bi bi-bookmark-heart me-2"></i>
                                Reflexión
                            </a>
                        </li>
                    </ul>
                </div>
            </header>
        </div>
    )
}

export default Header;

