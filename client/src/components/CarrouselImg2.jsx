import React, { Component } from "react";

export class CarrouselImg2 extends Component {
  render() {
    return (
      <div id={this.props.divid2}>
        <img
          onClick={this.props.click2}
          style={{

            transition: "all 0.7s ease",
            width: "100%",
            maxWidth: this.props.maxWidth2,
            justifySelf: this.props.justify2,
            alignSelf: "center",
            border: "solid 30px rgb(0, 0, 0, 0.35)",
            boxSizing: "border-box"
          }}
          src="images/mountain.jpg"
          alt=""
        />
      </div>
    );
  }
}

export default CarrouselImg2;
