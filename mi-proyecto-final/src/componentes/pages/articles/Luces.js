import React from "react";
import Card from "../../ui/Card";
import { Header } from "../../Header/Header";


const Luces = () => {

     let data =[
        {
            id:1,
            titulo: " Luces ",
            descripcion: " Diodo luces led, color amarillo. ",
            precio: "$600 ARS x10U",
            imagen: "../../assets/DiodosLed/led amarillo.jpg"
        },
        {
            id:2,
            titulo: "Luces",
            descripcion: "Diodo luces led, color azúl.  ",
            precio: "$899 ARS x10U",
            imagen: "../../assets/DiodosLed/led azul.jpg"

        },
        {
            id:3,
            titulo: "Luces",
            descripcion: "Diodo luces led, color blanco.  ",
            precio: "$899 ARS x10U",
            imagen: "../../assets/DiodosLed/led blanco.jpg"

        },
        {
            id:4,
            titulo: "Luces",
            descripcion: "Diodo luces led, color naranja.  ",
            precio: "$948 ARS x10U",
            imagen: "../../assets/DiodosLed/led naranja.jpg"

        },
        {
            id:5,
            titulo: "Luces",
            descripcion: "Diodo luces led emisores.  ",
            precio: "$2.000,00  ARS x10U",
            imagen: "../../assets/DiodosLed/diodosemisoresled.jpg"

        },
        {
            id:6,
            titulo: "Luces",
            descripcion: "Diodo luces led, color verde.  ",
            precio: "$748 ARS x10U",
            imagen: "../../assets/DiodosLed/ledverde.png"

        },
        {
            id:7,
            titulo: "Luces",
            descripcion: "Diodo luces led, color rojo.  ",
            precio: "$860 ARS x10U",
            imagen: "../../assets/DiodosLed/LED-rojo-3.jpg"

        },
        {
            id:8,
            titulo: "Luces",
            descripcion: "Tira luz led, Rgb de 5mts",
            precio: "$2.560,00 ARS",
            imagen: "../../assets/DiodosLed/tira-luz-led5mts.jpg"

        },
        {
            id:9,
            titulo: "Luces",
            descripcion: "Tira luz led, blanco frío común de 5mts",
            precio: "$8.622,40 ARS",
            imagen: "../../assets/DiodosLed/led-blanco-exterior.jpeg"

        },
    ]


    return (
        <>
        <Card data={data}  rute={'Luces'} />


        </>
    )
}
export default Luces;