import React, { useState } from "react";
import "./Home.css";
import Card from "../ui/Card";

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
      imagen: "imagen",
      descripcion: "la tarjeta 2",
      precio: "precio",
    },
   
  ]);

  

  return (
    <>
        <Card data={data}  rute={'Home'} />
    </>
  );
};
export default Home;
