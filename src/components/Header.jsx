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
                        <Link to="/" className="nav-link">Accueil</Link>
                    </li>
                    <li>
                        <Link to="/about" className="nav-link">A Propos</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;