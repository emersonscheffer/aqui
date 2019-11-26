import React, { Component } from "react";

export class AnuncioImagemTres extends Component {
  render() {
    return (
      <div id="imagem-right">
        <img
          style={{
            width: "40%",
            maxWidth: "350px",
            justifySelf: "end",
            alignSelf: "center",
            border: "solid 30px rgb(0, 0, 0, 0.35)",
            boxSizing: "border-box"
          }}
          src="images/beach.jpg"
          alt=""
        />
      </div>
    );
  }
}

export default AnuncioImagemTres;
