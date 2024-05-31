import React from 'react';
import logoFooter from '../assets/Images/logoFooter.png'; // Assurez-vous d'avoir le logo dans le dossier assets

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer_logo">
                <img src={logoFooter} alt="Kasa Logo" className="LogoFooter"/>
            </div>
            <p className="footer__text">© 2024 Kasa. All rights reserved</p>
        </footer>
    );
};

export default Footer;