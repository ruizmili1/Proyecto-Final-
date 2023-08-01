import React from 'react';
import './Footer.css';
import { SlLocationPin } from "react-icons/sl";



const Footer = () => {
  return (
    <footer className="footer-container">
      <p className='parrafo'>© {new Date().getFullYear()} Mi Sitio Web. Todos los derechos reservados.</p>
      <div className='contenedor-ubicacion'>
        <div className='ubicacion'>
          <SlLocationPin />
        </div>
        <div>
          <p className='p-ubicacion'>  Ubicación: Manzana G C1 Bº Primavera, San Martín, Mendoza, Argentina. </p>
        </div>
      </div>


    </footer >
  );
};

export default Footer;