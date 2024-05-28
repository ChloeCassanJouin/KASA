import React from 'react';
import { Link } from 'react-router-dom';
import logoHeader from '../assets/Images/logoHeader.svg'; // Assurez-vous d'avoir le logo dans le dossier assets

const Header = () => {
    return (
        <header className="header">
            <div className="header__logo">
                <Link to="/">
                    <img src={logoHeader} alt="Kasa Logo" className='LogoHeader'/>
                </Link>
            </div>
            <nav className="header__nav">
                <ul>
                    <li>
                        <a href="/Home">Accueil</a>
                    </li>
                    <li>
                        <a href="/About">A Propos</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;




//export default function Header() {
    //return <h1>Bienvenue sur Kasa</h1>;
  //}
  