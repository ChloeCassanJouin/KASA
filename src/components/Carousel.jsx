import React, { useState } from 'react';
import ArrowLeft from '../assets/Images/slideshow-arrow_left.svg'; 
import ArrowRight from '../assets/Images/slideshow-arrow_right.svg'; 

export default function Carousel({ pictures }) { 
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
      <img className='carouselPictures' src={pictures[slideIndex]} alt={`Slide ${slideIndex}`} />
    </div>
    <button className='prev-button' onClick={prevSlide}>
      <img src={ArrowLeft} alt="Previous" />
    </button>
    <button className='next-button' onClick={nextSlide}>
      <img src={ArrowRight} alt="Next" />
    </button>
  </section>
  );
}