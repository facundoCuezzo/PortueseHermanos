import React from 'react';
import '../styles/AlineadoBalanceo.css'; // Asegúrate de crear este archivo CSS para los estilos personalizados
import logoAlineado from '../assets/Balanceo-reparación-automotores..jpeg';

const AlineadoBalanceo = () => {
  return (
    <div className="descripcion-container">
      <h1 className="titulo-principal">Alineado y Balanceo</h1>
      <p>En <strong>Elásticos Portuese Hermanos</strong>, nos especializamos en <strong>alineado y balanceo</strong> para autos y camiones. Estos servicios son esenciales para mantener la seguridad y el rendimiento óptimo de tu vehículo, asegurando una conducción suave y prolongando la vida útil de tus neumáticos.</p>
      
      <div className="servicios-section">
        <div className="servicios-text">
          <h2 className="titulo-seccion">Servicios Ofrecidos:</h2>
          <ul>
            <li><strong>Alineado de Ruedas</strong>
              <ul>
                <li><strong>Diagnóstico y Evaluación</strong>: Realizamos una inspección detallada de la alineación de las ruedas utilizando equipos avanzados para detectar cualquier desajuste.</li>
                <li><strong>Corrección de Alineación</strong>: Ajustamos la alineación de las ruedas para asegurar que estén perfectamente paralelas y que el volante esté centrado, mejorando la maniobrabilidad y reduciendo el desgaste de los neumáticos.</li>
              </ul>
            </li>
            <li><strong>Balanceo de Ruedas</strong>
              <ul>
                <li><strong>Diagnóstico de Balanceo</strong>: Utilizamos máquinas de balanceo de última generación para identificar desequilibrios en las ruedas.</li>
                <li><strong>Corrección de Desequilibrios</strong>: Añadimos pesos específicos a las llantas para equilibrar las ruedas, eliminando vibraciones y mejorando la estabilidad del vehículo.</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="servicios-image">
          <img src={logoAlineado} alt="Nuestros Servicios" />
        </div>
      </div>

      <h2 className="titulo-seccion">Beneficios del Alineado y Balanceo</h2>
      <ul>
        <li><strong>Mejor Rendimiento del Vehículo</strong>: Un correcto alineado y balanceo asegura que tu vehículo responda adecuadamente a las maniobras del volante, proporcionando una conducción más segura y confortable.</li>
        <li><strong>Prolongación de la Vida Útil de los Neumáticos</strong>: Al reducir el desgaste irregular de los neumáticos, estos servicios ayudan a que duren más tiempo, ahorrándote dinero en reemplazos frecuentes.</li>
        <li><strong>Ahorro de Combustible</strong>: Un vehículo bien alineado y balanceado consume menos combustible, ya que las ruedas ruedan con menor resistencia.</li>
      </ul>

      <h2 className="titulo-seccion">Fallas Comunes y Soluciones</h2>
      <ul>
        <li><strong>Desgaste Irregular de Neumáticos</strong>: La alineación incorrecta puede causar desgaste irregular. Ajustamos la alineación para prevenir este problema.</li>
        <li><strong>Vibraciones en el Volante</strong>: El balanceo incorrecto de las ruedas puede causar vibraciones. Corregimos el balanceo para una conducción más suave.</li>
        <li><strong>Tirones del Vehículo</strong>: Si el vehículo tira hacia un lado, puede ser indicativo de problemas de alineación. Realizamos ajustes para asegurar que el vehículo se mantenga en línea recta.</li>
      </ul>
    </div>
  );
}

export default AlineadoBalanceo;
