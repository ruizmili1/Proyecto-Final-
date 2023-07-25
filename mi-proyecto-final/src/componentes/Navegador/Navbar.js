import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RiContactsBookLine } from "react-icons/ri";
import { AiOutlineInfoCircle } from "react-icons/ai";
const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <div className="icon1">
          <AiOutlineShoppingCart />
        </div>
        <div className="ventas">
          <Link className="link-1" to="Ventas">
            Ventas
          </Link>
        </div>

        <div className="icon2">
          <AiOutlineInfoCircle />
        </div>
        <div className="nosotros">
          <Link className="link-2" to="SobreNosotros">
            Sobre Nosotros
          </Link>
        </div>

        <div className="icon3">
          <RiContactsBookLine />
        </div>
        <div className="contactos">
          <Link className="link-3" to="Contactos">
            Contactos
          </Link>
        </div>
      </ul>
    </nav>
  );
};

export default NavBar;
