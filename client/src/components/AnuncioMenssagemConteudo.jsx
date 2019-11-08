import React, { Component } from "react";

export class AnuncioMenssagemConteudo extends Component {
  render() {
    return (
      <div style={{
          gridColumn: "1/5",
          backgroundColor: "white",
          gridRow: "1/5",
          padding: "5px",
          textAlign: "left",
          lineHeight: "16px"
      }}>
        <p style={{
            fontFamily: "helvetica",
            fontSize: "14px"
        }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
          praesentium error blanditiis neque assumenda quia, fugit nulla
          voluptatum et facere id recusandae.
        </p>
      </div>
    );
  }
}

export default AnuncioMenssagemConteudo;
