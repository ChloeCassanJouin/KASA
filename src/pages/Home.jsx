import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { fetchLibraryData } from '../assets/Datas/API';
import GalleryHomePage from '../components/GalleryHomePage';
import homeBanner from '../assets/Images/homepage-banner.png';


export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const libraryData = await fetchLibraryData();
        setData(libraryData);
      } catch (error) {
        console.error('Error fetching library data:', error);
      }
    }
    fetchData();
  }, []);

  return (
    <>    

      <Header />
      <main>
      <div className='BannerContainer'>
        <div className='BannerTextContainer'>
          <p className='BannerText'>Chez vous,<span className='break-point'></span> partout et ailleurs</p>
        </div>
        <img src={homeBanner} alt="Homepage Banner" className="homePageBanner" />
      </div>
      </main>
      <GalleryHomePage data={data} />
      <Footer />
    </>
  );
}

