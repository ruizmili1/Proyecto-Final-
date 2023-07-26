import React, { useState } from "react";
import "./Card.css";
import ImagenesLuces from "./ReturnImagenesFile/ImagenesLuces";
import ImagenesCables from "./ReturnImagenesFile/ImagenesCables";
import ImagenesBaterías from "./ReturnImagenesFile/ImagenesBaterías";
import ImagenesResistencias from "./ReturnImagenesFile/ImagenesResistencias";
import ImagenesFusibles from "./ReturnImagenesFile/ImagenesFusibles";
import ImagenesPlacas from "./ReturnImagenesFile/ImagenesPlacas";
import ImagenesBobinas from "./ReturnImagenesFile/ImagenesBobinas";
import ImagenesCapacitores from "./ReturnImagenesFile/ImagenesCapacitores";

const Card = (props) => {
  const { data, rute } = props;
  const ReturnImagen = (props) => {
    switch (rute) {
      case "Luces":
        return <ImagenesLuces imagen={props.imagen} />;
        break;
      case "Cables":
        return <ImagenesCables imagen={props.imagen} />;
        break;
      case "Baterías":
        return <ImagenesBaterías imagen={props.imagen} />;
        break;
      case "Resistencias":
        return <ImagenesResistencias imagen={props.imagen} />;
        break;
      case "Fusibles":
        return <ImagenesFusibles imagen={props.imagen} />;
        break;
      case "Placas":
        return <ImagenesPlacas imagen={props.imagen} />;
        break;
      case "Bobinas":
        return <ImagenesBobinas imagen={props.imagen} />;
        break;
      case "Capacitores":
        return <ImagenesCapacitores imagen={props.imagen} />;
        break;
    }
  };
  const CardBody = (props) => {
    const { item } = props;

    return (
      <>
        <div className="card">
          <div>
            <ReturnImagen imagen={item.imagen} />
          </div>
          <div className="titulo">{item.titulo}</div>
          <div className="descripcion">{item.descripcion}</div>
          <div className="precio">{item.precio}</div>
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
