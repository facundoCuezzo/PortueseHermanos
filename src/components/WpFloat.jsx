import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const WpFloat = () => {
  return (
    <div>
      <a href="https://wa.me/3816977245" className="whatsapp-button" target="_blank" rel="noopener noreferrer">
        <img src="https://img.icons8.com/color/48/000000/whatsapp.png" alt="WhatsApp" />
      </a>
    </div>
  );
}

const styles = `
.whatsapp-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
}

.whatsapp-button img {
  width: 80px;  /* Ajusta el tamaño del icono según tus necesidades */
  height: 80px;
}
`;

// Insert the style tag into the head of the document
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default WpFloat;
