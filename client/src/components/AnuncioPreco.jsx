import React, { Component } from "react";

export class AnuncioPreco extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "#BAA300",
          gridColumn: "3/5",
          gridRow: "5/6",
          display: "grid"
        }}
      >
        <h1
          style={{
            color: "white",
            fontSize: "16px",
            
            fontFamily: "helvetica",
            justifySelf: "center",
            alignSelf: "center",
            fontWeight: "bolder"
          }}
        >
          $ 500,00
        </h1>
      </div>
    );
  }
}

export default AnuncioPreco;
