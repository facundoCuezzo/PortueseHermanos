
import React from 'react';
import '../styles/Foto.css'; 
import galponFrente from '../assets/galponFrente.jpg';

const Foto = () => {
  return (
    <div className="foto">
      <img src={galponFrente} alt="Imagen descriptiva"className="imagen-zoom" />
      <div className="contenido">
        <h2>Excelencia en el Transporte</h2>
        <p>Somos una empresa familiar que paso de generación en generación, dedicada a proporcionar calidad y servicio excepcional en el sector del transporte.</p>
        <a href="https://wa.me/3816977245?text=Hola%20Portuese%20Hermanos,%20quiero%20información%20acerca%20de:" target="_blank" rel="noopener noreferrer">
        <button>Contacto</button>
        </a>
      </div>
    </div>
  );
};

export default Foto;

