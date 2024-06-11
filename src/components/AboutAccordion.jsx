import React, { useState } from 'react';
import PropTypes from 'prop-types';
import collapseArrow from '../assets/Images/collapse-arrow.svg';

export default function AboutAccordion({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='accordion'>
      <div className='accordion-title' onClick={toggleAccordion}>
        <h2>{title}</h2>
        <div className='accordion-arrow'>
          <img src={collapseArrow} alt="collapse arrow" className={isOpen ? 'rotate' : ''}
          />
        </div>
      </div>
      <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
        <p>{content}</p>
      </div>
    </div>
    );
  }

  AboutAccordion.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};