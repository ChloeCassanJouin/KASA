import React from 'react';
import collapseArrow from '../assets/Images/collapse-arrow.svg';

export default function Lodgingform({ data }) {
  console.log("je suis dans lodging", data)
  
    return (
      <div>
        <section className='lodgingFormColumns'>
          <div className='lodgingFormColumn1'>
            <p className='lodgingFormTitle'>{data.title}</p>
            <p>{data.location}</p>
            <ul>
            {data.tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
          </div>
          <div className='lodgingFormColumn2'>
            <p className='lodgingFormOwner'>{data.host.name}</p>
            <p>{data.rating} étoiles</p>
          </div>
        </section>
        <section className='lodgingAccordionContainer'>
          <div className='lodgingAccordionColumn'>
            <div className='lodgingAccordion'>
              <p className='lodgingAccordion-title'>Description</p>
              <div className='lodgingAccordionArrow'>
                <img src={collapseArrow} alt="collapse arrow"></img>
              </div>
            </div>
            <div>
              <p>{data.description}</p>
            </div>
          </div>
          <div className='lodgingAccordionColumn'>
            <div className='lodgingAccordion'>
              <p className='lodgingAccordion-title'>Equipements</p>
              <div className='lodgingAccordionArrow'>
                <img src={collapseArrow} alt="collapse arrow"></img>
              </div>
            </div>
            <div>
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

      /*<div>
        <section className='lodgingFormColumns'>
          <div className='lodgingFormColumn1'>
            <p className='lodgingFormTitle'>{data.title}</p>
            <p>{data.location}</p>
            <ul>
            {data.tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
          </div>
          <div className='lodgingFormColumn2'>
            <p className='lodgingFormOwner'>{data.host.name}</p>
            <p>{data.rating} étoiles</p>
          </div>
        </section>
        <section className='lodgingAccordionContainer'>
          <div>
            <div className='lodgingAccordion'>
              <p>Description</p>
              <img src={collapseArrow} alt="collapse arrow"></img>
            </div>
            <div>
              <p>{data.description}</p>
            </div>
          </div>
          <div>
            <div className='lodgingAccordion'>
            <p>Equipements</p>
              <img src={collapseArrow} alt="collapse arrow"></img>
            </div>
            <div>
               <ul>
              {data.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
            </div>
          </div>
        </section>
        </div>*/