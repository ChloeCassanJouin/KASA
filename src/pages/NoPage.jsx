import React from 'react';
import { Link } from 'react-router-dom';
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function NoPage() {
  return (
    <>
      <Header />
      <div className='errorContainer'>
        <p className='errorNumber'>404</p>
        <p className='errorText1'>Oups! La page que <span class="break"> vous demandez n'existe pas.</span></p>
        <Link to="/" className='errorText2'>Retourner sur la page d'accueil</Link>
      </div>
      <Footer />
    </>
  );
}