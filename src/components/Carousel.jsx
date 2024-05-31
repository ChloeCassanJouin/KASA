import React, { useState } from 'react';

export default function Carousel({ data }) {
  console.log(data)
  /*const [slideIndex, setSlideIndex] = useState(0);

  function nextSlide() {
    if (slideIndex < data.length - 1) {
      setSlideIndex(slideIndex + 1);
    } else {
      setSlideIndex(0);
    }
  }

  function prevSlide() {
    if (slideIndex > 0) {
      setSlideIndex(slideIndex - 1);
    } else {
      setSlideIndex(data.length - 1);
    }
  }*/

  return (
    <section className='carouselContainer'>
      <p>CAROUSEL</p>
    </section>
  );
}

/*<div className='carousel-container'>
        <div className='carousel-slide'>
          <img src={data[slideIndex].cover} alt={data[slideIndex].title} />
          <div className='LodgingTitleContainer'>
            <p className='LodgingTitle'>{data[slideIndex].title}</p>
          </div>
        </div>
        <button className='prev-button' onClick={prevSlide}>Previous</button>
        <button className='next-button' onClick={nextSlide}>Next</button>
      </div>*/