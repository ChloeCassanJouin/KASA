import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import { fetchLibraryData } from '../assets/Datas/API';
import LodgingForm from '../components/LodgingForm';


export default function Lodging({ data }) {
  useEffect(() => {
    console.log("Data in Lodging:", data); // Ajoutez ce log pour vérifier les données dans Lodging
  }, [data]);
  //const [data, setData] = useState([]);

  /*useEffect(() => {
    async function getData() {
      const libraryLodgingData = await fetchLibraryData();
      setData(libraryLodgingData);
    }
    getData(); 
  }, []);*/

  return (
    <>
      <Header />
      <Carousel data={data} />
      <LodgingForm data={data} />
      <Footer />
    </>
  );
}

//<Carousel data={data} />
/*<main>
<div className='LodgingCarousel'>

</div>
</main>*/