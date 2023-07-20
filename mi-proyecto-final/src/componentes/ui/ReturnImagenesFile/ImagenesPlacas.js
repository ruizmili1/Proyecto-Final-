import "./ImagenesPlacas.css";

const ImagenesPlacas = (props) => {
  const Imagenes = (props) => {
    switch (props.imagen) {
      case "../../assets/Placas/placa.doblecara.jpg":
        return (
          <img
            className="placa-1"
            src={require("../../assets/Placas/placa.doblecara.jpg")}
            alt="Descripción de la imagen"
          />
        );
      case "../../assets/Placas/placa.flexible.png":
        return (
          <img
            className="placa-2"
            src={require("../../assets/Placas/placa.flexible.png")}
            alt="Descripción de la imagen"
          />
        );
      case "../../assets/Placas/placa.multicapa.jpg":
        return (
          <img
            className="placa-3"
            src={require("../../assets/Placas/placa.multicapa.jpg")}
            alt="Descripción de la imagen"
          />
        );
      case "../../assets/Placas/placa.unacara.jpg":
        return (
          <img
            className="placa-4"
            src={require("../../assets/Placas/placa.unacara.jpg")}
            alt="Descripción de la imagen"
          />
        );
      case "../../assets/Placas/placas.rigidas-flexibles.jpg":
        return (
          <img
            className="placa-5"
            src={require("../../assets/Placas/placas.rigidas-flexibles.jpg")}
            alt="Descripción de la imagen"
          />
        );
      case "../../assets/Placas/placas.rigidas.jpg":
        return (
          <img
            className="placa-6"
            src={require("../../assets/Placas/placas.rigidas.jpg")}
            alt="Descripción de la imagen"
          />
        );
      case "../../assets/Placas/placa-altafrecuencia.jpg":
        return (
          <img
            className="placa-7"
            src={require("../../assets/Placas/placa-altafrecuencia.jpg")}
            alt="Descripción de la imagen"
          />
        );
      case "../../assets/Placas/placa-aluminio.jpg":
        return (
          <img
            className="placa-8"
            src={require("../../assets/Placas/placa-aluminio.jpg")}
            alt="Descripción de la imagen"
          />
        );
      case "../../assets/Placas/placa-solacapa.jpg":
        return (
          <img
            className="placa-9"
            src={require("../../assets/Placas/placa-solacapa.jpg")}
            alt="Descripción de la imagen"
          />
        );
    }
  };

  return (
    <>
      <Imagenes imagen={props.imagen} />
    </>
  );
};

export default ImagenesPlacas
