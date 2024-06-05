import React, { useState } from 'react';

export default function Carousel({ pictures }) { // Change the prop name to pictures
  const [slideIndex, setSlideIndex] = useState(0);

  if (!pictures || pictures.length === 0) {
    return <p>No images available</p>;
  }

  function nextSlide() {
    setSlideIndex((slideIndex + 1) % pictures.length);
  }

  function prevSlide() {
    setSlideIndex((slideIndex - 1 + pictures.length) % pictures.length);
  }

  return (
    <section className='carouselContainer'>
      <div className='carousel-slide'>
        <img src={pictures[slideIndex]} alt={`Slide ${slideIndex}`} /> {/* Use pictures array */}
      </div>
      <button className='prev-button' onClick={prevSlide}>Previous</button>
      <button className='next-button' onClick={nextSlide}>Next</button>
    </section>
  );
}