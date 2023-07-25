import './ImagenesCables.css'

const ImagenesCables = (props) => {
  const Imagenes = (props) => {
    switch (props.imagen) {
      case "../../assets/Cables/cable unipolar normalizado 1.5mm marron.jpg":
        return (
          <img
            className="cable-marron"
            src={require("../../assets/Cables/cable unipolar normalizado 1.5mm marron.jpg")}
            alt="Descripción de la imagen"
          />
        );
        break;
      case "../../assets/Cables/cable unipolar normalizado 1.5mm rojo.jpg":
        return (
          <img
            className="cable-rojo"
            src={require("../../assets/Cables/cable unipolar normalizado 1.5mm rojo.jpg")}
            alt="Descripción de la imagen"
          />
        );
        break;
      case "../../assets/Cables/cable unipolar normalizado celeste.jpg":
        return (
          <img
            className="cable-celeste"
            src={require("../../assets/Cables/cable unipolar normalizado celeste.jpg")}
            alt="Descripción de la imagen"
          />
        );
        break;
      case "../../assets/Cables/cable unipolar normalizado negro.jpg":
        return (
          <img
            className="cable-negro"
            src={require("../../assets/Cables/cable unipolar normalizado negro.jpg")}
            alt="Descripción de la imagen"
          />
        );
        break;
      case "../../assets/Cables/cable unipolar normalizado tierra.jpg":
        return (
          <img
            className="cable-tierra"
            src={require("../../assets/Cables/cable unipolar normalizado tierra.jpg")}
            alt="Descripción de la imagen"
          />
        );
        break;
      case "../../assets/Cables/cable utp exterior.jpg":
        return (
          <img
            className="cable-utp"
            src={require("../../assets/Cables/cable utp exterior.jpg")}
            alt="Descripción de la imagen"
          />
        );
        break;
        case "../../assets/Cables/cable-alambre-soldar-8c.jpg":
        return (
          <img
            className="cable-alambre"
            src={require("../../assets/Cables/cable-alambre-soldar-8c.jpg")}
            alt="Descripción de la imagen"
          />
        );
        break;
        case "../../assets/Cables/cable-macho7hembra.jpg":
        return (
          <img
            className="cable-machohembra"
            src={require("../../assets/Cables/cable-macho7hembra.jpg")}
            alt="Descripción de la imagen"
          />
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

export default ImagenesCables;
