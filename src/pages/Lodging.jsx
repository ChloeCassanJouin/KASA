import React, { useState, useEffect } from 'react'; //HOOKS REACT
import { fetchLibraryData } from '../assets/Datas/API';
import { useParams } from 'react-router-dom'; // HOOK - accéder aux paramètres URL
import Header from '../components/Header';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';

export default function Lodging() {
  const { id } = useParams(); // récupere ID du logement depuis URL
  const [lodging, setLodging] = useState(null); // stockage
  const [loading, setLoading] = useState(true); // si données en cours chargement
  const [error, setError] = useState(null); // stockage message erreur

  useEffect(() => { // exécuté quand l'ID du logement change?
    async function getLodgingData() {
      try {
        const data = await fetchLibraryData();
        console.log('Fetched data:', data);
        const lodgingData = data.find(item => item.id === id); // va rechercherr logement Spé
        console.log('Lodging data:', lodgingData);
        if (lodgingData) { // si logement spé trouvé:
          setLodging(lodgingData); // MAJ etat lodging
          setError(null); 
        } else {
          setError('Lodging not found-ID spé non trouvé'); // si pas trouvé
        }
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Error fetching data');
      } finally { // a la fin de la tentative de récup - MAJ etat
        setLoading(false);
      }
    }

    getLodgingData();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>; // si le loading est true afficher Loading...
  }

  if (error) { // si erreur, affichage message erreur
    return (
      <>
        <Header />
        <div>{error}</div>
        <Footer />
      </>
    );
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