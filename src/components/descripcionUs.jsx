import React from 'react';
import '../styles/DescripcionUs.css'; // Archivo CSS para los estilos
import logoRojo from "../assets/rojo.png";


const DescripcionUs = () => {
  return (
    <div className="descripcion-container">
      <h1 className="titulo-principal"> Sobre Nosotros </h1>
      <p>Somos <strong>Elásticos Portuese Hnos Srl</strong>, una empresa que cuenta con sólida trayectoria de más de 80 años en la provincia de Tucumán, fundada por Adolfo Portuese. Nos especializamos en la fabricación y mecánica de frenos y elásticos, consolidándonos como líderes en el sector. Como distribuidor oficial de Asicha, brindamos una amplia gama de servicios que nos permiten satisfacer las diversas necesidades de nuestros clientes.</p>
      
      <div className="servicios-section">
        <div className="servicios-text">
          <h2 className="titulo-seccion">Nuestros Servicios:</h2>
          <ul>
            <li><strong>Fabricación, reparación y venta de elásticos</strong></li>
            <li><strong>Reparación de amortiguadores y frenos</strong></li>
            <li><strong>Alineado y balanceo</strong></li>
            <li><strong>Reparación de automotores y tren delantero</strong></li>
            <li><strong>Ventas de repuestos</strong></li>
            <li><strong>Colocación de tercer eje</strong></li>
            <li><strong>Enderezado de chasis</strong></li>
          </ul>
        </div>
        <div className="servicios-image">
          <img src={logoRojo} alt="Nuestros Servicios" />
        </div>
      </div>

      <h2 className="titulo-seccion">Nuestra Misión:</h2>
      <p>Ofrecer soluciones mecánicas de la más alta calidad, con un firme compromiso hacia la innovación, la excelencia <p></p>en el servicio y un trato cordial, garantizando la satisfacción total de nuestros clientes.</p>
      <h2 className="titulo-seccion">Nuestra Visión:</h2>
      <p>Ser la empresa líder en el mercado de frenos y elásticos de todo el noroeste argentino, reconocida por nuestra integridad, profesionalismo y dedicación.</p>
    </div>
  );
}

export default DescripcionUs;
