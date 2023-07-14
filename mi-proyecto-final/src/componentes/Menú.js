import React from "react";
import "./Menú.css";

const NavMenu = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="#"> Inicio </a>
        </li>
        <li>
          <a href="#"> Ventas </a>
        </li>
        <li>
          <a href="#">  Sobre Nosotros </a>
        </li>
        <li>
          <a href="#"> Contactos </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;

function Menu() {
  return (
    <ul>
      <li>
        <a href="/">Inicio</a>
      </li>
      <li>
        <a href="/about">Acerca de</a>
      </li>
      <li>
        <a href="/contact">Contacto</a>
      </li>
    </ul>
  );
}
