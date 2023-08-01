import React from 'react';
import "./NotFound.css"
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='error404'>
      <h1 className='h1error'>ERROR 404</h1>
      <p className='p-error'>Lo siento, la página que buscas no existe.</p>
      <div className='container-boton'>
        <button className='bnt-volver'> 
          <Link className='linkvolver' to="/">Volver atrás </Link>
        </button>
      </div>
    </div>
  );
};

export default NotFound;








