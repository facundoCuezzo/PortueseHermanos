import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/AlineadoBalanceo.css'; // Reutilización del CSS existente
import elasticosfoto1 from '../assets/elasticosfoto1.jpg';

const SuspensionNeumaticos = () => {
  return (
    <div className="container container-custom mt-4">
      <h1 className="titulo-principal">Suspensión y Neumáticos</h1>
      
      <p className="lead text-center">
        En <strong>Elásticos Portuese Hermanos</strong>, nos especializamos en la <strong>reparación y venta de sistemas de suspensión y neumáticos</strong>. 
        Garantizamos el máximo rendimiento de estos componentes esenciales para la seguridad y confort en la conducción.
      </p>
      
      <h2 className="titulo-seccion">Servicios Ofrecidos</h2>
      <div className="row align-items-center">
        <div className="col-md-6">
          <ul>
            <li><strong>Reparación de Suspensión</strong>
              <ul>
                <li><strong>Diagnóstico y Evaluación</strong>: Inspección detallada del sistema de suspensión.</li>
                <li><strong>Reemplazo de Componentes</strong>: Sustitución de piezas desgastadas como amortiguadores, resortes y bujes.</li>
                <li><strong>Ajuste y Alineación</strong>: Configuración precisa para una conducción suave y estable.</li>
              </ul>
            </li>
            <li><strong>Venta de Neumáticos</strong>
              <ul>
                <li><strong>Neumáticos Nuevos</strong>: Amplia gama de productos de marcas reconocidas.</li>
                <li><strong>Asesoramiento Personalizado</strong>: Recomendaciones según las necesidades específicas del cliente.</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="col-md-6 text-center">
          <img src={elasticosfoto1} alt="Suspensión y Neumáticos" className="alineado-img" />
        </div>
      </div>
      
      <h2 className="titulo-seccion">Tipos de Suspensión</h2>
      <ul>
        <li><strong>Suspensión Independiente</strong>: Ofrece mejor maniobrabilidad y confort, ya que cada rueda tiene su propio sistema de suspensión.</li>
        <li><strong>Suspensión de Eje Rígido</strong>: Ideal para vehículos pesados, con alta durabilidad y capacidad de carga.</li>
      </ul>
      
      <h2 className="titulo-seccion">Fallas Comunes y Soluciones</h2>
      <ul>
        <li><strong>Desgaste de Amortiguadores</strong>: Reemplazo de amortiguadores desgastados para mejorar la absorción de impactos.</li>
        <li><strong>Rotura de Resortes</strong>: Reparación o sustitución de resortes para garantizar estabilidad y equilibrio.</li>
        <li><strong>Desgaste Irregular de Neumáticos</strong>: Ajuste de alineación y balanceo para prolongar la vida útil de los neumáticos.</li>
      </ul>
    </div>
  );
};

export default SuspensionNeumaticos;
