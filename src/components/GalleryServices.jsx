import React from 'react';
import '../styles/GalleryServices.css'; // Archivo CSS para los estilos
import empleado1 from '../assets/empleado1.jpg'
import empleado2 from '../assets/empleado2.jpg';
import gancho from'../assets/gancho.jpg';
import llantas from '../assets/llantas.jpg'
import elasticosfoto1 from '../assets/elasticosfoto1.jpg';
import elasticoYllantas from '../assets/elasticoYllantas.jpg'
import respuestos1 from '../assets/respuestos1.jpg';
import empleado from '../assets/empleado.jpg'
import goma from '../assets/goma.jpg'


const GalleryServices = () => {
  return (
    <div className="gallery-container">
      <h1 className="gallery-title">Servicios</h1>
      <h2 className="gallery-subtitle">Atención y Asesoramiento</h2>
      <div className="gallery">
        <img src={empleado} alt="Alineados" />
        <img src={empleado1} alt="Amortiguadores y frenos" />
        <img src={elasticoYllantas} alt="Balanceo y reparación de automotores" />
        <img src={goma} alt="Colocación de tercer eje" />
        <img src={gancho} alt="Enderezado de chasis" />
        <img src={elasticosfoto1} alt="Fabricación de elásticos" />
        <img src={empleado2} alt="Reparación de tren delantero" />
        <img src={respuestos1} alt="Reparación y venta de elásticos" />
        <img src={llantas} alt="Venta de repuestos" />
      </div>
    </div>
  );
};

export default GalleryServices;
