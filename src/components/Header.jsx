import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Images/LOGO.svg'; // Assurez-vous d'avoir le logo dans le dossier assets

const Header = () => {
    return (
        <header className="header">
            <div className="header__logo">
                <Link to="/">
                    <img src={logo} alt="Kasa Logo" />
                </Link>
            </div>
            <nav className="header__nav">
                <ul>
                    <li>
                        <Link to="/">Accueil</Link>
                    </li>
                    <li>
                        <Link to="/about">À Propos</Link>
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
  