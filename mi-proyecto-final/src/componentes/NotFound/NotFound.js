import React from 'react';
import "./NotFound.css"

const NotFound = () => {
  return (
    <div className='error-404'>
      <h1>Error 404 - Página no encontrada</h1>
      <p>Lo sentimos, la página que estás buscando no existe.</p>
    </div>
  );
}

export default NotFound;