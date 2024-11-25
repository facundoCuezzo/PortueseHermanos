
import React from 'react';
import '../styles/Foto.css'; // Archivo CSS para los estilos
import imagen40 from '../assets/elasticosP.png';

const Foto = () => {
  return (
    <div className="foto">
      <img src={imagen40} alt="Imagen descriptiva" />
      <div className="contenido">
        <h2>Excelencia en el Transporte</h2>
        <p>Somos una empresa familiar que paso de generación en generación, dedicada a proporcionar calidad y servicio excepcional en el sector del transporte.</p>
        <button>Contacto</button>
      </div>
    </div>
  );
};

export default Foto;

