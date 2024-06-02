import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import LodgingForm from '../components/LodgingForm';

export default function Lodging({ data }) {
  console.log("Data in Lodging component:", data);

  return (
    <>
      {/*<div>
        {data.map((item) => (
          <div key={item.id}>
            <h2>{item.title}</h2>
          </div>
        ))}
      </div>*/}
      <Header />
      <Carousel />
      <LodgingForm />
      <Footer />
    </>
  );
}
