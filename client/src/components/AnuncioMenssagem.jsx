import React, { Component } from "react";
import AnuncioMenssagemConteudo from "./AnuncioMenssagemConteudo";

export class AnuncioMenssagem extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "white",
          gridColumn: "1/5",
          gridRow: "2/5",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gridTemplateRows: "repeat(5, 1fr)"
        }}
      >
        <AnuncioMenssagemConteudo />
        
      </div>
    );
  }
}

export default AnuncioMenssagem;
