import "./ImagenesNovedades.css"

const ImagenesNovedades = (props) => {
  const Imagenes = (props) => {
    switch (props.imagen) {
   
      case "../../assets/Pilas/ofertaduracell4.jpg":
        return (
          <img className="ofertaduracell4" src={require("../../assets/Pilas/ofertaduracell4.jpg")} alt="Descripción de la imagen" />
        );
        break;
        case "../../assets/DiodosLed/tira-led-completa.jpg":
        return (
          <img className="tiraledcompleta" src={require("../../assets/DiodosLed/tira-led-completa.jpg")} alt="Descripción de la imagen" />
        );
        break;
        case "../../assets/Fusibles/oferta-fusibles.jpg":
        return (
          <img className="fusibleoferta" src={require("../../assets/Fusibles/oferta-fusibles.jpg")} alt="Descripción de la imagen" />
        );
        break;
        case "../../assets/Cables/cablesofertax3.jpg":
        return (
          <img className="cableoferta" src={require("../../assets/Cables/cablesofertax3.jpg")} alt="Descripción de la imagen" />
        );
        break;
        
      
    }
  };

  return (
    <>
      <Imagenes imagen={props.imagen} />
    </>
  );
};
export default ImagenesNovedades;
