import React, { Component } from "react";

export class AnuncioData extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "#234160",
          gridColumn: "4/5",
          display: "grid",
          borderRadius: "0px 5px 0px 0px"
        }}
      >
        <h1
          style={{
            color: "white",
            justifySelf: "center",
            alignSelf: "center",
            fontFamily: "helvetica",
            fontWeight: "bold",
            fontSize: "12px"
          }}
        >
          20 dias
        </h1>
      </div>
    );
  }
}

export default AnuncioData;
