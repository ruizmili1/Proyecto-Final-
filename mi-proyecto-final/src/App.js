import logo from "./logo.svg";
import "./App.css";
import { Header } from "./componentes/Header/Header";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
  Link
} from "react-router-dom";
import Home from "./componentes/Home/Home";
import Leyaut from "./componentes/pages/Layaut";
import Luces from "./componentes/pages/articles/Luces";
import Cables from "./componentes/pages/articles/Cables";
import Baterías from "./componentes/pages/articles/Baterías";
import Placas from "./componentes/pages/articles/Placas";
import Card from "./componentes/ui/Card";

function App() {
  return (
    <>
      <Header />
      <div>
        <h1> Routes </h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Luces" element={<Luces />} />
          <Route path="Cables" element={<Cables />} />
          <Route path="Baterías" element={<Baterías />} />
          <Route path="Placas" element={<Placas />} />
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
