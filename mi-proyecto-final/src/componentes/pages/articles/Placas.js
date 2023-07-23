import React, { useState } from "react";
import Card from "../../ui/Card";

const Placas = () => {
    const [data, setData] = useState([
      {
        id: 1,
        titulo: " Placas",
        descripcion: "Circuito impreso doble-cara",
        precio: "$971,00 ARS",
        imagen: "../../assets/Placas/placa.doblecara.jpg",
      },
      {
        id: 2,
        titulo: " Placas",
        descripcion: "Circuito impreso flexible",
        precio: "$1.070,84 ARS",
        imagen: "../../assets/Placas/placa.flexible.png",
      },
      {
        id: 3,
        titulo: " Placas",
        descripcion: "Circuito impreso multicapa",
        precio: "$1.500,00 ARS",
        imagen: "../../assets/Placas/placa.multicapa.jpg",
      },
      {
        id: 4,
        titulo: " Placas",
        descripcion: "Circuito impreso una-cara",
        precio: "$1.115,00 ARS",
        imagen: "../../assets/Placas/placa.unacara.jpg",
      },
      {
        id: 5,
        titulo: " Placas",
        descripcion: "Circuito impreso rígidos-flexibles",
        precio: "$700,00 ARS",
        imagen: "../../assets/Placas/placas.rigidas-flexibles.jpg",
      },
      {
        id: 6,
        titulo: " Placas",
        descripcion: "Circuito rígidos",
        precio: "$500,00 ARS",
        imagen: "../../assets/Placas/placas.rigidas.jpg",
      },
      {
        id: 7,
        titulo: " Placas",
        descripcion: "Circuito de alta frecuencia",
        precio: "",
        imagen: "../../assets/Placas/placa-altafrecuencia.jpg",
      },
      {
        id: 8,
        titulo: " Placas",
        descripcion: "Circuito de aluminio ",
        precio: "precio",
        imagen: "../../assets/Placas/placa-aluminio.jpg",
      },
      {
        id: 9,
        titulo: " Placas",
        descripcion: "Circuito de una sola capa",
        precio: "precio",
        imagen: "../../assets/Placas/placa-solacapa.jpg",
      },
    ]);
  
    return (
      <>
        <Card data={data} rute={"Placas"} />
      </>
    );
  };
  export default Placas;
  