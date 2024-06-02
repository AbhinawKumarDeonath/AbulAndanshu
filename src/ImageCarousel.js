// src/ImageCarousel.js
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

const ImageCarousel = ({ photos }) => {
  return (
    <Carousel interval={3000}> {/* Auto-slide every 3 seconds */}
      {photos.map(photo => (
        <Carousel.Item key={photo.id}>
          <img
            className="d-block w-100"
            src={photo.src}
            alt={photo.alt}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;

