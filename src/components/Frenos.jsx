import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/AlineadoBalanceo.css'; // Reutilizando el mismo CSS
import llantas from '../assets/llantas.jpg'; // Usando la misma imagen para ilustrar

const Frenos = () => {
  return (
    <div className="container container-custom mt-4">
      <h1 className="titulo-principal">Frenos</h1>
      
      <div className="position-relative">
        <img 
          src={llantas} 
          alt="Frenos" 
          className="float-end ms-3 mb-3 img-fluid rounded" 
          style={{ maxWidth: '300px' }} 
        />
        <p className="lead">
          En <strong>Elásticos Portuese Hermanos</strong>, nos especializamos en la <strong>reparación de frenos</strong> para autos y camiones. 
          Los frenos son componentes fundamentales para la seguridad de tu vehículo, y nuestro equipo de expertos está dedicado a asegurar que funcionen al máximo de su capacidad.
        </p>
      </div>
      
      <h2 className="titulo-seccion">Servicios Ofrecidos</h2>
      <ul>
        <li><strong>Reparación de Frenos</strong>:
          <ul>
            <li><strong>Diagnóstico y Evaluación</strong>: Realizamos una inspección detallada del sistema de frenos para identificar problemas y determinar las reparaciones necesarias.</li>
            <li><strong>Reemplazo de Componentes</strong>: Sustituimos discos, pastillas, tambores y otros componentes desgastados o dañados con piezas de alta calidad.</li>
            <li><strong>Ajuste y Alineación</strong>: Ajustamos y alineamos los frenos para asegurar una frenada efectiva y segura.</li>
          </ul>
        </li>
      </ul>

      <h2 className="titulo-seccion">Tipos de Frenos</h2>
      <ul>
        <li><strong>Frenos de Disco</strong>: Utilizan discos de freno y pastillas para proporcionar una frenada eficiente y consistente.</li>
        <li><strong>Frenos de Tambor</strong>: Emplean tambores y zapatas de freno, ofreciendo durabilidad y fiabilidad para diversas aplicaciones.</li>
      </ul>
      
      <h2 className="titulo-seccion">Fallas Comunes y Soluciones</h2>
      <ul>
        <li><strong>Desgaste de Pastillas y Discos</strong>: Sustituimos pastillas y discos desgastados para mantener la eficacia del frenado y evitar daños adicionales.</li>
        <li><strong>Fugas en el Sistema de Frenos</strong>: Reparamos o reemplazamos componentes dañados para asegurar que no haya pérdida de líquido de freno y que el sistema funcione correctamente.</li>
        <li><strong>Vibraciones al Frenar</strong>: Ajustamos y alineamos los frenos para eliminar vibraciones y asegurar una frenada suave y controlada.</li>
      </ul>
    </div>
  );
};

export default Frenos;