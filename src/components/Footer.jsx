import React from "react";
import "../styles/Footer.css"; // Archivo CSS para los estilos

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h1 className="logo-text">Elasticos Portuese Hermanos</h1>
          <p>
            Especialistas en el rubro de fabricación y mecánica de frenos y
            elásticos en la provincia de Tucuman.
          </p>
          <div className="contact">
            <i className="bi bi-telephone"></i> &nbsp; 381-405-1413
            <i className="bi bi-envelope"></i> &nbsp;
            elasticosportuese@outlook.com
          </div>
        </div>
        <div className="footer-section links">
          <div>
            <h1 className="logo-text">Enlaces Rápidos</h1>
          </div>
          <br />
          <ul>
            <li>
              <a href="#">Inicio</a>
            </li>
            <li>
              <a href="#">Servicios</a>
            </li>
            <li>
              <a href="#">Acerca de Nosotros</a>
            </li>
            <li>
              <a
                href="https://wa.me/3816977245?text=Hola%20Portuese%20Hermanos,%20quiero%20información%20acerca%20de:"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                Contacto
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-section social">
          {" "}
          <h1 className="logo-text">Redes Sociales</h1> <br />
          <div className="social-links">
            <a
              href="https:/www.facebook.com/profile.php?id=100072260853162&mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <i>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={36}
                  height={36}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-facebook"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                </svg>
              </i>
            </a>{" "}
            <a
              href="https://wa.me/3816977245?text=Hola%20Portuese%20Hermanos,%20quiero%20información%20acerca%20de:"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={36}
                height={36}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
              </svg>
            </a>{" "}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Elasticos Portuese Hermanos | Todos
        los derechos reservados
      </div>
    </footer>
  );
};

export default Footer;
