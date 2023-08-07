import React from 'react';
import './Footer.css';
import { SlLocationPin } from "react-icons/sl";



const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="contenedor-1">
        <div >
          <p className='parrafo'>© {new Date().getFullYear()} Mi Sitio Web. Todos los derechos reservados.</p>
        </div>
      </div>

      <div className="contenedor-2">
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