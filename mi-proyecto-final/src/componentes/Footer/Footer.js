import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <p className='parrafo'>© {new Date().getFullYear()} Mi Sitio Web. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;