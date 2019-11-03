import React, { Component } from "react";
import Doidera from "./Doidera";

export class Faixa extends Component {
  render() {
    return (
      <div style={estilaDaFaixa}>
        <span style={{ alignSelf: "center", justifySelf: "center" }}>
          <Doidera />
        </span>
      </div>
    );
  }
}

const estilaDaFaixa = {
  backgroundColor: "green",
  height: "80px",
  display: "grid",
  color: "white",
  fontWeight: "bold",
  fontSize: "35px"
};

export default Faixa;
