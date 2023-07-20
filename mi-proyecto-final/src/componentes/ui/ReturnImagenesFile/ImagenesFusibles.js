import "./ImagenesFusibles.css";

const ImagenesFusibles = (props) => {
  const Imagenes = (props) => {
    switch (props.imagen) {
      case "../../assets/Fusibles/fusible-20.5.15a.250v.jpg":
        return (
          <img
            className="fusible-1"
            src={require("../../assets/Fusibles/fusible-20.5.15a.250v.jpg")}
            alt="Descripción de la imagen"
          />
        );
      case "../../assets/Fusibles/fusible-20.5.5a.250v.jpg":
        return (
          <img
            className="fusible-2"
            src={require("../../assets/Fusibles/fusible-20.5.5a.250v.jpg")}
            alt="Descripción de la imagen"
          />
        );
      case "../../assets/Fusibles/fusible-20.5.a2.250v.jpg":
        return (
          <img
            className="fusible-3"
            src={require("../../assets/Fusibles/fusible-20.5.a2.250v.jpg")}
            alt="Descripción de la imagen"
          />
        );
      case "../../assets/Fusibles/fusible-5.20.10a.250v.jpg":
        return (
          <img
            className="fusible-4"
            src={require("../../assets/Fusibles/fusible-5.20.10a.250v.jpg")}
            alt="Descripción de la imagen"
          />
        );
      case "../../assets/Fusibles/fusible-6.30.jpg":
        return (
          <img
            className="fusible-5"
            src={require("../../assets/Fusibles/fusible-6.30.jpg")}
            alt="Descripción de la imagen"
          />
        );
      case "../../assets/Fusibles/fusible-6.32.15a.jpg":
        return (
          <img
            className="fusible-6"
            src={require("../../assets/Fusibles/fusible-6.32.15a.jpg")}
            alt="Descripción de la imagen"
          />
        );
      case "../../assets/Fusibles/fusiblenh-t0.80a.jpg":
        return (
          <img
            className="fusible-7"
            src={require("../../assets/Fusibles/fusiblenh-t0.80a.jpg")}
            alt="Descripción de la imagen"
          />
        );
      case "../../assets/Fusibles/fusiblenh-t1.200a.jpg":
        return (
          <img
            className="fusible-8"
            src={require("../../assets/Fusibles/fusiblenh-t1.200a.jpg")}
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
export default ImagenesFusibles;
