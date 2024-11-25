import React from 'react';
import '../styles/Footer.css'; // Archivo CSS para los estilos

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h1 className="logo-text">Elasticos Portuese Hermanos</h1>
          <p>
          Especialistas en el rubro de fabricación y mecánica de frenos y elásticos en la provincia de Tucuman.
          </p>
          <div className="contact">
            <i className="bi bi-telephone"></i> &nbsp; 381-405-1413
            <i className="bi bi-envelope"></i> &nbsp; elasticosportuese@outlook.com
          </div>
        </div>
        <div className="footer-section links">
          <h2>Enlaces Rápidos</h2>
          <br />
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Servicios</a></li>
            <li><a href="#">Acerca de Nosotros</a></li>
            <li><a href="#">Política de Privacidad</a></li>
            <li><a href="#">Contacto</a></li>
          </ul>
        </div>
        <div className="footer-section social"> <h2>Redes Sociales</h2> <br /> <div className="social-links"> <a href="#"><i className="bi bi-facebook"></i></a> <a href="https://wa.me/3816977245?text=Hola%20Portuese%20Hermanos,%20quiero%20información%20acerca%20de:"><i className="bi bi-whatsapp"></i></a> </div>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Elasticos Portuese Hermanos | Todos los derechos reservados
      </div>
    </footer>
  );
};

export default Footer;
