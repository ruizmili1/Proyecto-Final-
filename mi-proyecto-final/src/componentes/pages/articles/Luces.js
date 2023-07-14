import React, { useState } from "react";
import Card from "../../ui/Card";
import { Header } from "../../Header/Header";


const Luces = () => {

    const [data, setData] = useState([
        {
            id:1,
            titulo: 'Luces Led',
            descripcion: 'la tarjeta 1',
            precio: 'precio',
            imagen: 'imagen'
        },
        {
            id:2,
            titulo: 'Luces deodo',
            descripcion: 'la tarjeta 2',
            precio: 'precio',
            imagen: 'imagen'

        },
       
    ])


    return (
        <>
        <div>
            <Header/>
        </div>
        <Card data={data}/>


        </>
    )
}
export default Luces;