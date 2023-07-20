import React, { useState } from "react";
import "./Header.css";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RiContactsBookLine } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

function MyComponent() {
  return (
    <div>
      <h1 className="title">Título de mi página</h1>
    </div>
  );
}

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
      <button type="submit">Buscar</button>
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

        <div  className="hamburguesa" style={{ position: "fixed" }}>
        <GiHamburgerMenu style={{fontSize: "23px", margin: "3px", color: "red"}} />
        </div>
        <nav>
          <SearchBar />
        </nav>
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
                    <span> Sobre nosotros</span>
                  </i>
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
