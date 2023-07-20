import React, { useState } from "react";
import Card from "../../ui/Card";

const Baterías = () => {
  const [data, setData] = useState([
    {
      id: 1,
      titulo: " Baterías",
      descripcion: "Pila Duracell 2A (doble a)",
      precio: "$ 200 ",
      imagen: "../../assets/Pilas/duracell-2a.jpg",
    },
    {
      id: 2,
      titulo: "Baterías",
      descripcion: "Pila Duracell 3A (triple a)",
      precio: "",
      imagen: "../../assets/Pilas/duracell-3a.jpg",
    },
    {
      id: 3,
      titulo: "Baterías",
      descripcion:"Pila Duracell recargable 2a (doble a)",
      precio: "precio",
      imagen: "../../assets/Pilas/duracell-recargable-2a.jpg",
    },
    {
      id: 4,
      titulo: "Baterías",
      descripcion: "Pila Duracell ultra",
      precio: "precio",
      imagen: "../../assets/Pilas/duracell-ultra.jpg",
    },
    {
      id: 5,
      titulo: "Baterías",
      descripcion: "Pila Energizer 2A (doble a)",
      precio: "precio",
      imagen: "../../assets/Pilas/energizer-2a.jpg",
    },
    {
      id: 6,
      titulo: "Baterías",
      descripcion: "Pila Energizer 3A (triple a)",
      precio: "precio",
      imagen: "../../assets/Pilas/energizer-3a.jpg",
    },
    {
      id: 7,
      titulo: "Baterías",
      descripcion: "Pilas Energizer recargable 2A (doble a)",
      precio: "precio",
      imagen: "../../assets/Pilas/energizer-recargable-2a.jpg",
    },
    {
      id: 8,
      titulo: "Baterías",
      descripcion: "Pilas Energizer recargable 3A (triple a)",
      precio: "precio",
      imagen: "../../assets/Pilas/energizer-recargable-3a.jpg",
    },
    {
      id: 9,
      titulo: "Baterías",
      descripcion: "Pilas Maxell 2A (doble a)",
      precio: "precio",
      imagen: "../../assets/Pilas/maxell-2a.jpg",
    },
    {
      id: 10,
      titulo: "Baterías",
      descripcion: "Pila Maxell 3A (triple a)",
      precio: "precio",
      imagen: "../../assets/Pilas/maxell-3a.jpg",
    },
    {
      id: 11,
      titulo: "Baterías",
      descripcion: "Pila Panasonic 2A (doble a)",
      precio: "precio",
      imagen: "../../assets/Pilas/panasonic-evolta-2a.jpg",
    },
    {
      id: 12,
      titulo: "Baterías",
      descripcion: "Pila Panasonic 3A (triple a)",
      precio: "800",
      imagen: "../../assets/Pilas/panasonic-evolta-3a.jpg",
    },
  ]);

  return (
    <>
      <Card data={data} rute={"Baterías"} />
    </>
  );
};
export default Baterías;
