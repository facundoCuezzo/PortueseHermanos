import React from 'react';
import { Carousel } from 'react-bootstrap';
import imagen1 from '../assets/download.png';
import imagen2 from '../assets/elasticos2.png';
import imagen3 from '../assets/elasticosP.png';

const ImageCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imagen1}
          alt="Primera imagen"
          style={{ height: '300px', objectFit: 'cover' }} // Ajusta la altura según prefieras
        />
        <Carousel.Caption>
          <h3>Título de la Primera Imagen</h3>
          <p>Descripción breve para la primera imagen.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imagen2}
          alt="Segunda imagen"
          style={{ height: '300px', objectFit: 'cover' }}
        />
        <Carousel.Caption>
          <h3>Título de la Segunda Imagen</h3>
          <p>Descripción breve para la segunda imagen.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imagen3}
          alt="Tercera imagen"
          style={{ height: '300px', objectFit: 'cover' }}
        />
        <Carousel.Caption>
          <h3>Título de la Tercera Imagen</h3>
          <p>Descripción breve para la tercera imagen.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ImageCarousel;
