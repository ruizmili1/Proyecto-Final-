const ImagenesHome = (props)=>{
    const Imagenes = (props)=>{
        switch(props.imagen){
        case '../../assets/misiotronica.jpg':
           return (
            <img src={require("../../assets/misiotronica.jpg")} alt="Descripción de la imagen" />
           )  
        break;
        case '../../assets/icons8-llamada-48.png':
            return (
             <img  src={require("../../assets/icons8-llamada-48.png")} alt="Descripción de la imagen" />
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