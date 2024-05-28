import React, { useState, useEffect } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('src/assets/Datas/library.json')
      .then(response => response.json())
      .then(data => {
        setData(data);
      })
      .catch(error => console.error('Error loading the JSON file:', error));
  }, []);

  return (
    <>
      <Header />
      <div className='HomePageBannerContainer'>
        <div className='HomePageBannerTextContainer'>
          <p className='HomePageBannerText'>Chez vous, partout et ailleurs</p>
        </div>
        <img src="./src/assets/Images/homepage-banner.png"  alt="Homepage Banner" className="HomePageBanner"/>
      </div>
      <section className='Lodging'>
        <div className='LodgingCardsContainer'>
          {data.map((item, index) => (
            <a href="/Lodging" key={index}>
              <article className='LodgingCard'>
                <img src={item.cover} alt={item.title}/>
                <div className='LodgingTitleContainer'>
                  <p className='LodgingTitle'>{item.title}</p>
                </div>
              </article>
            </a>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}