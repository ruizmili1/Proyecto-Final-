
import './imagenesLuces.css';


const ImagenesLuces = (props)=>{
    const Imagenes = (props)=>{
        switch(props.imagen){
        case '../../assets/DiodosLed/led amarillo.jpg':
           return (
            <img className="led-amarillo" src={require("../../assets/DiodosLed/led amarillo.jpg")} alt="Descripción de la imagen" />
           ) 
        break;
        case '../../assets/DiodosLed/led azul.jpg':
            return (
             <img className="led-azul" src={require("../../assets/DiodosLed/led azul.jpg")} alt="Descripción de la imagen" />
            ) 
         break;
         case '../../assets/DiodosLed/led blanco.jpg':
            return (
             <img className="led-blanco" src={require("../../assets/DiodosLed/led blanco.jpg")} alt="Descripción de la imagen" />
            ) 
         break;
         case '../../assets/DiodosLed/led naranja.jpg':
            return (
             <img className="led-naranja" src={require("../../assets/DiodosLed/led naranja.jpg")} alt="Descripción de la imagen" />
            ) 
         break;
         case '../../assets/DiodosLed/diodosemisoresled.jpg':
            return (
             <img className="led-emisores" src={require("../../assets/DiodosLed/diodosemisoresled.jpg")} alt="Descripción de la imagen" />
            ) 
         break;
         case '../../assets/DiodosLed/ledverde.png':
            return (
             <img className="led-verde" src={require("../../assets/DiodosLed/ledverde.png")} alt="Descripción de la imagen" />
            ) 
         break;
         case '../../assets/DiodosLed/LED-rojo-3.jpg':
            return (
             <img className="led-rojo" src={require("../../assets/DiodosLed/LED-rojo-3.jpg")} alt="Descripción de la imagen" />
            ) 
         break;
    }
    }
    
    return(
        <>
        <Imagenes imagen={props.imagen}/>
        </>
    )

}
export default ImagenesLuces