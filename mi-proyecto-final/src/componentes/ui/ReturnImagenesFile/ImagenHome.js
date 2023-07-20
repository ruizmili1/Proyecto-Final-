const ImagenesHome = (props)=>{
    const Imagenes = (props)=>{
        switch(props.imagen){
        case '../../assets/email.png':
           return (
            <img src={require("../../assets/email.png")} alt="Descripción de la imagen" />
           )  
        break;
        case '../../assets/hogar.png':
            return (
             <img  src={require("../../assets/hogar.png")} alt="Descripción de la imagen" />
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
export default ImagenesHome