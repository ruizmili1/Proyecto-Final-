import React, { useState } from "react";
import "./Header.css";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RiContactsBookLine } from "react-icons/ri";
import letraeme from "../assets/letraeme.png";
import NavMenu from "../Menú";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <button className="boton" onClick={toggleMenu}>
        <span> Menú </span>
      </button>

      <div className={isOpen ? "dropdown-extend" : "dropdown"}>
        <div className="dropdown-content">
            
          <a href="#">Opción 2</a>
          <a href="#">Opción 3</a>
          <a href="#">Opción 4</a>
          
        </div>
      </div>
    </>
  );
};

export const Header = () => {
  return (
    <>
      <header className="header">
        <div>
          <h1 className='nombre'> MISIOTRÓNICA </h1>
        </div>
        <div>
        <img  className='letra' src={letraeme} alt="logo empresa" />
        </div>
       
        <div style={{position:"fixed"}}>
          <DropdownMenu />
        </div>
        <div>
          <NavMenu/>
        </div>
        
        <div className="rvrigth-sticky">
          <div className="sticky-content">
            <div className="sticky-inner">
              <div className="venta-sticky">
                <a className="ventas" href="">
                  <i className="material-icons">
                    {" "}
                    <AiOutlineShoppingCart
                      className="hover"
                      style={{ fontSize: "23px", margin: "3px" }}
                    />{" "}
                  </i>
                  <span> Ventas </span>
                </a>
              </div>

              <div className="nosotros-sticky">
                <a className="nosotros" href="">
                  <i className="material-icons">
                    {" "}
                    <AiOutlineInfoCircle
                      style={{ fontSize: "23px", margin: "3px" }}
                    />{" "}
                  </i>
                  <span> Sobre nosotros</span>
                </a>
              </div>

              <div className="contacto-sticky">
                <a className="contacto" href="">
                  <i className="material-icons">
                    {" "}
                    <RiContactsBookLine
                      style={{ fontSize: "20px", margin: "3px" }}
                    />{" "}
                  </i>
                  <span> Contactos </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
