import React from "react";
import "./Card.css";
import ImagenesLuces from "./ReturnImagenesFile/ImagenesLuces";
import ImagenesCables from "./ReturnImagenesFile/ImagenesCables";
import ImagenesBaterías from "./ReturnImagenesFile/ImagenesBaterías";
import ImagenesResistencias from "./ReturnImagenesFile/ImagenesResistencias";
import ImagenesFusibles from "./ReturnImagenesFile/ImagenesFusibles";
import ImagenesPlacas from "./ReturnImagenesFile/ImagenesPlacas";
import ImagenesBobinas from "./ReturnImagenesFile/ImagenesBobinas";
import ImagenesCapacitores from "./ReturnImagenesFile/ImagenesCapacitores";
import ImagenesNovedades from "./ReturnImagenesFile/ImagenesNovedades";
import { BsCartPlus } from "react-icons/bs";


const Card = (props) => {
  const { data, rute } = props;
  const ReturnImagen = (props) => {
    switch (rute) {
      case "Luces":
        return <ImagenesLuces imagen={props.imagen} />;
        
      case "Cables":
        return <ImagenesCables imagen={props.imagen} />;
     
      case "Baterías":
        return <ImagenesBaterías imagen={props.imagen} />;
       
      case "Resistencias":
        return <ImagenesResistencias imagen={props.imagen} />;
       
      case "Fusibles":
        return <ImagenesFusibles imagen={props.imagen} />;
       
      case "Placas":
        return <ImagenesPlacas imagen={props.imagen} />;
        
      case "Bobinas":
        return <ImagenesBobinas imagen={props.imagen} />;
       
      case "Capacitores":
        return <ImagenesCapacitores imagen={props.imagen} />;
        
      case "Novedades":
        return <ImagenesNovedades imagen={props.imagen} />;
        
      default:
        
        break;
    }
  };

  const CardBody = ( props) => {
    const { item } = props;

    return (
      <>
        <div className="card">
          <div className="image">
            <ReturnImagen imagen={item.imagen} />
          </div>
          <div className="titulo">{item.titulo}</div>
          <div className="descripcion">{item.descripcion}</div>
          <div className="precio">{item.precio}</div>
          <div style={{ margin: "10px" }}>
            <BsCartPlus />{" "}
            <button className="carrito-boton"> Agregar al carrito </button>
          </div>
        </div>
      </>
    );
  };

  const Map = () => {
    return (
      <>
        {data.map((item, key) => {
          return (
            <div key={key} style={{ margin: "20px" }}>
              <CardBody item={item} />
            </div>
          );
        })}
      </>
    );
  };

  return (
    <>
      <div className="containerCard">
        <Map />
      </div>
    </>
  );
};

export default Card;
