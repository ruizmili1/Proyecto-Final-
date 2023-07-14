import React, { useState } from "react";
import "./Home.css";

const Home = () => {
  const [data, setData] = useState([
    {
      id: 1,
      titulo: "tarjeta 1",
      imagen:"imagen",
      descripcion: "la tarjeta 1",
      precio: "precio",
      
    },
    {
      id: 2,
      titulo: "tarjeta 2",
      imagen:"imagen",
      descripcion: "la tarjeta 2",
      precio: "precio",
    },
    {
      id: 3,
      titulo: "tarjeta 3",
      imagen: "imagen",
      descripcion: "la tarjeta 3",
      precio: "precio",
    },
    {
      id: 4,
      titulo: "tarjeta 4",
      imagen:"imagen",
      descripcion: "la tarjeta 4",
      precio: "precio",
    },
  ]);

  const Card = (props) => {
    const { item, key } = props;
    return (
      <>
        <div className="container">
          <div className="card">
            <div className="content">
              <div className="titulo">{item.titulo}</div>
              <div className="descripcion">{item.descripcion}</div>
              <div className="precio">{item.precio}</div>
            </div>
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
            <div key={key}>
              <Card item={item} />
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
export default Home;
