import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaUserFriends, FaPhoneVolume, FaBoxOpen } from 'react-icons/fa';

const Ventajas = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-12 text-center">
          <h2>Ventajas de trabajar con nosotros</h2>
          <div className="divider my-4"></div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 text-center">
          <div className="icon-box">
            <FaUserFriends size={50} className="icon mb-3" />
            <h3>Venta Personalizada</h3>
            <p>Ofrecemos presupuestos gratuitos para asegurarte la mejor experiencia de compra y ayudarte a tomar decisiones informadas.</p>
          </div>
        </div>
        <div className="col-md-4 text-center">
          <div className="icon-box">
            <FaPhoneVolume size={50} className="icon mb-3" />
            <h3>Atención Post-Venta</h3>
            <p>Estamos comprometidos a ser tu socio confiable, contamos con un equipo dedicado a asesorarte en lo que necesites.</p>
          </div>
        </div>
        <div className="col-md-4 text-center">
          <div className="icon-box">
            <FaBoxOpen size={50} className="icon mb-3" />
            <h3>Garantía de Calidad</h3>
            <p>La calidad en nuestros productos es la prioridad número 1. Nos comprometemos en ofrecerte los mejores productos importados y nacionales.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ventajas;
