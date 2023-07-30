import React, { useState } from "react";
import Card from "../../ui/Card";

const Capacitores = () => {
  const [data, setData] = useState([
    {
      id: 1,
      titulo: " Capacitor",
      descripcion: "Capacitor electrolítico de 100 35V",
      precio: "$300 ARS",
      imagen: "../../assets/Capacitores/500_500-1000x35.jpg",
    },
    {
      id: 2,
      titulo: " Capacitor",
      descripcion: "Capacitor electrolítico 330 10V",
      precio: "$420 ARS",
      imagen: "../../assets/Capacitores/Capacitor-Electrolitico-3300uf-10v.jpg",
    },
    {
      id: 3,
      titulo: " Capacitor",
      descripcion: "Capacitor cerámico de tubo 100 500V",
      precio: "$368 ARS",
      imagen: "../../assets/Capacitores/ceramico-detubo.100pf.500v.jpg",
    },
    {
      id: 4,
      titulo: " Capacitor",
      descripcion: "Capacitor cerámico de tubo",
      precio: "$368 ARS",
      imagen: "../../assets/Capacitores/ceramico-detubo.jpg",
    },
    {
      id: 5,
      titulo: " Capacitor",
      descripcion: "",
      precio: "$310 ARS",
      imagen: "../../assets/Capacitores/ceramico-lenteja 104.jpg",
    },
    {
      id: 6,
      titulo: " Capacitor",
      descripcion: "Capacitor de cerámico de lenteja 152",
      precio: "$299 ARS",
      imagen: "../../assets/Capacitores/ceramico-lenteja 152.jpg",
    },
    {
      id: 7,
      titulo: " Capacitor",
      descripcion: "Capacitor de gota 150 ",
      precio: "$299 ARS",
      imagen: "../../assets/Capacitores/gota150uv16.jpg",
    },
    {
      id: 8,
      titulo: " Capacitor",
      descripcion: "Capacitor poliéster 2.2",
      precio: "$200 ARS",
      imagen: "../../assets/Capacitores/poliester-2.2uf-400v.jpg",
    },
    {
      id: 9,
      titulo: " Capacitor",
      descripcion: "Capacitor poliéster 6.8",
      precio: "$250 ARS",
      imagen: "../../assets/Capacitores/poliester-6.8-400v.jpg",
    },
    {
      id: 10,
      titulo: " Capacitor",
      descripcion: "Capacitor tantalio 47",
      precio: "$340 ARS",
      imagen: "../../assets/Capacitores/tantalo-gota-47.20v.jpg",
    },
    {
      id: 11,
      titulo: " Capacitor",
      descripcion: "Capacitor de tantalio 100",
      precio: "$300 ARS",
      imagen: "../../assets/Capacitores/tantalo-gota.100.16v.jpg",
    },
    {
      id: 12,
      titulo: " Capacitor",
      descripcion: "Capacitor de gota ",
      precio: "$330 ARS",
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
