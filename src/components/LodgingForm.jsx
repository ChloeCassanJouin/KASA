import React, { useState } from 'react';
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
  const [openAccordions, setOpenAccordions] = useState([false, false]);

  const toggleAccordion = (index, event) => {
    event.stopPropagation(); 
    const clickedElement = event.target;
    if (clickedElement.closest('.lodgingAccordionArrow')) {
      setOpenAccordions(prevState => {
        const newState = [...prevState];
        newState[index] = !newState[index];
        return newState;
      });
    }
  };

  return (
    <div>
      <section className='lodgingFormColumns'>

        <div className='lodgingFormColumn1'>
          <p className='lodgingFormTitle'>{data.title}</p>
          <p className='lodgingFormLocation'>{data.location}</p>
          <div>
            <ul>
              {data.tags.map((tag, index) => (
                <li key={index}>{tag}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className='lodgingFormColumn2'>
          <div className='lodgingFormOwnerContainer'>
              <div className='lodgingFormOwner'>
                <p className='lodgingFormOwnerName'>{data.host.name}</p>
              </div>
              <div className='lodgingFormOwnerAvatar'>
              <img src={data.host.picture} alt="Host Avatar" className='host-avatar' />
              </div>
          </div>
        
          <div className='StarRatingContainer'>
            <StarRating rating={data.rating} />
          </div>
        </div>
      </section>
    </div>
  );
}