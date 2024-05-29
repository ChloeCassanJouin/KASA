import React from 'react';

export default function GalleryHomePage({ data }) {
  return (
    <section className='Lodging'>
      <div className='LodgingCardsContainer'>
        {data.map((item, index) => (
          <a href={`/Lodging/${item.id}`} key={index}>
            <article className='LodgingCard'>
              <img src={item.cover} alt={item.title} />
              <div className='LodgingTitleContainer'>
                <p className='LodgingTitle'>{item.title}</p>
              </div>
            </article>
          </a>
        ))}
      </div>
    </section>
  );
}