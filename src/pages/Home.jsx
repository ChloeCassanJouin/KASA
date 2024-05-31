import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { fetchLibraryData } from '../assets/Datas/API';
import GalleryHomePage from '../components/GalleryHomePage';
import Lodging from './Lodging';

export default function Home() {
  const [data, setData] = useState([]); 

  useEffect(() => {
    async function getData() {
      const libraryData = await fetchLibraryData();
      setData(libraryData);
    }
    getData(); 
  }, []);

  console.log("Data in Home:", data); 

  return (
    <>
      <Header />
      <main>
      <div className='BannerContainer'>
        <div className='BannerTextContainer'>
          <p className='BannerText'>Chez vous,<span className='break-point'></span> partout et ailleurs</p>
        </div>
        <img src="./src/assets/Images/homepage-banner.png" alt="Homepage Banner" className="homePageBanner" />
      </div>
      </main>
      <GalleryHomePage data={data} />
      <Lodging data={data} />
      <Footer />
    </>
  );
}