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
  const handleSearch = (searchTerm) => {
    // Aquí puedes implementar la lógica de búsqueda, como llamar a una API o filtrar datos
    console.log("Buscar:", searchTerm);
  };

  return (
    <div>
      <h1>Aplicación de Búsqueda</h1>
      <SearchBar onSearch={handleSearch} />
      {/* Otros componentes y funcionalidades */}
    </div>
  );
};

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Buscar..."
      />
      <button type="submit" style={{ fontSize: "15px", marginLeft: "4px" }}>
        Buscar
      </button>
    </form>
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
            }}
          >
            Inicio
          </a>
          <a
            onClick={() => {
              navigation("/Luces");
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
