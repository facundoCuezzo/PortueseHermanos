import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Importa los estilos de Bootstrap Icons
import '../styles/Contacto.css'; // Archivo CSS para los estilos

const Contacto = () => {
  return (
    <div className="grid-container">
      <div className="grid-item">
        <i className="bi bi-whatsapp"></i>
        <p>
          <a href="https://wa.me/3816977245?text=Hola%20Portuese%20Hermanos,%20quiero%20información%20acerca%20de:"
             target="_blank" 
             rel="noopener noreferrer" 
             className="contact-link">
            WhatsApp 381697-7245
          </a>
        </p>
      </div>
      <div className="grid-item">
        <i className="bi bi-envelope"></i>
        <p>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=elasticosportuese@outlook.com&su=Información"
             target="_blank"
             rel="noopener noreferrer"
             className="contact-link">
            Correo Electrónico elasticosportuese@outlook.com
          </a>
        </p>
      </div>
      <div className="grid-item">
        <i className="bi bi-geo-alt"></i>
        <p>
          <a href="https://www.google.com.ar/maps/@-26.8336462,-65.2358952,3a,75y,197.75h,90t/data=!3m7!1e1!3m5!1sxFYLQHAi2rVMWUxkCGi9OA!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D0%26panoid%3DxFYLQHAi2rVMWUxkCGi9OA%26yaw%3D197.75345!7i16384!8i8192?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D"
             target="_blank"
             rel="noopener noreferrer"
             className="contact-link">
            Ubicación: Lavalle 2358, T4000 San Miguel de Tucumán, Tucumán
          </a>
        </p>
      </div>
      <div className="grid-item">
        <i className="bi bi-shield-check"></i>
        <p className="contact-link">Taller Habilitado</p>
      </div>
    </div>
  );
};

export default Contacto;
