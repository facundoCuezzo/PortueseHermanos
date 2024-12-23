import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/AlineadoBalanceo.css'; // Usando el mismo CSS
import empleado3 from '../assets/empleado3.jpg'; // Imagen ilustrativa

const ReparacionTrenDelantero = () => {
  return (
    <div className="container container-custom mt-4">
      <h1 className="titulo-principal">Reparación de Tren Delantero</h1>

      <div className="position-relative">
        <img 
          src={empleado3} 
          alt="Tren Delantero" 
          className="float-end ms-3 mb-3 img-fluid rounded" 
          style={{ maxWidth: '400px' }} 
        />
        <p className="lead">
          En <strong>Elásticos Portuese Hermanos</strong>, nos especializamos en la <strong>reparación de tren delantero</strong> para autos y camiones. 
          El tren delantero es una parte crucial del sistema de suspensión y dirección del vehículo, y nuestro equipo de expertos está dedicado a garantizar 
          que funcione de manera óptima para una conducción segura y eficiente.
        </p>
      </div>

      <h2 className="titulo-seccion">Servicios Ofrecidos</h2>
      <ul>
        <li><strong>Diagnóstico y Evaluación</strong>: Realizamos una inspección detallada del tren delantero para identificar problemas como desgaste de piezas, daños en la suspensión y desalineaciones.</li>
        <li><strong>Reemplazo de Componentes</strong>: Sustituimos componentes desgastados o dañados, incluyendo rótulas, bujes, barras estabilizadoras, y otros elementos críticos del tren delantero, utilizando piezas de alta calidad para asegurar la durabilidad y el rendimiento.</li>
        <li><strong>Ajuste y Alineación</strong>: Ajustamos y alineamos el tren delantero para garantizar que el vehículo se mantenga en línea recta, mejorando la maniobrabilidad y reduciendo el desgaste de los neumáticos.</li>
      </ul>

      <h2 className="titulo-seccion">Componentes Clave del Tren Delantero</h2>
      <ul>
        <li><strong>Rótulas y Bujes</strong>: Conectan las ruedas al sistema de suspensión, permitiendo el movimiento y absorción de impactos.</li>
        <li><strong>Barras Estabilizadoras</strong>: Ayudan a mantener la estabilidad del vehículo durante las curvas y maniobras.</li>
        <li><strong>Amortiguadores y Resortes</strong>: Absorben las irregularidades del terreno para proporcionar una conducción suave y cómoda.</li>
      </ul>

      <h2 className="titulo-seccion">Fallas Comunes y Soluciones</h2>
      <ul>
        <li><strong>Desgaste de Rótulas y Bujes</strong>: Sustituimos rótulas y bujes desgastados para mantener la estabilidad y el control del vehículo.</li>
        <li><strong>Rotura de Amortiguadores y Resortes</strong>: Reparamos o reemplazamos amortiguadores y resortes dañados para asegurar una absorción de impactos eficiente.</li>
        <li><strong>Desalineación</strong>: Ajustamos la alineación del tren delantero para prevenir el desgaste irregular de los neumáticos y mejorar la maniobrabilidad.</li>
      </ul>
    </div>
  );
};

export default ReparacionTrenDelantero;
