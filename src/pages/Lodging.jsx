import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import { fetchLibraryData } from '../assets/Datas/API';
import LodgingForm from '../components/LodgingForm';
import Accordion from '../components/Accordion';

export default function Lodging() {
  const { id } = useParams();
  const navigate = useNavigate();
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

  useEffect(() => {
    if (!isLoading && !selectedLodging) {
      navigate('/404');
    }
  }, [isLoading, selectedLodging, navigate]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const sections = selectedLodging ? [
    { title: 'Description', content: selectedLodging.description },
    { title: 'Équipements', content: selectedLodging.equipments.join(', ') },
  ] : [];

  return (
    <>
      <Header />
      {selectedLodging ? (
        <>
          <Carousel pictures={selectedLodging.pictures} />
          <LodgingForm data={selectedLodging} />
          <div className='accordionContainer lodgingAccordionContainer'>
            {sections.map((section, index) => (
              <Accordion key={index} title={section.title} content={section.content} />
            ))}
          </div>
        </>
      ) : (
        <p>Lodging not found</p>
      )}
      <Footer />
    </>
  );
}