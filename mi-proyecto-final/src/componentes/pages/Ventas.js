import React from "react";
import "./Ventas.css";

const Ventas = () => {
  return (
    <section className="wrapper">
      <div className="container">
        <section className="main">
          <div className="cart-grid row">
            <div className="cart-grid-body col-xs-12 col-lg-8">
              <div className="card1 cart-container">
                <div className="card-block">
                  <h1 className="h1">Carrito</h1>
                </div>
                <hr className="separator"></hr>
                <div className="cart-overview  js-cart">
                  <span className="no-items">No hay mas artículos </span>
                </div>
              </div>
            </div>

          </div>
        </section>
      </div>
    </section>
  );
};

export default Ventas;
