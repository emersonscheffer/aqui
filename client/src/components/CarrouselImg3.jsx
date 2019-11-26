import React, { Component } from "react";

export class CarrouselImg3 extends Component {
  render() {
    return (
      <div id={this.props.divid3}>
        <img
          onClick={this.props.click3}
          style={{
            transition: "all 0.7s ease",
            width: "100%",
            maxWidth: this.props.maxWidth3,
            justifySelf: this.props.justify3,
            alignSelf: "center",
            border: "solid 30px rgb(0, 0, 0, 0.35)",
            boxSizing: "border-box"
          }}
          src="images/forest.jpg"
          alt=""
        />
      </div>
    );
  }
}

export default CarrouselImg3;
