import React from 'react';
import '../styles/SpecializeBody.css'; // Archivo CSS para los estilos
import muni from '../assets/muni.jpg'

const SpecializeBody = () => {
  return (
    <div className="specializeBody-contenedor">
      <div className="titulo">
        <h2>Taller <br /> de Modificación y Reparación <br /> Habilitado-Especializado</h2>
      </div>
      <div className="descripcion">
        <p>
          Nos especializamos en la reparación de vehículos pesados y livianos, así como <br />  en la venta de repuestos para camiones, acoplados y remolques. Habilitado por la Municipalidad de San Miguel de Tucumán.
        </p>
        <img src={muni} alt="Municipalidad de Tucumán" className="imagen-descripcion" />
      </div>
    </div>
  );
};

export default SpecializeBody;
