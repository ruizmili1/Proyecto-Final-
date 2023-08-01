import React, { useState } from "react";
import "./Novedades.css";
import Card from "../ui/Card";



const Novedades = () => {
  const [data, setData] = useState([
    {
      id: 1,
      titulo: " Oferta",
      imagen:"../../assets/Pilas/ofertaduracell4.jpg",
      descripcion: "Pilas duracell recargables 2A x 4U",
      precio: "$3.000,00 ARS",
      
    },
    {
      id: 2,
      titulo: " Oferta",
      imagen:"../../assets/DiodosLed/tira-led-completa.jpg",
      descripcion: "Kit Tira Luces Led Rgb Bluetooth Control Fuente App Completa",
      precio: "$4.999,00 ARS",
      
    },
    {
      id: 3,
      titulo: " Oferta",
      imagen:"../../assets/Fusibles/oferta-fusibles.jpg",
      descripcion: "Fusibles 2 packs de 10U ",
      precio: "$2.000,00 ARS",
      
    },
    {
      id: 4,
      titulo: " Oferta ",
      imagen:"../../assets/Cables/cablesofertax3.jpg",
      descripcion: " Cable unipolar normalizado 1.5 100mts Pack de 3 rollos (a elección) ",
      precio: "$22.720,50 ARS",
      
    },
   
   
  ]);

  

  return (
    <>
        <Card data={data}  rute={'Novedades'} />
    </>
  );
};
export default Novedades;
