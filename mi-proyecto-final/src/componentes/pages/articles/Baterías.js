import React, { useState } from "react";
import Card from "../../ui/Card";

const Baterías = () => {
  const [data, setData] = useState([
    {
      id: 1,
      titulo: " Baterías",
      descripcion: "Pila Duracell 2A (doble a)",
      precio: "$382,25 ARS",
      imagen: "../../assets/Pilas/duracell-2a.jpg",
    },
    {
      id: 2,
      titulo: "Baterías",
      descripcion: "Pila Duracell 3A (triple a)",
      precio: "$372,50 ARS",
      imagen: "../../assets/Pilas/duracell-3a.jpg",
    },
    {
      id: 3,
      titulo: "Baterías",
      descripcion:"Pila Duracell recargable 2a (doble a)",
      precio: "$1.800,00 ARS",
      imagen: "../../assets/Pilas/duracell-recargable-2a.jpg",
    },
    {
      id: 4,
      titulo: "Baterías",
      descripcion: "Pila Duracell ultra",
      precio: "$1.600,00 ARS",
      imagen: "../../assets/Pilas/duracell-ultra.jpg",
    },
    {
      id: 5,
      titulo: "Baterías",
      descripcion: "Pila Energizer 2A (doble a)",
      precio: "$200,00 ARS",
      imagen: "../../assets/Pilas/energizer-2a.jpg",
    },
    {
      id: 6,
      titulo: "Baterías",
      descripcion: "Pila Energizer 3A (triple a)",
      precio: "$600,00 ARS",
      imagen: "../../assets/Pilas/energizer-3a.jpg",
    },
    {
      id: 7,
      titulo: "Baterías",
      descripcion: "Pilas Energizer recargable 2A (doble a)",
      precio: "$3.700,00 ARS",
      imagen: "../../assets/Pilas/energizer-recargable-2a.jpg",
    },
    {
      id: 8,
      titulo: "Baterías",
      descripcion: "Pilas Energizer recargable 3A (triple a)",
      precio: "$2.815,00 ARS",
      imagen: "../../assets/Pilas/energizer-recargable-3a.jpg",
    },
    {
      id: 9,
      titulo: "Baterías",
      descripcion: "Pilas Maxell 2A (doble a)",
      precio: "$352,25 ARS",
      imagen: "../../assets/Pilas/maxell-2a.jpg",
    },
    {
      id: 10,
      titulo: "Baterías",
      descripcion: "Pila Maxell 3A (triple a)",
      precio: "$302,40 ARS",
      imagen: "../../assets/Pilas/maxell-3a.jpg",
    },
    {
      id: 11,
      titulo: "Baterías",
      descripcion: "Pila Panasonic 2A (doble a)",
      precio: "$264,00",
      imagen: "../../assets/Pilas/panasonic-evolta-2a.jpg",
    },
    {
      id: 12,
      titulo: "Baterías",
      descripcion: "Pila Panasonic 3A (triple a)",
      precio: "$190,00 ARS",
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
