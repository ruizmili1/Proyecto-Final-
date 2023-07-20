import "./ImagenesResistencias.css";

const ImagenesResistencias = (props) => {
  const Imagenes = (props) => {
    switch (props.imagen) {
      case "../../assets/Resistencias/especiales/Magnetoresistor/magnetoresistor-0.125w.jpg":
        return (
          <img
            className="magnetoresistor-1"
            src={require("../../assets/Resistencias/especiales/Magnetoresistor/magnetoresistor-0.125w.jpg")}
            alt="Descripción de la imagen"
          />
        );
      case "../../assets/Resistencias/especiales/Magnetoresistor/magnetoresistor-1.2w.jpg":
        return (
          <img
            className="magnetoresistor-2"
            src={require("../../assets/Resistencias/especiales/Magnetoresistor/magnetoresistor-1.2w.jpg")}
            alt="Descripción de la imagen"
          />
        );
      case "../../assets/Resistencias/especiales/Magnetoresistor/magnetoresistor-1.4w.jpg":
        return (
          <img
            className="magnetoresistor-3"
            src={require("../../assets/Resistencias/especiales/Magnetoresistor/magnetoresistor-1.4w.jpg")}
            alt="Descripción de la imagen"
          />
        );
      case "../../assets/Resistencias/especiales/termistore/ntc-1.5D-25.jpg":
        return (
          <img
            className="termistore-1"
            src={require("../../assets/Resistencias/especiales/termistore/ntc-1.5D-25.jpg")}
            alt="Descripción de la imagen"
          />
        );
      case "../../assets/Resistencias/especiales/termistore/ntc-10D-9.jpg":
        return (
          <img
            className="termistore-2"
            src={require("../../assets/Resistencias/especiales/termistore/ntc-10D-9.jpg")}
            alt="Descripción de la imagen"
          />
        );
      case "../../assets/Resistencias/especiales/termistore/ntc-16D-9.jpg":
        return (
          <img
            className="termistore-3"
            src={require("../../assets/Resistencias/especiales/termistore/ntc-16D-9.jpg")}
            alt="Descripción de la imagen"
          />
        );
      case "../../assets/Resistencias/especiales/termistore/ntc-2.5D_11.jpg":
        return (
          <img
            className="termistore-4"
            src={require("../../assets/Resistencias/especiales/termistore/ntc-2.5D_11.jpg")}
            alt="Descripción de la imagen"
          />
        );
      case "../../assets/Resistencias/especiales/termistore/ntc-5D-15.jpg":
        return (
          <img
            className="termistore-5"
            src={require("../../assets/Resistencias/especiales/termistore/ntc-5D-15.jpg")}
            alt="Descripción de la imagen"
          />
        );
      case "../../assets/Resistencias/especiales/termistore/ntc-8D-20.jpg":
        return (
          <img
            className="termistore-6"
            src={require("../../assets/Resistencias/especiales/termistore/ntc-8D-20.jpg")}
            alt="Descripción de la imagen"
          />
        );
      case "../../assets/Resistencias/especiales/termistore/ptc 120.jpg":
        return (
          <img
            className="termistore-7"
            src={require("../../assets/Resistencias/especiales/termistore/ptc 120.jpg")}
            alt="Descripción de la imagen"
          />
        );
      case "../../assets/Resistencias/especiales/termistore/ptc-831.jpg":
        return (
          <img
            className="termistore-8"
            src={require("../../assets/Resistencias/especiales/termistore/ptc-831.jpg")}
            alt="Descripción de la imagen"
          />
        );
      case "../../assets/Resistencias/especiales/termistore/ptc-850.jpg":
        return (
          <img
            className="termistore-9"
            src={require("../../assets/Resistencias/especiales/termistore/ptc-850.jpg")}
            alt="Descripción de la imagen"
          />
        );
      case "../../assets/Resistencias/especiales/fotoresistor-LDR.jpg":
        return (
          <img
            className="fotoresistor-10"
            src={require("../../assets/Resistencias/especiales/fotoresistor-LDR.jpg")}
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

export default ImagenesResistencias;
