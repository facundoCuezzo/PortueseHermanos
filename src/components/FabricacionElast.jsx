import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/AlineadoBalanceo.css'; // Puedes reutilizar el mismo CSS
import imagenElasticos from '../assets/elasticosfoto2.jpg';

const FabricacionElasticos = () => {
  return (
    <div className="container container-custom mt-4">
      <h1 className="titulo-principal">Fabricación de Hoja Maestra de Elásticos para Camiones</h1>
      
      <div className="row align-items-center">
        <div className="col-md-8">
          <p className="lead">
            En <strong>Elásticos Portuese Hermanos</strong>, nos especializamos en la <strong>fabricación de hojas maestras de elásticos para camiones</strong>, esenciales para absorber las irregularidades del terreno y proporcionar una conducción suave y confortable. 
            Con años de experiencia en la industria, utilizamos tecnología avanzada y materiales de alta calidad para fabricar productos duraderos y confiables.
          </p>

          <p>
            Elásticos Portuese Hermanos cuenta con una vasta experiencia en la fabricación de elásticos para camiones, ofreciendo soluciones innovadoras y personalizadas para una amplia gama de aplicaciones en transporte pesado y liviano. 
            Nuestro compromiso con la calidad y la excelencia nos permite suministrar productos fiables que cumplen con los más altos estándares de la industria.
          </p>
        </div>
        <div className="col-md-4 text-center">
          <img src={imagenElasticos} alt="Elásticos para Camiones" className="alineado-img" />
        </div>
      </div>

      <h2 className="titulo-seccion">Proceso de Fabricación</h2>
      <ul>
        <li><strong>Selección de Materiales</strong>: 
          Utilizamos hojas de acero de alta calidad, tratadas específicamente para garantizar durabilidad y resistencia.
        </li>
        <li><strong>Diseño y Preparación</strong>: 
          Nuestras hojas maestras de elásticos están diseñadas para adaptarse a las necesidades específicas de cada vehículo, asegurando un rendimiento óptimo.
        </li>
        <li><strong>Producción y Control de Calidad</strong>: 
          Los elásticos se producen mediante procesos precisos de curvado y tratamiento térmico, seguidos de rigurosas pruebas de calidad para asegurar la consistencia y la fiabilidad de cada lote.
        </li>
      </ul>
      
      <h2 className="titulo-seccion">Nuestro Compromiso</h2>
      <p>
        En <strong>Elásticos Portuese Hermanos</strong>, nos enorgullece ofrecer productos de la más alta calidad, respaldados por nuestra amplia experiencia y dedicación al servicio al cliente. 
        Nos esforzamos por superar las expectativas de nuestros clientes en cada proyecto, asegurando que cada hoja maestra de elásticos que fabricamos sea un reflejo de nuestra pasión por la excelencia.
      </p>
    </div>
  );
};

export default FabricacionElasticos;
