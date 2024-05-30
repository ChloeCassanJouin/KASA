import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Accordion from "../components/Accordion"
import sections from '../assets/Datas/aboutCategoryText.json';

export default function About() {
  return (
    <>
      <Header />
      <main>
        <div className='BannerContainer'>
          <div className='BannerTextContainer'>
          </div>
          <img src="./src/assets/Images/about-banner.png" alt="About Banner" className="aboutBanner" />
        </div>
        <div className='about-content'>
            {sections.map((section, index) => (
              <Accordion key={index} title={section.title} content={section.content} />
            ))}
        </div>
      </main>
      <Footer />
    </>
  );
}