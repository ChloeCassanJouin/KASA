import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import { fetchLibraryData } from '../assets/Datas/API';
import LodgingForm from '../components/LodgingForm';

export default function Lodging() {
  const { id } = useParams();
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

  const selectedLodging = data.find(lodging => lodging.id === id);

  return (
    <>
      <Header />
      <Carousel />
      {selectedLodging ? (
        <LodgingForm data={selectedLodging} />
      ) : (
        <p>Loading...</p>
      )}
      <Footer />
    </>
  );
}
