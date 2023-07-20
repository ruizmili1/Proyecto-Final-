import logo from "./logo.svg";
import "./App.css";
import { Header } from "./componentes/Header/Header";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "./componentes/Home/Home";

import Luces from "./componentes/pages/articles/Luces";
import Cables from "./componentes/pages/articles/Cables";
import Baterías from "./componentes/pages/articles/Baterías";
import Placas from "./componentes/pages/articles/Placas";
import Ventas from "./componentes/pages/Ventas";
import SobreNosotros from "./componentes/pages/SobreNosotros";
import Contactos from "./componentes/pages/Contactos";
import Resistencias from "./componentes/pages/articles/Resistencias";
import Fusibles from "./componentes/pages/articles/Fusibles";
import Bobinas from "./componentes/pages/articles/Bobinas";
import Capacitores from "./componentes/pages/articles/Capacitores";


function App() {
  return (
    <>
      <Header />
      <div>
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Luces" element={<Luces />} />
          <Route path="Cables" element={<Cables />} />
          <Route path="Baterías" element={<Baterías />} />
          <Route path="Placas" element={<Placas />} />
          <Route path="Resistencias" element={<Resistencias/>} />
          <Route path="Fusibles" element={<Fusibles />} />
          <Route path="Bobinas" element={<Bobinas/>} />
          <Route path="Capacitores" element={<Capacitores/>} />
          <Route path="Contactos" element={<Contactos/>} />
          <Route path="Ventas" element={<Ventas />} /> 
          <Route path="SobreNosotros" element={<SobreNosotros/>} />
        </Routes>
      </div>
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
