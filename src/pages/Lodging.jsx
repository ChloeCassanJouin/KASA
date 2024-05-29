import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchLibraryData } from '../assets/Datas/API';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';

export default function Lodging() {
  const { id } = useParams();
  const [lodging, setLodging] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getLodgingData() {
      try {
        const data = await fetchLibraryData();
        console.log(data)
        console.log('Fetched data:', data); // Ajoutez ceci pour voir les données récupérées
        const lodgingData = data.find(item => item.id === id);
        console.log('Lodging data:', lodgingData); // Ajoutez ceci pour voir le logement trouvé
        if (lodgingData) {
          setLodging(lodgingData);
        } else {
          setError('Lodging not found-Chloé');
        }
      } catch (err) {
        setError('Error fetching data');
      } finally {
        setLoading(false);
      }
    }

    getLodgingData();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <Header />
      <div className='LodgingPage'>
        <Carousel images={lodging.pictures} />
        <div className='LodgingDetails'>
          <h1>{lodging.title}</h1>
          <p>{lodging.description}</p>
          {/* Ajoutez d'autres détails comme le prix, la localisation, les équipements, etc. */}
        </div>
      </div>
      <Footer />
    </>
  );
}