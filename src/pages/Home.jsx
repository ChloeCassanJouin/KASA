import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { fetchLibraryData } from '../assets/Datas/API';
import GalleryHomePage from '../components/GalleryHomePage';

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const libraryData = await fetchLibraryData();
      setData(libraryData);
    }
    getData();
  }, []);

  return (
    <>
      <Header />
      <div className='HomePageBannerContainer'>
        <div className='HomePageBannerTextContainer'>
          <p className='HomePageBannerText'>Chez vous, partout et ailleurs</p>
        </div>
        <img src="./src/assets/Images/homepage-banner.png" alt="Homepage Banner" className="HomePageBanner" />
      </div>
      <GalleryHomePage data={data} />
      <Footer />
    </>
  );
}