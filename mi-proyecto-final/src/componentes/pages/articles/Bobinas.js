import React, { useState } from "react";
import Card from "../../ui/Card";

const Bobinas = () => {
    const [data, setData] = useState([
      {
        id: 1,
        titulo: " Bobina",
        descripcion: "blindada ",
        precio: "",
        imagen: "../../assets/Bobinas/bobina-blindada.jpg",
      },
      {
        id: 2,
        titulo: " Bobina",
        descripcion: "de aire lámina",
        precio: "precio",
        imagen: "../../assets/Bobinas/bobina-de aire-lamina.jpg",
      },
      {
        id: 3,
        titulo: " Bobina",
        descripcion: "de aire",
        precio: "precio",
        imagen: "../../assets/Bobinas/bobina-nucleo-de-aire.jpg",
      },
      {
        id: 4,
        titulo: " Bobina",
        descripcion: "ferromagnética",
        precio: "precio",
        imagen: "../../assets/Bobinas/bobina-ferromagnetica.jpg",
      },
      {
        id: 5,
        titulo: " Bobina",
        descripcion: "material ferroso",
        precio: "precio",
        imagen: "../../assets/Bobinas/bobina-material-ferroso.png",
      },
      {
        id: 6,
        titulo: " Bobina",
        descripcion: "variable",
        precio: "precio",
        imagen: "../../assets/Bobinas/bobina.variable.jpg",
      },
      {
        id: 7,
        titulo: " Bobina",
        descripcion: "ajustables",
        precio: "precio",
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