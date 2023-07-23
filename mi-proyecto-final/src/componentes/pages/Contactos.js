import React from "react";
import "./Contactos.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import {AiFillInstagram} from "react-icons/ai";
import {AiFillFacebook} from "react-icons/ai";
import {IoLogoWhatsapp} from "react-icons/io";

const Contactos = () => {
  return (
    <div className="container-1">
      <div class="contactos">
        <ul class="lista-contactos">

          <p> <GrMail/> misiotronicaelectronicos22@gmail.com</p>
          <p> <BsFillTelephoneFill /> Teléfono: +54 263 4001133</p>
          <p> <AiFillInstagram/>Instagram: misiotrónica_22 </p>
          <p> <AiFillFacebook/> Facebook: MISIOTRÓNICA </p>
          <p> <IoLogoWhatsapp/> WhatsApp: +54 9 00204030</p>

        </ul>
      </div>
    </div>
  );
}

export default Contactos