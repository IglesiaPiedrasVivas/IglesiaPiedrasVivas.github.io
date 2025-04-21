import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaBookOpen, FaCalendarAlt, FaShare, FaHeart } from 'react-icons/fa';
import './reflexiones.css'


function Reflexiones() {
  const [reflexiones, setReflexiones] = useState([
    {
      id: 1,
      title: "La Fe en Tiempos Difíciles",
      image: "https://images.unsplash.com/photo-1510422852126-9017d4b93f99?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmVmbGV4aW9uZXN8ZW58MHx8MHx8fDA%3D",
      excerpt: "Cómo mantener nuestra fe firme cuando enfrentamos adversidades y pruebas en la vida...",
      date: "15 Marzo 2023",
      verse: "Hebreos 11:1",
      isFavorite: false
    },
    {
      id: 2,
      title: "El Poder del Perdón",
      image: "https://wallpapers.com/images/hd/reflection-pictures-n9784sj1jjkaen2c.jpg",
      excerpt: "Explorando la liberación que encontramos cuando elegimos perdonar como Cristo nos perdonó...",
      date: "22 Marzo 2023",
      verse: "Colosenses 3:13",
      isFavorite: false
    },
    {
      id: 3,
      title: "Caminando en Amor",
      image: "https://wallpapers.com/images/hd/pretty-nature-pictures-2736-x-1824-ycttuefb2mgkoxxr.jpg",
      excerpt: "Reflexiones sobre cómo demostrar el amor de Cristo en nuestras relaciones diarias...",
      date: "29 Marzo 2023",
      verse: "1 Corintios 13:4-7",
      isFavorite: false
    },
    {
      id: 4,
      title: "La Oración Transformadora",
      image: "https://wallpapers.com/images/hd/sunset-reflection-3744-x-3744-wallpaper-sejq8jdgnuiq2of4.jpg",
      excerpt: "Cómo desarrollar una vida de oración que cambia nuestras circunstancias y nuestro corazón...",
      date: "5 Abril 2023",
      verse: "Filipenses 4:6-7",
      isFavorite: false
    },
    {
      id: 5,
      title: "Viviendo con Propósito",
      image: "https://million-wallpapers.ru/wallpapers/0/94/474342388980790/paisaje-del-lago-al-atardecer-con-el-reflejo-de-los-rboles.jpg",
      excerpt: "Descubriendo el plan único que Dios tiene para cada uno de nosotros...",
      date: "12 Abril 2023",
      verse: "Jeremías 29:11",
      isFavorite: false
    }
  ]);

  // Cargar favoritos desde localStorage al iniciar
  useEffect(() => {
    const savedFavorites = localStorage.getItem('reflexionesFavoritas');
    if (savedFavorites) {
      const favoritos = JSON.parse(savedFavorites);
      setReflexiones(prevReflexiones => 
        prevReflexiones.map(reflexion => ({
          ...reflexion,
          isFavorite: favoritos.includes(reflexion.id)
        }))
      );
    }
  }, []);

  const toggleFavorite = (id) => {
    setReflexiones(prevReflexiones => {
      const updatedReflexiones = prevReflexiones.map(reflexion => 
        reflexion.id === id 
          ? { ...reflexion, isFavorite: !reflexion.isFavorite } 
          : reflexion
      );
      
      // Guardar en localStorage
      const favoritos = updatedReflexiones
        .filter(r => r.isFavorite)
        .map(r => r.id);
      localStorage.setItem('reflexionesFavoritas', JSON.stringify(favoritos));
      
      return updatedReflexiones;
    });
  };

  const shareReflexion = (reflexion) => {
    if (navigator.share) {
      navigator.share({
        title: reflexion.title,
        text: reflexion.excerpt,
        url: window.location.href,
      })
      .catch(error => console.log('Error al compartir:', error));
    } else {
      // Fallback para navegadores que no soportan Web Share API
      const shareUrl = `whatsapp://send?text=${encodeURIComponent(
        `${reflexion.title}\n${reflexion.excerpt}\n\nLeer más en: ${window.location.href}`
      )}`;
      window.open(shareUrl, '_blank');
    }
  };

  return (
    <section className="reflexiones-section " id="reflexiones">
      <div className="container py-3 px-0 shadow-lg">
        <div className="section-header text-center">
          <h2 className="section-title mb3">Reflexiones Diarias</h2>
          <p className="section-subtitle mb-0 mt-2">Alimento espiritual para tu caminar con Cristo</p>
        </div>

        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          breakpoints={{
            576: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            }
          }}
          className="reflexiones-swiper"
        >
          {reflexiones.map((reflexion) => (
            <SwiperSlide key={reflexion.id}>
              <div className="reflexion-card">
                <div className="reflexion-image-container">
                  <img 
                    src={reflexion.image} 
                    alt={reflexion.title} 
                    className="reflexion-image"
                    loading="lazy"
                  />
                  <button 
                    className={`favorite-btn ${reflexion.isFavorite ? 'active' : ''}`}
                    onClick={() => toggleFavorite(reflexion.id)}
                    aria-label={reflexion.isFavorite ? 'Quitar de favoritos' : 'Añadir a favoritos'}
                  >
                    <FaHeart />
                  </button>
                </div>
                <div className="reflexion-content">
                  <div className="reflexion-meta">
                    <span className="reflexion-date">
                      <FaCalendarAlt className="me-2" />
                      {reflexion.date}
                    </span>
                    <span className="reflexion-verse">
                      <FaBookOpen className="me-2" />
                      {reflexion.verse}
                    </span>
                  </div>
                  <h3 className="reflexion-title">{reflexion.title}</h3>
                  <p className="reflexion-excerpt">{reflexion.excerpt}</p>
                  <div className="reflexion-actions">
                    <a href="#!" className="btn btn-reflexion">
                      Leer más
                    </a>
                    <button 
                      className="btn btn-share"
                      onClick={() => shareReflexion(reflexion)}
                    >
                      <FaShare className="me-2" />
                      Compartir
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>


    </section>
  );
}

export default Reflexiones;