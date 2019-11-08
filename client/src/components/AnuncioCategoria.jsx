import React, { Component } from "react";
import Localizacao from "./Localizacao";

export class AnuncioCategoria extends Component {
  render() {
    return (
      <div
        id="anuncio-categoria"
        style={{
          backgroundColor: "#E60000",
          gridColumn: "1/4",
          borderRadius: "5px 0px 0px 0px",
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)"
        }}
      >
          <Localizacao />
        <h1
          style={{
            justifySelf: "center",
            alignSelf: "center",
            fontFamily: "helvetica",
            fontWeight: "bold",
            color: "white",
            gridColumn: "3/7"
          }}
        >
          
          Categoria
        </h1>
      </div>
    );
  }
}

export default AnuncioCategoria;
