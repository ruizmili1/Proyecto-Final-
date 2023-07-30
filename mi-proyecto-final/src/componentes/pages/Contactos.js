import React from "react";
import "./Contactos.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";

const Contactos = () => {
  return (
    <div className="container-1">
      <div class="contactos">
        <ul class="lista-contactos">
          <div className="contenedor-padre1">
            <div className="gmail">
              <GrMail />
            </div>
            <div>
              <p>Correo: misiotronicaelectronicos22@gmail.com</p>
            </div>
          </div>

          <div className="contenedor-padre2">

             <div className="phone">
               <BsFillTelephoneFill /> 
            </div>

            <div>
               <p> Teléfono: +54 263 4001133 </p>
            </div>

          </div>

          <div className="contenedor-padre3">

            <div className="instagram">
              <AiFillInstagram />
            </div>

            <div>
              <p> Instagram: misiotrónica_22 </p>
            </div>

          </div>
          
          <div className="contenedor-padre4">

            <div className="facebook">
              <AiFillFacebook />
            </div>

            <div>
             <p>Facebook: MISIOTRÓNICA </p>
            </div>

          </div>

          <div className="contenedor-padre5">

            <div className="whatsapp">
              <IoLogoWhatsapp />
            </div>

            <div>
              <p> WhatsApp: +54 9 00204030  </p>
            </div>

          </div>
        
        </ul>
      </div>
    </div>
  );
};

export default Contactos;
