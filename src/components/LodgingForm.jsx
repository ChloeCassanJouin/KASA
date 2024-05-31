import React from 'react';
import collapseArrow from '../assets/Images/collapse-arrow.svg';

export default function Lodgingform({ data }) {
  console.log(data)
  
    return (
      <main>
        <section className='lodgingFormColumns'>
          <div className='lodgingFormColumn1'>
            <p className='lodgingFormTitle'>TITRE DU LOGEMENT KASA</p>
            <p>Lieu du logement Kasa</p>
            <ul>
              <li>TAGS</li>
            </ul>
          </div>
          <div className='lodgingFormColumn2'>
            <p className='lodgingFormOwner'>propriétaire</p>
            <p>Etoiles</p>
          </div>
        </section>
        <section className='lodgingAccordionContainer'>
          <div>
            <div className='lodgingAccordion1'>
              <p>titre1</p>
              <img src={collapseArrow} alt="collapse arrow"></img>
            </div>
            <div>
              <p>Contenu accordion</p>
            </div>
          </div>
          <div>
            <div className='lodgingAccordion2'>
            <p>titre2</p>
              <img src={collapseArrow} alt="collapse arrow"></img>
            </div>
            <div>
              <p>Contenu accordion</p>
            </div>
          </div>
        </section>
      </main>
    );
  }