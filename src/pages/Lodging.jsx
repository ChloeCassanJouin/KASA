import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import { fetchLibraryData } from '../assets/Datas/API';
import LodgingForm from '../components/LodgingForm';

export default function Lodging() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const libraryLodgingData = await fetchLibraryData();
      setData(libraryLodgingData);
    }
    getData(); 
  }, []);

  return (
    <>
      <Header />

      <LodgingForm data={data} />
      <Footer />
    </>
  );
}

//<Carousel data={data} />
/*<main>
<div className='LodgingCarousel'>
<Carousel data={data} />
</div>
</main>*/