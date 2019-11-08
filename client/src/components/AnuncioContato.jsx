import React, { Component } from "react";

export class AnuncioContato extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "#234160",
          gridColumn: "1/5",
          gridRow: "6/7",
          borderRadius: "0px 0px 5px 5px",
          padding:"3px"
        }}
      >
        <h1 style={{
            fontSize: "11px",
            fontFamily: "helvetica",
            fontWeight: "bold",
            color: "white"
        }}>Tel: 510 815 3743</h1>
        <h1 style={{
            fontSize: "11px",
            fontFamily: "helvetica",
            fontWeight: "bold",
            color: "white"
        }}>email: emerson@aqui.com</h1>
      </div>
    );
  }
}

export default AnuncioContato;
