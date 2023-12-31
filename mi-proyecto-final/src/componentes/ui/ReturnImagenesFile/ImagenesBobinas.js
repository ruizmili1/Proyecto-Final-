import "./ImagenesBobinas.css";

const ImagenesBobinas = (props) => {
  const Imagenes = (props) => {
    switch (props.imagen) {
      case "../../assets/Bobinas/bobina-blindada.jpg":
        return (
          <img
            className="bobina-1"
            src={require("../../assets/Bobinas/bobina-blindada.jpg")}
            alt="Descripción de la imagen"
          />
        );
      case "../../assets/Bobinas/bobina-de aire-lamina.jpg":
        return (
          <img
            className="bobina-2"
            src={require("../../assets/Bobinas/bobina-de aire-lamina.jpg")}
            alt="Descripción de la imagen"
          />
        );
      case "../../assets/Bobinas//bobina-nucleo-de-aire.jpg":
        return (
          <img
            className="bobina-3"
            src={require("../../assets/Bobinas//bobina-nucleo-de-aire.jpg")}
            alt="Descripción de la imagen"
          />
        );
      case "../../assets/Bobinas/bobina-ferromagnetico.jpg":
        return (
          <img
            className="bobina-4"
            src={require("../../assets/Bobinas/bobina-ferromagnetico.jpg")}
            alt="Descripción de la imagen"
          />
        );
      case "../../assets/Bobinas/bobina-materialferroso.jpg":
        return (
          <img
            className="bobina-5"
            src={require("../../assets/Bobinas/bobina-materialferroso.jpg")}
            alt="Descripción de la imagen"
          />
        );
      case "../../assets/Bobinas/bobina.variable.jpg":
        return (
          <img
            className="bobina-6"
            src={require("../../assets/Bobinas/bobina.variable.jpg")}
            alt="Descripción de la imagen"
          />
        );
        case "../../assets/Bobinas/boninas-ajustables.jpg":
            return (
              <img
                className="bobina-7"
                src={require("../../assets/Bobinas/boninas-ajustables.jpg")}
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
export default ImagenesBobinas;
