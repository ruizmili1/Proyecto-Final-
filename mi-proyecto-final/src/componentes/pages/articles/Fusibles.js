import React, { useState } from "react";
import Card from "../../ui/Card";

const Fusibles = () => {
  const [data, setData] = useState([
    {
      id: 1,
      titulo: "Fusible vidrio",
      descripcion: " 20x5 15A 250V",
      precio: "$799",
      imagen: "../../assets/Fusibles/fusible-20.5.15a.250v.jpg",
    },
    {
      id: 2,
      titulo: "Fusible vidrio",
      descripcion: "20x5 5A 250V",
      precio: "precio",
      imagen: "../../assets/Fusibles/fusible-20.5.5a.250v.jpg",
    },
    {
      id: 3,
      titulo: "Fusible vidrio",
      descripcion: "20x5 2A 250V",
      precio: "precio",
      imagen: "../../assets/Fusibles/fusible-20.5.a2.250v.jpg",
    },
    {
      id: 4,
      titulo: "Fusible vidrio",
      descripcion: "5X20 10A 250V",
      precio: "precio",
      imagen: "../../assets/Fusibles/fusible-5.20.10a.250v.jpg",
    },
    {
      id: 5,
      titulo: "Fusible vidrio",
      descripcion: "6x30 ",
      precio: "precio",
      imagen: "../../assets/Fusibles/fusible-6.30.jpg",
    },
    {
      id: 6,
      titulo: "Fusible vidrio",
      descripcion: "6x32 15A",
      precio: "precio",
      imagen: "../../assets/Fusibles/fusible-6.32.15a.jpg",
    },
    {
      id: 7,
      titulo: "Fusible Nh",
      descripcion: "T0 80A",
      precio: "precio",
      imagen: "../../assets/Fusibles/fusiblenh-t0.80a.jpg",
    },
    {
      id: 8,
      titulo: "Fusible Nh",
      descripcion: "T1 200A",
      precio: "precio",
      imagen: "../../assets/Fusibles/fusiblenh-t1.200a.jpg",
    },
  ]);

  return (
    <>
      <Card data={data} rute={"Fusibles"} />
    </>
  );
};
export default Fusibles;
