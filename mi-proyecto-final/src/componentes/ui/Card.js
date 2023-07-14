import React, { useState } from "react";
import "./Card.css"




const Card = (props) => {

    const {data} = props
    
console.log(data)
    const CardBody = (props) => {
        const {item,key} = props
        return (
            <>
                <div className="card">
                    <div>
                        {item.titulo}
                    </div>
                    <div>
                        {item.descripcion}
                    </div>
                    <div>
                        {item.precio}
                    </div>
                   
                </div>
            </>
        )
    }

    const Map = () => {

        return (
            <>
                {
                    data.map((item,key) => {
                        return (
                            <div key={key} style={{margin:'20px',}}>
                                <CardBody  item={item}  />
                            </div>
                        )
                    })
                }
            </>
        )
    }

    return (
        <>
            <div className="containerCard">
                <Map />
            </div>


        </>
    )
}
export default Card;