import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import { fetchLibraryData } from '../assets/Datas/API';
import LodgingForm from '../components/LodgingForm';

export default function Lodging() {
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
      <main>
        <div className='LodgingCarousel'>
          <Carousel data={data} /> 
        </div>
      </main>
      <LodgingForm />
      <Footer />
    </>
  );
}