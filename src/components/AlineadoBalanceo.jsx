import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/AlineadoBalanceo.css';
import empleado1 from '../assets/empleado1.jpg';

const AlineadoBalanceo = () => {
  return (
    <div className="container container-custom mt-4">
      <h1 className="titulo-principal">Alineado y Balanceo</h1>
      
      <p className="lead text-center">
        En <strong>Elásticos Portuese Hermanos</strong>, nos especializamos en <strong>alineado y balanceo</strong> para autos y camiones. 
        Estos servicios son esenciales para mantener la seguridad y el rendimiento óptimo de tu vehículo.
      </p>
      
      <h2 className="titulo-seccion">Servicios Ofrecidos</h2>
      <div className="row align-items-center">
        <div className="col-md-6">
          <ul>
            <li><strong>Alineado de Ruedas</strong>
              <ul>
                <li><strong>Diagnóstico y Evaluación</strong>: Realizamos inspecciones detalladas.</li>
                <li><strong>Corrección de Alineación</strong>: Ajustamos para maniobrabilidad óptima.</li>
              </ul>
            </li>
            <li><strong>Balanceo de Ruedas</strong>
              <ul>
                <li><strong>Diagnóstico</strong>: Máquinas avanzadas identifican desequilibrios.</li>
                <li><strong>Corrección</strong>: Pesos específicos eliminan vibraciones.</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="col-md-6 text-center">
          <img src={empleado1} alt="Nuestros Servicios" className="alineado-img" />
        </div>
      </div>
      
      <h2 className="titulo-seccion">Beneficios del Alineado y Balanceo</h2>
      <ul>
        <li><strong>Mejor Rendimiento:</strong> Maniobrabilidad y conducción segura.</li>
        <li><strong>Mayor Durabilidad:</strong> Prolonga la vida útil de los neumáticos.</li>
        <li><strong>Ahorro:</strong> Menor consumo de combustible.</li>
      </ul>
      
      <h2 className="titulo-seccion">Fallas Comunes y Soluciones</h2>
      <ul>
        <li><strong>Desgaste Irregular:</strong> Ajustamos para prevenir problemas.</li>
        <li><strong>Vibraciones:</strong> Eliminamos desequilibrios para suavizar la conducción.</li>
        <li><strong>Tirones:</strong> Corrigimos alineaciones defectuosas.</li>
      </ul>
    </div>
  );
};

export default AlineadoBalanceo;
