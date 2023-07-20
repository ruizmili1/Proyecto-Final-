import React, { useState } from "react";
import Card from "../../ui/Card";

const Placas = () => {
    const [data, setData] = useState([
      {
        id: 1,
        titulo: " Placas",
        descripcion: "Circuito impreso doble-cara",
        precio: "precio",
        imagen: "../../assets/Placas/placa.doblecara.jpg",
      },
      {
        id: 2,
        titulo: " Placas",
        descripcion: "Circuito impreso flexible",
        precio: "precio",
        imagen: "../../assets/Placas/placa.flexible.png",
      },
      {
        id: 3,
        titulo: " Placas",
        descripcion: "Circuito impreso multicapa",
        precio: "precio",
        imagen: "../../assets/Placas/placa.multicapa.jpg",
      },
      {
        id: 4,
        titulo: " Placas",
        descripcion: "Circuito impreso una-cara",
        precio: "precio",
        imagen: "../../assets/Placas/placa.unacara.jpg",
      },
      {
        id: 5,
        titulo: " Placas",
        descripcion: "Circuito impreso rígidos-flexibles",
        precio: "precio",
        imagen: "../../assets/Placas/placas.rigidas-flexibles.jpg",
      },
      {
        id: 6,
        titulo: " Placas",
        descripcion: "Circuito rígidos",
        precio: "precio",
        imagen: "../../assets/Placas/placas.rigidas.jpg",
      },
      {
        id: 7,
        titulo: " Placas",
        descripcion: "Circuito de alta frecuencia",
        precio: "precio",
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
  