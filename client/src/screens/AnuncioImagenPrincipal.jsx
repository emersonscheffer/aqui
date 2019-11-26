import React, { Component } from "react";

export class AnuncioImagenPrincipal extends Component {
  render() {
    return (
      <div id="anuncio-pop-up">
        <img
          style={{
            width: "90%",
            maxWidth: "550px",
            justifySelf: "center",
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

export default AnuncioImagenPrincipal;
