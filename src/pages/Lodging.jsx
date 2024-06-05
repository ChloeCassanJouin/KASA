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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const libraryData = await fetchLibraryData();
        setData(libraryData);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching library data:', error);
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  const selectedLodging = data.find(lodging => lodging.id === id);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Header />
      {selectedLodging ? (
        <>
          <Carousel pictures={selectedLodging.pictures} /> {/* Pass the pictures array */}
          <LodgingForm data={selectedLodging} />
        </>
      ) : (
        <p>Lodging not found</p>
      )}
      <Footer />
    </>
  );
}