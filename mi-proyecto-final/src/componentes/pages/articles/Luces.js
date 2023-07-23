import React, { useState } from "react";
import Card from "../../ui/Card";
import { Header } from "../../Header/Header";


const Luces = () => {

    const [data, setData] = useState([
        {
            id:1,
            titulo: " Luces ",
            descripcion: " Diodo luces led, color amarillo. ",
            precio: "2.100,00 ARS",
            imagen: "../../assets/DiodosLed/led amarillo.jpg"
        },
        {
            id:2,
            titulo: "Luces",
            descripcion: "Diodo luces led, color azúl.  ",
            precio: "precio",
            imagen: "../../assets/DiodosLed/led azul.jpg"

        },
        {
            id:3,
            titulo: "Luces",
            descripcion: "Diodo luces led, color blanco.  ",
            precio: "precio",
            imagen: "../../assets/DiodosLed/led blanco.jpg"

        },
        {
            id:4,
            titulo: "Luces",
            descripcion: "Diodo luces led, color naranja.  ",
            precio: "precio",
            imagen: "../../assets/DiodosLed/led naranja.jpg"

        },
        {
            id:5,
            titulo: "Luces",
            descripcion: "Diodo luces led emisores.  ",
            precio: "precio",
            imagen: "../../assets/DiodosLed/diodosemisoresled.jpg"

        },
        {
            id:6,
            titulo: "Luces",
            descripcion: "Diodo luces led, color verde.  ",
            precio: "precio",
            imagen: "../../assets/DiodosLed/ledverde.png"

        },
        {
            id:7,
            titulo: "Luces",
            descripcion: "Diodo luces led, color rojo.  ",
            precio: "precio",
            imagen: "../../assets/DiodosLed/LED-rojo-3.jpg"

        },
    ])


    return (
        <>
        <Card data={data}  rute={'Luces'} />


        </>
    )
}
export default Luces;