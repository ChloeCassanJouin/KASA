import React from 'react';
import { Link } from 'react-router-dom';

export default function GalleryHomePage({ data }) {
  console.log(data)

  return (
    <section className='Lodging'>
      <div className='LodgingCardsContainer'>
        {data.map((item, index) => (
           <Link to={`/Lodging/${item.id}`} key={index}>
            <article className='LodgingCard'>
              <img src={item.cover} alt={item.title} />
              <div className='LodgingTitleContainer'>
                <p className='LodgingTitle'>{item.title}</p>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}