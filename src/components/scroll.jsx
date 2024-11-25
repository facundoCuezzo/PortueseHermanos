import React, { useState, useEffect, useRef } from 'react';
import '../styles/scroll.css';
import scroll1 from '../assets/00010001672921.jpg';
import scroll2 from '../assets/00010003673073.jpg';
import scroll3 from '../assets/00010004673164.jpg';
import scroll4 from '../assets/00010005673255.jpg';
import scroll5 from '../assets/00010006673356.jpg';
import scroll6 from '../assets/00010007673437.jpg';
import scroll7 from '../assets/00010008673528.jpg';
import scroll8 from '../assets/00010009673599.jpg';
import scroll9 from '../assets/000100106738710.jpg';
import scroll10 from '../assets/000100116738711.jpg';
import scroll11 from '../assets/000100126738712.jpg';
import scroll12 from '../assets/000100136738713.jpg';
import scroll13 from '../assets/000100146738714.jpg';
import scroll14 from '../assets/000100156738715.jpg';

const Scroll = () => {
  const [index, setIndex] = useState(1); // Iniciar desplazado un poco a la derecha
  const images = [
    scroll1, scroll2, scroll3, scroll4, scroll5, scroll6, scroll7,
    scroll8, scroll9, scroll10, scroll11, scroll12, scroll13, scroll14
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
