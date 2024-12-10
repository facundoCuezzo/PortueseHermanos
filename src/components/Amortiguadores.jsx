import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/AlineadoBalanceo.css'; // Puedes reutilizar el mismo CSS
import logoAmortiguadores from '../assets/amortiguadores-frenos.jpeg';

const Amortiguadores = () => {
  return (
    <div className="container container-custom mt-4">
      <h1 className="titulo-principal">Amortiguadores</h1>
      
      <p className="lead text-center">
        En <strong>Elásticos Portuese Hermanos</strong>, nos especializamos en la <strong>reparación y venta de amortiguadores</strong> para autos y camiones. 
        Nuestro equipo asegura el máximo rendimiento de estos componentes esenciales para la seguridad y comodidad en la conducción.
      </p>
      
      <h2 className="titulo-seccion">Servicios Ofrecidos</h2>
      <div className="row align-items-center">
        <div className="col-md-6">
          <ul>
            <li><strong>Reparación de Amortiguadores</strong>
              <ul>
                <li><strong>Diagnóstico y Evaluación</strong>: Inspección detallada para detectar problemas.</li>
                <li><strong>Reemplazo de Componentes</strong>: Uso de piezas de alta calidad para garantizar durabilidad.</li>
                <li><strong>Reacondicionamiento</strong>: Ajustamos los amortiguadores para un funcionamiento óptimo.</li>
              </ul>
            </li>
            <li><strong>Venta de Amortiguadores</strong>
              <ul>
                <li><strong>Amortiguadores Nuevos</strong>: Amplia gama de productos de calidad.</li>
                <li><strong>Amortiguadores Personalizados</strong>: Diseños a medida según las necesidades del cliente.</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="col-md-6 text-center">
          <img src={logoAmortiguadores} alt="Amortiguadores" className="alineado-img" />
        </div>
      </div>
      
      <h2 className="titulo-seccion">Tipos de Amortiguadores</h2>
      <ul>
        <li><strong>Amortiguadores Hidráulicos</strong>: Absorben impactos con fluidos, proporcionando una conducción suave.</li>
        <li><strong>Amortiguadores de Gas</strong>: Combinan gas y fluido para un control y respuesta mejorados.</li>
      </ul>
      
      <h2 className="titulo-seccion">Fallas Comunes y Soluciones</h2>
      <ul>
        <li><strong>Fugas de Fluido</strong>: Reemplazo de sellos para evitar fugas y mantener el rendimiento.</li>
        <li><strong>Desgaste de Componentes</strong>: Sustitución de partes desgastadas para mantener la eficiencia.</li>
        <li><strong>Pérdida de Eficiencia</strong>: Reacondicionamiento de amortiguadores para recuperar su capacidad de absorción.</li>
      </ul>
    </div>
  );
};

export default Amortiguadores;
