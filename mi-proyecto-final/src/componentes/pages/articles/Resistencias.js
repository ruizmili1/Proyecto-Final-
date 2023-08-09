import React from "react";
import Card from "../../ui/Card";

const Resistencias = () => {
     let data =[
      {
        id: 1,
        titulo: " Resistencias",
        descripcion: "Termistore especiales NTC 1.5D-25 ",
        precio: "$946",
        imagen: "../../assets/Resistencias/especiales/termistore/ntc-1.5D-25.jpg",
      },
      {
        id: 2,
        titulo: " Resistencias",
        descripcion: "Termistore especiales NTC 10D-9",
        precio: "$1.000,00 ARS",
        imagen: "../../assets/Resistencias/especiales/termistore/ntc-10D-9.jpg",
      },
      {
        id: 3,
        titulo: " Resistencias",
        descripcion: "Termistore especiales NTC 16D-9",
        precio: "$697",
        imagen: "../../assets/Resistencias/especiales/termistore/ntc-16D-9.jpg",
      },
      {
        id: 4,
        titulo: " Resistencias",
        descripcion: "Termistore especiales NTC 2.5D-11",
        precio: "",
        imagen: "../../assets/Resistencias/especiales/termistore/ntc-2.5D_11.jpg",
      },
      {
        id: 5,
        titulo: " Resistencias",
        descripcion: "Termistore especiales NTC 5D-15",
        precio: "$986,70 ARS ",
        imagen: "../../assets/Resistencias/especiales/termistore/ntc-5D-15.jpg",
      },
      {
        id: 6,
        titulo: " Resistencias",
        descripcion: "Termistore especiales NTC 8D-20",
        precio: "$946,63 ARS",
        imagen: "../../assets/Resistencias/especiales/termistore/ntc-8D-20.jpg",
      },
      {
        id: 7,
        titulo: " Resistencias",
        descripcion: "Termistore especiales PTC 120 ",
        precio: "precio",
        imagen: "../../assets/Resistencias/especiales/termistore/ptc 120.jpg",
      },
      {
        id: 8,
        titulo: " Resistencias",
        descripcion: "Termistore especiales PTC 831",
        precio: "$1.700",
        imagen: "../../assets/Resistencias/especiales/termistore/ptc-831.jpg",
      },
      {
        id: 9,
        titulo: " Resistencias",
        descripcion: "Termistore especiales PTC 850 ",
        precio: "$1.340",
        imagen: "../../assets/Resistencias/especiales/termistore/ptc-850.jpg",
      },
      {
        id: 10,
        titulo: " Resistencias",
        descripcion: " Fotoresistor LDR ",
        precio: "$2.283",
        imagen: "../../assets/Resistencias/especiales/fotoresistor-LDR.jpg",
      },
    ];
  
    return (
      <>
        <Card data={data} rute={"Resistencias"} />
      </>
    );
  };
  export default Resistencias;