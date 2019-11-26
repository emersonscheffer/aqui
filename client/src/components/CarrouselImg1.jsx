import React, { Component } from "react";

export class CarrouselImg1 extends Component {
  render() {
    return (
      <div id={this.props.divid1}>
        <img
          onClick={this.props.click1}
          style={{
              transition: "all 0.7s ease",
            width: "100%",
            maxWidth: this.props.maxWidth1,
            justifySelf: this.props.justify1,
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

export default CarrouselImg1;
