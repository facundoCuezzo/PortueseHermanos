import React from 'react';
import '../styles/GalleryServices.css'; // Archivo CSS para los estilos
import service1 from '../assets/Alineados.jpeg'; 
import service2 from '../assets/amortiguadores-frenos.jpeg';
import service3 from '../assets/Balanceo-reparación-automotores..jpeg';
import service4 from '../assets/Colocación-tercer-eje.jpeg';
import service5 from '../assets/Enderezado-chasis.jpeg';
import service6 from '../assets/fabricacionElasticos.jpg';
import service7 from '../assets/Reparación-tren-delantero.jpeg';
import service8 from '../assets/Reparación-venta-elásticos..jpg';
import service9 from '../assets/venta-repuestos.jpeg';

const GalleryServices = () => {
  return (
    <div className="gallery-container">
      <h1 className="gallery-title">Servicios</h1>
      <h2 className="gallery-subtitle">Atención y Asesoramiento</h2>
      <div className="gallery">
        <img src={service1} alt="Alineados" />
        <img src={service2} alt="Amortiguadores y frenos" />
        <img src={service3} alt="Balanceo y reparación de automotores" />
        <img src={service4} alt="Colocación de tercer eje" />
        <img src={service5} alt="Enderezado de chasis" />
        <img src={service6} alt="Fabricación de elásticos" />
        <img src={service7} alt="Reparación de tren delantero" />
        <img src={service8} alt="Reparación y venta de elásticos" />
        <img src={service9} alt="Venta de repuestos" />
      </div>
    </div>
  );
};

export default GalleryServices;
