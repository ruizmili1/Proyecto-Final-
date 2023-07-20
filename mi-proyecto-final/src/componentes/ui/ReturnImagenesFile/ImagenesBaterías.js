import "./ImagenesBaterías.css";

const ImagenesBaterías = (props) => {
  const Imagenes = (props) => {
    switch (props.imagen) {
      case "../../assets/Pilas/duracell-2a.jpg":
        return (
          <img
            className="duracell-2a"
            src={require("../../assets/Pilas/duracell-2a.jpg")}
            alt="Descripción de la imagen"
          />
        );
        break;
      case "../../assets/Pilas/duracell-3a.jpg":
        return (
          <img
            className="duracell-3a"
            src={require("../../assets/Pilas/duracell-3a.jpg")}
            alt="Descripción de la imagen"
          />
        );
        break;
      case "../../assets/Pilas/duracell-recargable-2a.jpg":
        return (
          <img
            className="duracell-recargable-2a"
            src={require("../../assets/Pilas/duracell-recargable-2a.jpg")}
            alt="Descripción de la imagen"
          />
        );
        break;
      case "../../assets/Pilas/duracell-ultra.jpg":
        return (
          <img
            className="duracell-ultra"
            src={require("../../assets/Pilas/duracell-ultra.jpg")}
            alt="Descripción de la imagen"
          />
        );
        break;
      case "../../assets/Pilas/energizer-2a.jpg":
        return (
          <img
            className="energizer-2a"
            src={require("../../assets/Pilas/energizer-2a.jpg")}
            alt="Descripción de la imagen"
          />
        );
        break;
      case "../../assets/Pilas/energizer-3a.jpg":
        return (
          <img
            className="energizer-3a"
            src={require("../../assets/Pilas/energizer-3a.jpg")}
            alt="Descripción de la imagen"
          />
        );
        break;
      case "../../assets/Pilas/energizer-recargable-2a.jpg":
        return (
          <img
            className="energizer-recargable-2a"
            src={require("../../assets/Pilas/energizer-recargable-2a.jpg")}
            alt="Descripción de la imagen"
          />
        );
        break;
      case "../../assets/Pilas/energizer-recargable-3a.jpg":
        return (
          <img
            className="energizer-recargable-3a"
            src={require("../../assets/Pilas/energizer-recargable-3a.jpg")}
            alt="Descripción de la imagen"
          />
        );
        break;
      case "../../assets/Pilas/maxell-2a.jpg":
        return (
          <img
            className="maxell-2a"
            src={require("../../assets/Pilas/maxell-2a.jpg")}
            alt="Descripción de la imagen"
          />
        );
        break;
      case "../../assets/Pilas/maxell-3a.jpg":
        return (
          <img
            className="maxell-3a"
            src={require("../../assets/Pilas/maxell-3a.jpg")}
            alt="Descripción de la imagen"
          />
        );
        break;
      case "../../assets/Pilas/panasonic-evolta-2a.jpg":
        return (
          <img
            className="panasonic-evolta-2a"
            src={require("../../assets/Pilas/panasonic-evolta-2a.jpg")}
            alt="Descripción de la imagen"
          />
        );
        break;
      case "../../assets/Pilas/panasonic-evolta-3a.jpg":
        return (
          <img
            className="panasonic-evolta-3a"
            src={require("../../assets/Pilas/panasonic-evolta-3a.jpg")}
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
export default ImagenesBaterías;
