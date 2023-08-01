import React, { useState } from "react";
import "./Header.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import NavBar from "../Navegador/Navbar";
import fotoportada from "../assets/fotoportada.png"

const SearchBar = () => {
  const navigation = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const Redireccionador = (value) => {
    const luces = ["luce", "led", "luz", "foco", "lampara", "cinta"];
    const cables = ["cable", "corriente", "conductor"];
    const baterias = ["pila", "generador", "fuente", "bateria"];
    const placas = ["circuito impreso", "pbc", "placa"];
    const resistencias = ["resistor", ];
    const fusibles = [
      "mecha",
      "espoleta",
      "detonador",
      "gatillo",
      "interruptor",
      "disparador",
      "detonante",
    ];
    const bobinas = [
      "inductor",
      "inductore",
      "rollo",
      "cilindro",
      "carrete",
      "bobina de alambre",
      "bobina ferrica",
    ];
    const capacitores = ["condensador"];
    let searchValue = value.toLowerCase();
    let hasSValue = searchValue.slice(
      searchValue.length - 1,
      searchValue.length + 1
    );
    if (hasSValue == "s") {
      console.log("hh");
      searchValue = searchValue.slice(0, searchValue.length - 1);
    }
    searchValue = luces.includes(searchValue) ? "isLuces" : searchValue;
    searchValue = cables.includes(searchValue) ? "isCables" : searchValue;
    searchValue = baterias.includes(searchValue) ? "isBaterías" : searchValue;
    searchValue = placas.includes(searchValue) ? "isPlacas" : searchValue;
    searchValue = resistencias.includes(searchValue)
      ? "isResistencias"
      : searchValue;
    searchValue = fusibles.includes(searchValue) ? "isFusibles" : searchValue;
    searchValue = bobinas.includes(searchValue) ? "isBobinas" : searchValue;
    searchValue = capacitores.includes(searchValue)
      ? "isCpapcitores"
      : searchValue;

    console.log(searchValue, cables.includes(searchValue));
    switch (searchValue) {
      case "isLuces":
        navigation("/Luces");
        break;
      case "isCables":
        navigation("/Cables");
        break;
      case "isBaterías":
        navigation("/Baterías");
        break;
      case "isPlacas":
        navigation("/Placas");
        break;
      case "isResistencias":
        navigation("/Resistencias");
        break;
      case "isFusibles":
        navigation("/Fusibles");
        break;
      case "isBobinas":
        navigation("7Bobinas");
        break;
      case "isCapacitores":
        navigation("/Capacitores");
        break;
      default:
        navigation("/Error");
        break;
    }
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFormSubmit = (event) => {
    Redireccionador(searchTerm);
  };

  return (
    <div className="search-container">
      <input
        className="search-input"
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Buscar..."
      />
      <button
        className="search-button"
        onClick={handleFormSubmit}
        type="submit"
      >
        Buscar
      </button>
    </div>
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
  const closedMenu = () => {
    setIsOpen(false);
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
              closedMenu();
            }}
          >
            Inicio
          </a>
          <a
            onClick={() => {
              navigation("/Novedades");
              closedMenu();
            }}
          >
            Novedades
          </a>
          <a
            onClick={() => {
              navigation("/Luces");
              closedMenu();
            }}
          >
            Luces
          </a>
          <a
            onClick={() => {
              navigation("/Cables");
              closedMenu();
            }}
          >
            Cables
          </a>
          <a
            onClick={() => {
              navigation("/Baterías");
              closedMenu();
            }}
          >
            Baterías
          </a>
          <a
            onClick={() => {
              navigation("/Placas");
              closedMenu();
            }}
          >
            Placas
          </a>
          <a
            onClick={() => {
              navigation("/Resistencias");
              closedMenu();
            }}
          >
            Resistencias
          </a>
          <a
            onClick={() => {
              navigation("/Fusibles");
              closedMenu();
            }}
          >
            Fusibles
          </a>
          <a
            onClick={() => {
              navigation("/Bobinas");
              closedMenu();
            }}
          >
            Bobinas
          </a>
          <a
            onClick={() => {
              navigation("/Capacitores");
              closedMenu();
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
        <div className="container-titulo">
          <h1 className="h1 neon-title"> MISIOTRÓNICA </h1>
        </div>
        <div className="logoempresa">
          <img className="fotoportada" src={fotoportada} />
        </div>

        <div className="general-menu">
          <DropdownMenu />
        </div>
        <nav className="SearchBar ">
          <SearchBar />
        </nav>
        <div className="Navegador">
          <NavBar />
        </div>
      </header>
    </>
  );
};




