import React, { Component } from "react";
import CarrouselImg1 from "../components/CarrouselImg1";
import CarrouselImg2 from "../components/CarrouselImg2";
import CarrouselImg3 from "../components/CarrouselImg3";

export class AnuncioContainer extends Component {
  state = {
    divid1: "place-1",
    divid2: "place-2",
    divid3: "place-3",

    place1: {
      maxWidth: "350px",
      justify: "start"
    },

    place2: {
      maxWidth: "550px",
      justify: "center"
    },

    place3: {
      maxWidth: "350px",
      justify: "end"
    }
  };

  click1 = () => {
    this.setState({
      divid1: "place-2",
      divid2: "place-3",
      divid3: "place-1",

        place1: {
            maxWidth: "350px",
            justify: "end"
        },
        place2: {
            maxWidth: "350px",
            justify: "start"
          },
      
          place3: {
            maxWidth: "550px",
            justify: "center"
          }

    });



  };

  renderId1 = () => {
      return "place-3"
  }

  render() {
    return (
      <div
        style={{
          display: "grid",
          width: "100vw",
          height: "100vh",
          position: "absolute"
        }}
      >
        <CarrouselImg1
          click1={this.click1}
          maxWidth1={this.state.place1.maxWidth}
          justify1={this.state.place1.justify}
          divid1={this.state.divid1}
        />
        <CarrouselImg2
          click2={this.click1}
          maxWidth2={this.state.place2.maxWidth}
          justify2={this.state.place2.justify}
          divid2={this.state.divid2}
        />
        <CarrouselImg3
          click3={this.click1}
          maxWidth3={this.state.place3.maxWidth}
          justify3={this.state.place3.justify}
          divid3={this.state.divid3}
        />
      </div>
    );
  }
}

export default AnuncioContainer;
