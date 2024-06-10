import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutAccordion from "../components/AboutAccordion"
import sections from '../assets/Datas/aboutCategoryText.json';
import aboutBanner from '../assets/Images/about-banner.png';

export default function About() {
  return (
    <>
      <Header />
      <main>
        <div className='BannerContainer'>
          <div className='BannerTextContainer'>
          </div>
          <img src={aboutBanner} alt="About Banner" className="aboutBanner" />
        </div>
        <div className='about-content'>
            {sections.map((section, index) => (
              <AboutAccordion key={index} title={section.title} content={section.content} />
            ))}
        </div>
      </main>
      <Footer />
    </>
  );
}