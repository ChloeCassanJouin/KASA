import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoHeader from '../assets/Images/logoHeader.svg'; 

const Header = () => {
    const [currentUrl, setCurrentUrl] = useState('');
    const location = useLocation();

    useEffect(() => {
        setCurrentUrl(location.pathname);
    }, [location]);

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
                        <Link to="/" className={currentUrl === "/" ? "nav-link active" : "nav-link"}>Accueil</Link>
                    </li>
                    <li>
                        <Link to="/about" className={currentUrl === "/about" ? "nav-link active" : "nav-link"}>A Propos</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;