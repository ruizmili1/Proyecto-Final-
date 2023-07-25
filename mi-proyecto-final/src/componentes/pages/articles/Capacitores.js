import React, { useState } from "react";
import Card from "../../ui/Card";

const Capacitores = () => {
  const [data, setData] = useState([
    {
      id: 1,
      titulo: " Capacitor",
      descripcion: "capacitor electrolítico de 1000uf",
      precio: "precio",
      imagen: "../../assets/Capacitores/500_500-1000x35.jpg",
    },
    {
      id: 2,
      titulo: " Capacitor",
      descripcion: "",
      precio: "precio",
      imagen: "../../assets/Capacitores/Capacitor-Electrolitico-3300uf-10v.jpg",
    },
    {
      id: 3,
      titulo: " Capacitor",
      descripcion: "",
      precio: "precio",
      imagen: "../../assets/Capacitores/ceramico-detubo.100pf.500v.jpg",
    },
    {
      id: 4,
      titulo: " Capacitor",
      descripcion: "",
      precio: "precio",
      imagen: "../../assets/Capacitores/ceramico-detubo.jpg",
    },
    {
      id: 5,
      titulo: " Capacitor",
      descripcion: "",
      precio: "precio",
      imagen: "../../assets/Capacitores/ceramico-lenteja 104.jpg",
    },
    {
      id: 6,
      titulo: " Capacitor",
      descripcion: "",
      precio: "precio",
      imagen: "../../assets/Capacitores/ceramico-lenteja 152.jpg",
    },
    {
      id: 7,
      titulo: " Capacitor",
      descripcion: "",
      precio: "precio",
      imagen: "../../assets/Capacitores/gota150uv16.jpg",
    },
    {
      id: 8,
      titulo: " Capacitor",
      descripcion: "",
      precio: "precio",
      imagen: "../../assets/Capacitores/poliester-2.2uf-400v.jpg",
    },
    {
      id: 9,
      titulo: " Capacitor",
      descripcion: "",
      precio: "precio",
      imagen: "../../assets/Capacitores/poliester-6.8-400v.jpg",
    },
    {
      id: 10,
      titulo: " Capacitor",
      descripcion: "",
      precio: "precio",
      imagen: "../../assets/Capacitores/tantalo-gota-47.20v.jpg",
    },
    {
      id: 11,
      titulo: " Capacitor",
      descripcion: "",
      precio: "precio",
      imagen: "../../assets/Capacitores/tantalo-gota.100.16v.jpg",
    },
    {
      id: 12,
      titulo: " Capacitor",
      descripcion: "",
      precio: "precio",
      imagen: "../../assets/Capacitores/tantalo-gota.4.7.35v.jpg",
    },
  ]);

  return (
    <>
      <Card data={data} rute={"Capacitores"} />
    </>
  );
};
export default Capacitores;
