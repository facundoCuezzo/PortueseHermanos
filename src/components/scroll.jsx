import React, { useState, useEffect, useRef } from 'react';
import '../styles/scroll.css';
import scroll1 from '../assets/logoAsicha.jpg';
import scroll2 from '../assets/logoFag.jpg';
import scroll3 from '../assets/logoFord.jpg';
import scroll4 from '../assets/logoFrasle.jpg';
import scroll5 from '../assets/logoFrenos.jpg';
import scroll6 from '../assets/logoIveco.jpg';
import scroll7 from '../assets/logoJost.jpg';
import scroll8 from '../assets/logoMontenegro.jpg';
import scroll9 from '../assets/logoNeumacarg.jpg';
import scroll10 from '../assets/logoSadar.jpg';
import scroll11 from '../assets/logoSalto.jpg';
import scroll12 from '../assets/logoScania.jpg';
import scroll13 from '../assets/logoSKF.jpg';
import scroll14 from '../assets/logoVolkswagen.jpg';
import scroll15 from '../assets/logoVolvo.jpg';

const Scroll = () => {
  const [index, setIndex] = useState(1); // Iniciar desplazado un poco a la derecha
  const images = [
    scroll1, scroll2, scroll3, scroll4, scroll5, scroll6, scroll7,
    scroll8, scroll9, scroll10, scroll11, scroll12, scroll13, scroll14, scroll15
  ];

  const scrollRef = useRef(null);
  const totalImages = images.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % totalImages);
    }, 2000);

    // Desplazamiento inicial cuando se carga la página
    setIndex(1);

    return () => {
      clearInterval(interval);
    };
  }, [totalImages]);

  // Resetea el índice para mantener el bucle infinito
  useEffect(() => {
    if (index === totalImages - 1) {
      setTimeout(() => {
        setIndex(0);
      }, 2000); // Tiempo de espera para evitar parpadeo
    }
  }, [index, totalImages]);

  return (
    <div className="scroll_sup container" ref={scrollRef}>
      <div className="row">
        <div className="col-lg-12">
          <ul className="no-margin brand-carousel" style={{ transform: `translateX(${-index * (150 + 10)}px)` }}>
            {images.concat(images).map((image, imgIndex) => (
              <li key={imgIndex}>
                <img src={image} alt={`Imagen ${imgIndex + 1}`} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Scroll;
