import React from 'react';
import { Carousel } from 'react-bootstrap';

export default function NoTransitionExample({ images }) {
  const intervalDuration = 60000 / images.length; // Calculate the interval duration

  return (
    <Carousel slide={false} interval={intervalDuration}>
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <img className="d-block w-100" src={image.src} alt={image.alt} />
          <Carousel.Caption>
            <h3>{image.title}</h3>
            <p>{image.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}