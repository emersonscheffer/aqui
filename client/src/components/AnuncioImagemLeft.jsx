import React, { Component } from "react";

export class AnuncioImagemLeft extends Component {
  render() {
    return (
      <div id="imagen-left">
        <img
          style={{
            width: "40%",
            maxWidth: "350px",
            justifySelf: "start",
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

export default AnuncioImagemLeft;
