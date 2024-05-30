import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function NoPage() {
  return (
    <>
      <Header />
      <div className='errorContainer'>
        <p className='errorNumber'>404</p>
        <p className='errorText1'>Oups! La page que vous demandez n'existe pas.</p>
        <a href="/home" className='errorText2'>Retourner sur la page d'accueil</a>
      </div>
      <Footer />
    </>
  );
}