import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import { fetchLibraryData } from '../assets/Datas/API';
import LodgingForm from '../components/LodgingForm';

export default function Lodging() {
  const [data, setData] = useState([]);
  console.log("Data in Home component:", data);

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
  console.log("Data in Lodging component:", data);


  return (
    <>
      <Header />
      <Carousel />
      <LodgingForm />
      <Footer />
    </>
  );
}
