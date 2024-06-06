import React from 'react';
import { Link } from 'react-router-dom';
import logoHeader from '../assets/Images/logoHeader.svg'; 

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
                    <a href="/" className="nav-link">Accueil</a>
                    </li>
                    <li>
                    <a href="/about" className="nav-link">A Propos</a>
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
  