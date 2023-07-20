import "./ImagenesCapacitores.css";

const ImagenesCapacitores = (props) => {
  const Imagenes = (props) => {
    switch (props.imagen) {
      case "../../assets/Capacitores/500_500-1000x35.jpg":
        return (
          <img
            className="capacitor-1"
            src={require("../../assets/Capacitores/500_500-1000x35.jpg")}
            alt="Descripción de la imagen"
          />
        );
      case "../../assets/Capacitores/Capacitor-Electrolitico-3300uf-10v.jpg":
        return (
          <img
            className="capacitor-2"
            src={require("../../assets/Capacitores/Capacitor-Electrolitico-3300uf-10v.jpg")}
            alt="Descripción de la imagen"
          />
        );
      case "../../assets/Capacitores/ceramico-detubo.100pf.500v.jpg":
        return (
          <img
            className="capacitor-3"
            src={require("../../assets/Capacitores/ceramico-detubo.100pf.500v.jpg")}
            alt="Descripción de la imagen"
          />
        );
      case "../../assets/Capacitores/ceramico-detubo.jpg":
        return (
          <img
            className="capacitor-4"
            src={require("../../assets/Capacitores/ceramico-detubo.jpg")}
            alt="Descripción de la imagen"
          />
        );
      case "../../assets/Capacitores/ceramico-lenteja 104.jpg":
        return (
          <img
            className="capacitor-5"
            src={require("../../assets/Capacitores/ceramico-lenteja 104.jpg")}
            alt="Descripción de la imagen"
          />
        );
      case "../../assets/Capacitores/ceramico-lenteja 152.jpg":
        return (
          <img
            className="capacitor-6"
            src={require("../../assets/Capacitores/ceramico-lenteja 152.jpg")}
            alt="Descripción de la imagen"
          />
        );
      case "../../assets/Capacitores/gota150uv16.jpg":
        return (
          <img
            className="capacitor-7"
            src={require("../../assets/Capacitores/gota150uv16.jpg")}
            alt="Descripción de la imagen"
          />
        );
      case "../../assets/Capacitores/poliester-2.2uf-400v.jpg":
        return (
          <img
            className="capacitor-8"
            src={require("../../assets/Capacitores/poliester-2.2uf-400v.jpg")}
            alt="Descripción de la imagen"
          />
        );
      case "../../assets/Capacitores/poliester-6.8-400v.jpg":
        return (
          <img
            className="capacitor-9"
            src={require("../../assets/Capacitores/poliester-6.8-400v.jpg")}
            alt="Descripción de la imagen"
          />
        );
      case "../../assets/Capacitores/tantalo-gota-47.20v.jpg":
        return (
          <img
            className="capacitor-10"
            src={require("../../assets/Capacitores/tantalo-gota-47.20v.jpg")}
            alt="Descripción de la imagen"
          />
        );
      case "../../assets/Capacitores/tantalo-gota.100.16v.jpg":
        return (
          <img
            className="capacitor-11"
            src={require("../../assets/Capacitores/tantalo-gota.100.16v.jpg")}
            alt="Descripción de la imagen"
          />
        );
      case "../../assets/Capacitores/tantalo-gota.4.7.35v.jpg":
        return (
          <img
            className="capacitor-12"
            src={require("../../assets/Capacitores/tantalo-gota.4.7.35v.jpg")}
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
export default ImagenesCapacitores;
