import React, { useState } from "react";
import "./Header.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
  Link,
} from "react-router-dom";

import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import NavBar from "../Navegador/Navbar";

const App = () => {
  
  return (
    <div>
      <h1>Aplicación de Búsqueda</h1>
      <SearchBar />
      {/* Otros componentes y funcionalidades */}
    </div>
  );
};

const SearchBar = () => {
  const navigation = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const Redireccionador =(value) =>{
    const luces = ['luce','led','luz','foco','lampara','cinta']
    const cables = ['cable','corriente','conductor']
    let searchValue = value.toLowerCase()
    let hasSValue = searchValue.slice((searchValue.length-1),(searchValue.length+1))
    if(hasSValue == 's'){
      console.log('hh')
      searchValue = searchValue.slice(0,searchValue.length-1)
    }
    searchValue = luces.includes(searchValue)? 'isLuces' : searchValue;
    searchValue = cables.includes(searchValue)? 'isCables' : searchValue

    
    console.log(searchValue,cables.includes(searchValue))
    switch (searchValue){
      case 'isLuces':
        navigation("/Luces");
        break;
      case 'isCables':
        navigation("/Cables");
        break;
      default:
        navigation("/Error");
        break;
    }
  }

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };


  const handleFormSubmit = (event) => {
    Redireccionador(searchTerm)
  };

  return (
    <>
    <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Buscar..."
      />
      <button onClick={handleFormSubmit}type="submit" style={{ fontSize: "15px", marginLeft: "4px" }}>
        Buscar
      </button>
    </>
      
  );
};

export default SearchBar;

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigation = useNavigate();

  const redirect = () => {
    navigation("/Luces");
  };
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const closedMenu = () =>{
    setIsOpen(false);
  }
  return (
    <>
      <div className="boton" onClick={toggleMenu}>
        <span style={{ fontSize: "30px" }}>
          {" "}
          <GiHamburgerMenu />{" "}
        </span>
      </div>

      <div className={isOpen ? "dropdown-extend" : "dropdown"}>
        <div className="dropdown-content">
          <a
            onClick={() => {
              navigation("/#");
              closedMenu()
            }}
          >
            Inicio
          </a>
          <a
            onClick={() => {
              navigation("/Luces");
              closedMenu()
            }}
          >
            Luces
          </a>
          <a
            onClick={() => {
              navigation("/Cables");
            }}
          >
            Cables
          </a>
          <a
            onClick={() => {
              navigation("/Baterías");
            }}
          >
            Baterías
          </a>
          <a
            onClick={() => {
              navigation("/Placas");
            }}
          >
            Placas
          </a>
          <a
            onClick={() => {
              navigation("/Resistencias");
            }}
          >
            Resistencias
          </a>
          <a
            onClick={() => {
              navigation("/Fusibles");
            }}
          >
            Fusibles
          </a>
          <a
            onClick={() => {
              navigation("/Bobinas");
            }}
          >
            Bobinas
          </a>
          <a
            onClick={() => {
              navigation("/Capacitores");
            }}
          >
            Capacitores
          </a>
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
          <h1> MISIOTRÓNICA </h1>
        </div>

        <div style={{ position: "fixed" }}>
          <DropdownMenu />
        </div>
        <nav className="buscador">
          <SearchBar />
        </nav>
        <div className="Navegador">
          <NavBar />
        </div>
      </header>
    </>
  );
};
