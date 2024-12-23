import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/AlineadoBalanceo.css'; // Usando el mismo CSS
import logoRepuestos from '../assets/respuestos2.jpg'; // Imagen ilustrativa

const VentaRepuestos = () => {
  return (
    <div className="container container-custom mt-4">
      <h1 className="titulo-principal">Venta de Repuestos</h1>
      
      <div className="position-relative">
        <img 
          src={logoRepuestos} 
          alt="Repuestos" 
          className="float-end ms-3 mb-3 img-fluid rounded" 
          style={{ maxWidth: '300px' }} 
        />
        <p className="lead">
          En <strong>Elásticos Portuese Hermanos</strong>, ofrecemos una <strong>amplia gama de repuestos</strong> de alta calidad para autos y camiones. Nuestro objetivo es proporcionar a nuestros clientes componentes confiables y duraderos que aseguren el óptimo funcionamiento y la seguridad de sus vehículos.
        </p>
      </div>
      
      <h2 className="titulo-seccion">Repuestos Disponibles</h2>
      <ul>
        <li><strong>Amortiguadores</strong>: Ofrecemos amortiguadores de diversas marcas y modelos, adecuados para diferentes tipos de vehículos y necesidades.</li>
        <li><strong>Elásticos y Resortes</strong>: Contamos con una variedad de elásticos y resortes diseñados para proporcionar la máxima durabilidad y resistencia en cualquier condición.</li>
        <li><strong>Componentes de Suspensión</strong>: Disponemos de una amplia gama de piezas para sistemas de suspensión, incluyendo bujes, ballestas, y barras estabilizadoras.</li>
        <li><strong>Frenos</strong>: Ofrecemos discos, pastillas, tambores, y zapatas de freno, garantizando un rendimiento seguro y eficiente.</li>
        <li><strong>Rótulas y Terminales de Dirección</strong>: Proveemos rótulas y terminales de dirección de alta calidad para mantener la estabilidad y el control del vehículo.</li>
        <li><strong>Neumáticos</strong>: Vendemos neumáticos de las mejores marcas, asegurando la mejor tracción y durabilidad.</li>
        <li><strong>Filtros y Aceites</strong>: Disponemos de filtros de aire, aceite y combustible, así como aceites lubricantes de alta calidad.</li>
        <li><strong>Luces y Componentes Eléctricos</strong>: Ofrecemos una variedad de luces y componentes eléctricos para asegurar la visibilidad y la seguridad del vehículo.</li>
      </ul>
      
      <h2 className="titulo-seccion">Beneficios de Comprar con Nosotros</h2>
      <ul>
        <li><strong>Calidad Garantizada</strong>: Solo ofrecemos repuestos de alta calidad que cumplen con los estándares más exigentes.</li>
        <li><strong>Asesoramiento Personalizado</strong>: Nuestros expertos están disponibles para ayudarte a seleccionar los repuestos que mejor se adapten a las necesidades de tu vehículo.</li>
        <li><strong>Amplia Variedad</strong>: Contamos con un extenso inventario de repuestos para satisfacer todas tus necesidades.</li>
        <li><strong>Precios Competitivos</strong>: Ofrecemos precios justos y competitivos para asegurar que obtengas el mejor valor por tu dinero.</li>
      </ul>
    </div>
  );
};

export default VentaRepuestos;
