import React, { useState } from 'react';
import collapseArrow from '../assets/Images/collapse-arrow.svg';
import activeStar from '../assets/Images/active-star.svg';
import greyStar from '../assets/Images/inactive-star.svg';

const StarRating = ({ rating }) => {
  const totalStars = 5;
  return (
    <div className="star-rating">
      {[...Array(totalStars)].map((_, index) => (
        <img
          key={index}
          src={index < rating ? activeStar : greyStar}
          alt={index < rating ? "Active Star" : "Inactive Star"}
          className="star"
        />
      ))}
    </div>
  );
};

export default function Lodgingform({ data }) {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

    return (
      <div>
        <section className='lodgingFormColumns'>
          <div className='lodgingFormColumn1'>
            <p className='lodgingFormTitle'>{data.title}</p>
            <p className='lodgingFormLocation'>{data.location}</p>
            <ul>
              {data.tags.map((tag, index) => (
                <li key={index}>{tag}</li>
              ))}
            </ul>
          </div>
          <div className='lodgingFormColumn2'>
            <div className='lodgingFormOwnerContainer'>
                <p className='lodgingFormOwner'>{data.host.name}</p>
                <div className='lodgingFormOwnerAvatar'></div>
            </div>
            <div className='StarRatingContainer'>
              <StarRating rating={data.rating} />
            </div>
          </div>
        </section>


        <section className='lodgingAccordionContainer'>
          <div className='lodgingAccordionColumn'>
            <div className='lodgingAccordion' onClick={() => toggleAccordion(0)}>
              <p className='lodgingAccordion-title'>Description</p>
              <div className='lodgingAccordionArrow'>
                <img src={collapseArrow} alt="collapse arrow" className={isOpen ? 'rotate' : ''}
                />
              </div>
            </div>
            <div className={`lodgingAccordion-content ${isOpen ? 'open' : ''}`}>
              <p>{data.description}</p>
            </div>
          </div>

          
          <div className='lodgingAccordionColumn'>
            <div className='lodgingAccordion' onClick={() => toggleAccordion(1)}>
              <p className='lodgingAccordion-title'>Equipements</p>
              <div className='lodgingAccordionArrow'>
                <img src={collapseArrow} alt="collapse arrow" className={openAccordion === 1 ? 'rotate' : ''} />
              </div>
            </div>
            <div className={`lodgingAccordion-content ${openAccordion === 1 ? 'open' : ''}`}>
              <ul>
                {data.equipments.map((equipment, index) => (
                  <li key={index}>{equipment}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    );
  }
