import React, { useState } from "react";
import Card from "../../ui/Card";
import { Header } from "../../Header/Header";


const Cables = () => {
  const [data, setData] = useState([
    {
      id: 1,
      titulo: " Cables ",
      descripcion: " Cable normalizado, color marrón de 1.5 mm",
      precio: "precio",
      imagen: "../../assets/Cables/cable unipolar normalizado 1.5mm marron.jpg",
    },
    {
      id: 2,
      titulo: " Cables ",
      descripcion: " Cable unipolar normalizado, color rojo de 1.5mm ",
      precio: "precio",
      imagen: "../../assets/Cables/cable unipolar normalizado 1.5mm rojo.jpg",
    },
    {
      id: 3,
      titulo: " Cables ",
      descripcion: "Cable unipolar normalizado, color celeste de 1.5mm  ",
      precio: "precio",
      imagen: "../../assets/Cables/cable unipolar normalizado celeste.jpg",
    },
    {
      id: 4,
      titulo: " Cables ",
      descripcion: " Cable unipolar normalizado, color negro de 1.5mm ",
      precio: "precio",
      imagen: "../../assets/Cables/cable unipolar normalizado negro.jpg",
    },
    {
      id: 5,
      titulo: " Cables ",
      descripcion: " Cable unipolar normalizado, color tierra de 1.5mm ",
      precio: "precio",
      imagen: "../../assets/Cables/cable unipolar normalizado tierra.jpg",
    },
    {
      id: 6,
      titulo: " Cables ",
      descripcion: " Cable utp exterior ",
      precio: "precio",
      imagen: "../../assets/Cables/cable utp exterior.jpg",
    },
  ]);

  return (
    <>
      <Card data={data} rute={"Cables"} />
    </>
  );
};
export default Cables;
