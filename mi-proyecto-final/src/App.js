
import "./App.css";
import { Header } from "./componentes/Header/Header";
import { Route, Routes } from "react-router-dom";
import Novedades from "./componentes/Novedades/Novedades";
import Luces from "./componentes/pages/articles/Luces";
import Cables from "./componentes/pages/articles/Cables";
import Baterías from "./componentes/pages/articles/Baterías";
import Placas from "./componentes/pages/articles/Placas";
import Resistencias from "./componentes/pages/articles/Resistencias";
import Fusibles from "./componentes/pages/articles/Fusibles";
import Bobinas from "./componentes/pages/articles/Bobinas";
import Capacitores from "./componentes/pages/articles/Capacitores"
import Ventas from "./componentes/pages/Ventas";
import SobreNosotros from "./componentes/pages/SobreNosotros";
import Contactos from "./componentes/pages/Contactos";
import { Error } from "./componentes/PageError/Error";
import NotFound from "./componentes/NotFound/NotFound";
import Inicio from "./componentes/ui/ReturnImagenesFile/Inicio";
import Footer from "./componentes/Footer/Footer";
import { Component } from "react";




class App extends Component {
  render(){
    return (

      <>
        <Header />
    
        <Routes>
          <Route path="/" element={< Inicio />} />
          <Route path="Novedades" element={<Novedades />} />
          <Route path="Luces" element={<Luces />} />
          <Route path="Cables" element={<Cables />} />
          <Route path="Baterías" element={<Baterías />} />
          <Route path="Placas" element={<Placas />} />
          <Route path="Resistencias" element={<Resistencias />} />
          <Route path="Fusibles" element={<Fusibles />} />
          <Route path="Bobinas" element={<Bobinas />} />
          <Route path="Capacitores" element={<Capacitores />} />
          <Route path="Ventas" element={<Ventas />} />
          <Route path="SobreNosotros" element={<SobreNosotros />} />
          <Route path="Contactos" element={<Contactos />} />
          <Route path="Error" element={<Error />} />
          <Route path="*" element={<NotFound />} />
    
        </Routes>
    
        <Footer />
      </>
    
    );
  }
  
}


export default App;
