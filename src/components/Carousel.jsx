import React from 'react';

export default function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="carousel">
      <button onClick={prevSlide}>Previous</button>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
      <button onClick={nextSlide}>Next</button>
    </div>
  );
}