import React, { Component } from "react";

export class AnuncioNome extends Component {
  render() {
    return (
      <div
        style={{
          gridRow: "5/6",
          gridColumn: "1/3",
          backgroundColor: "#BAA300",
          display: "grid"
        }}
      >
        <h1
          style={{
            fontFamily: "helvetica",
            fontSize: "11px",
            alignSelf: "center",
            justifySelf: "center",
            color: "white",
            fontWeight: "bold"
          }}
        >
          Nome: Emerson
        </h1>
      </div>
    );
  }
}

export default AnuncioNome;
