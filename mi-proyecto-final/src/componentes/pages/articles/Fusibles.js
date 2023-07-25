import React, { useState } from "react";
import Card from "../../ui/Card";

const Fusibles = () => {
  const [data, setData] = useState([
    {
      id: 1,
      titulo: "Fusible vidrio",
      descripcion: " 20x5 15A 250V",
      precio: "$799 ARS x 10U",
      imagen: "../../assets/Fusibles/fusible-20.5.15a.250v.jpg",
    },
    {
      id: 2,
      titulo: "Fusible vidrio",
      descripcion: "20x5 5A 250V",
      precio: "$799 ARS x 10U",
      imagen: "../../assets/Fusibles/fusible-20.5.5a.250v.jpg",
    },
    {
      id: 3,
      titulo: "Fusible vidrio",
      descripcion: "20x5 2A 250V",
      precio: "$799 ARS x 10U",
      imagen: "../../assets/Fusibles/fusible-20.5.a2.250v.jpg",
    },
    {
      id: 4,
      titulo: "Fusible vidrio",
      descripcion: "5X20 10A 250V",
      precio: "$1.329,00 ARS X10U",
      imagen: "../../assets/Fusibles/fusible-5.20.10a.250v.jpg",
    },
    {
      id: 5,
      titulo: "Fusible vidrio",
      descripcion: "6x30 ",
      precio: "$1.683,00 ARS X10U",
      imagen: "../../assets/Fusibles/fusible-6.30.jpg",
    },
    {
      id: 6,
      titulo: "Fusible vidrio",
      descripcion: "6x32 15A",
      precio: "$1.683,00 ARS X10U",
      imagen: "../../assets/Fusibles/fusible-6.32.15a.jpg",
    },
  ]);

  return (
    <>
      <Card data={data} rute={"Fusibles"} />
    </>
  );
};
export default Fusibles;
