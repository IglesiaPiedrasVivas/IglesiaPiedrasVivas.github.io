import './style.css';
import React from 'react';
import Header from './components/Header/Header';
import BotonesRedes from './components/Redes/BotonesRedes';
import Hero from './components/Hero/Hero';
import Ubicacion from './components/Ubicacion/Ubicacion';
import Predicas from './components/Pedicas/Predicas';
import Galeria from './components/Galeria/Galeria';
import Reflexiones from './components/Reflexiones/Reflexiones';
import Explicaciones from './components/Explicaciones/Explicaciones';
import Footer from './components/Footer';
import CustomModal from './components/Modal/CustomModal';
import Carrucel from './components/Carrucel/Carrucel';




function App() {
  

  return (
    <div className="App">
      <Header />
      <Hero />
      <BotonesRedes />
      <CustomModal />
      <div class="espacio"></div>


      <Ubicacion />

      <main class="container-fluid p-0">
        <Carrucel/>
        <Predicas />
        <Galeria />
        <Reflexiones />
        <Explicaciones />

        {/*
        
        
        <Footer />
        
        
        */}

      </main>




    </div>
  );
}

export default App;