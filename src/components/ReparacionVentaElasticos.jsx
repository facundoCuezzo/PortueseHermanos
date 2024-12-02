import React from 'react';
import '../styles/ReparacionVentaElasticos.css'; // Asegúrate de crear este archivo CSS para los estilos personalizados
import logoElasticos from '../assets/Reparación-venta-elásticos..jpg';




const ReparacionVentaElasticos = () => {
  return (

    <div className="descripcion-container">
      <h1 className="titulo-principal">Reparación y Venta de Elásticos</h1>
      <p>En <strong>Elásticos Portuese Hermanos</strong>, nos especializamos en la <strong>reparación y venta de elásticos</strong> para autos y camiones. Nuestro equipo de expertos está capacitado para tratar todo tipo de elásticos, asegurando que tu vehículo opere con la máxima eficiencia y seguridad.</p>
      
      <div className="servicios-section">
        <div className="servicios-text">
          <h2 className="titulo-seccion">Servicios Ofrecidos:</h2>
          <ul>
            <li><strong>Reparación de Elásticos</strong>
              <ul>
                <li><strong>Diagnóstico y Evaluación</strong>: Realizamos una inspección detallada para identificar problemas y determinar las reparaciones necesarias.</li>
                <li><strong>Reemplazo de Hojas</strong>: Sustituimos hojas dañadas o desgastadas, utilizando materiales de alta calidad para garantizar la durabilidad.</li>
              </ul>
            </li>
            <li><strong>Venta de Elásticos</strong>
              <ul>
                <li><strong>Elásticos Nuevos</strong>: Ofrecemos una amplia gama de elásticos nuevos para autos y camiones, fabricados con los mejores materiales del mercado.</li>
                <li><strong>Elásticos Personalizados</strong>: Fabricamos elásticos a medida según las especificaciones del cliente para satisfacer necesidades particulares.</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="servicios-image">
          <img src={logoElasticos} alt="Nuestros Servicios" />
        </div>
      </div>
      
      <div className="full-width-section">
        <h2 className="titulo-seccion mt-4">Tipos de Elásticos:</h2>
        <ul>
          <li><strong>Elásticos Parabólicos</strong>: Conformados por una serie de hojas de acero curvadas en forma de parábola, ideales para absorción de impactos.</li>
          <li><strong>Elásticos Convencionales</strong>: Compuestos por hojas de acero curvadas en forma de arco, proporcionan rigidez y durabilidad.</li>
        </ul>
        <h2 className="titulo-seccion mt-4">Fallas Comunes y Soluciones:</h2>
        <ul>
          <li><strong>Corrosión</strong>: Tratamos y prevenimos la corrosión mediante el uso de materiales resistentes y tratamientos específicos.</li>
          <li><strong>Rotura de Hojas</strong>: Reparamos y reemplazamos hojas rotas para mantener la funcionalidad del elástico.</li>
          <li><strong>Desgaste de Bujes</strong>: Sustituimos bujes desgastados para asegurar un rendimiento óptimo y evitar vibraciones indeseadas.</li>
        </ul>
      </div>
    </div>
  );
}


export default ReparacionVentaElasticos;
