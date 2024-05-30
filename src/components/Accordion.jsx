import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function Accordion({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='accordion'>
      <div className='accordion-title' onClick={toggleAccordion}>
        <h2>{title}</h2>
        <span>{isOpen ? '\u2304' : '\u2304'}</span>
      </div>
      {isOpen && (
        <div className='accordion-content'>
          <p>{content}</p>
        </div>
      )}
    </div>
  );
}

Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};