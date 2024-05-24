import React from 'react';
import logo from '../assets/Images/LOGO.svg'; // Assurez-vous d'avoir le logo dans le dossier assets

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__logo">
                <img src={logo} alt="Kasa Logo" />
            </div>
            <p className="footer__text">© 2024 Kasa. All rights reserved</p>
        </footer>
    );
};

export default Footer;