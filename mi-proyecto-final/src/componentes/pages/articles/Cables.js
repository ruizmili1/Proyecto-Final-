import React, { useState } from "react";
import Card from "../../ui/Card";



const Cables = () => {
  const [data, setData] = useState([
    {
      id: 20,
      titulo: " Cables ",
      descripcion: " Cable normalizado, color marrón de 1.5 mm",
      precio: "$8.910,00 ARS",
      imagen: "../../assets/Cables/cable unipolar normalizado 1.5mm marron.jpg",
    },
    {
      id: 21,
      titulo: " Cables ",
      descripcion: " Cable unipolar normalizado, color rojo de 1.5mm ",
      precio: "$8.910,00 ARS",
      imagen: "../../assets/Cables/cable unipolar normalizado 1.5mm rojo.jpg",
    },
    {
      id: 22,
      titulo: " Cables ",
      descripcion: "Cable unipolar normalizado, color celeste de 1.5mm  ",
      precio: "$8.910,00 ARS",
      imagen: "../../assets/Cables/cable unipolar normalizado celeste.jpg",
    },
    {
      id: 23,
      titulo: " Cables ",
      descripcion: " Cable unipolar normalizado, color negro de 1.5mm ",
      precio: "$8.910,00 ARS",
      imagen: "../../assets/Cables/cable unipolar normalizado negro.jpg",
    },
    {
      id: 24,
      titulo: " Cables ",
      descripcion: " Cable unipolar normalizado, color amarilo y verde de 1.5mm ",
      precio: "$8.910,00 ARS",
      imagen: "../../assets/Cables/cable unipolar normalizado tierra.jpg",
    },
    {
      id: 25,
      titulo: " Cables ",
      descripcion: " Cable utp exterior ",
      precio: "$8.910,00 ARS",
      imagen: "../../assets/Cables/cable utp exterior.jpg",
    },
    {
      id: 26,
      titulo: " Cables ",
      descripcion: "Cable de alambre de soldar de 8 colores, 250 mts",
      precio: "$6.326,00 ARS",
      imagen: "../../assets/Cables/cable-alambre-soldar-8c.jpg",
    },
    {
      id: 27,
      titulo: " Cables ",
      descripcion: "Pack 40 cables Dupont macho/hembra de 20cm",
      precio: "$1.799,00 ARS",
      imagen: "../../assets/Cables/cable-macho7hembra.jpg",
    },
  ]);

  return (
    <>
      <Card data={data} rute={"Cables"} />
    </>
  );
};
export default Cables;
