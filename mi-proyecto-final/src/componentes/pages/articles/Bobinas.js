import React, { useState } from "react";
import Card from "../../ui/Card";

const Bobinas = () => {
    const [data, setData] = useState([
      {
        id: 1,
        titulo: " Bobinas",
        descripcion: "Bobina blindada ",
        precio: "$1.200,00 ARS",
        imagen: "../../assets/Bobinas/bobina-blindada.jpg",
      },
      {
        id: 2,
        titulo: " Bobinas",
        descripcion: "Bobina de lámina",
        precio: "$7.00,00 ARS",
        imagen: "../../assets/Bobinas/bobina-de aire-lamina.jpg",
      },
      {
        id: 3,
        titulo: " Bobinas",
        descripcion: "Bobina núcleo de aire",
        precio: "$2.00,10 ARS",
        imagen: "../../assets/Bobinas//bobina-nucleo-de-aire.jpg",
      },
      {
        id: 4,
        titulo: " Bobinas",
        descripcion: "Bobina ferromagnética",
        precio: "$4.200,00 ARS",
        imagen: "../../assets/Bobinas/bobina-ferromagnetico.jpg",
      },
      {
        id: 5,
        titulo: " Bobinas",
        descripcion: "Bobina material ferroso",
        precio: "$1.960,00 ARS",
        imagen: "../../assets/Bobinas/bobina-materialferroso.jpg",
      },
      {
        id: 6,
        titulo: " Bobinas",
        descripcion: "Bobina variable",
        precio: "$1.363,00 ARS ",
        imagen: "../../assets/Bobinas/bobina.variable.jpg",
      },
      {
        id: 7,
        titulo: " Bobinas",
        descripcion: "Bobina ajustables",
        precio: "$150 ARS",
        imagen: "../../assets/Bobinas/boninas-ajustables.jpg",
      },
     
      
    ]);
  
    return (
      <>
        <Card data={data} rute={"Bobinas"} />
      </>
    );
  };
  export default Bobinas;