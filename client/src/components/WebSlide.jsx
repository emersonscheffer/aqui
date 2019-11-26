import React, { Component } from "react";
import WebCard from "./WebCard";

export class WebSlide extends Component {
  data = {
    properties: [
      {
        index: 0,
        picture: "images/beach.jpg",
        desc: "beach"
      },
      {
        index: 1,
        picture: "images/mountain.jpg",
        desc: "mountain"
      },
      {
        index: 2,
        picture: "images/forest.jpg",
        desc: "forest"
      },
      {
        index: 3,
        picture: "images/beach.jpg",
        desc: "beach"
      },
      {
        index: 4,
        picture: "images/mountain.jpg",
        desc: "mountain"
      },
      {
        index: 5,
        picture: "images/forest.jpg",
        desc: "forest"
      }
    ]
  };
  state = {
    properties: this.data.properties,
    property: this.data.properties[0]
  };

  componentDidMount() {
    document.getElementById(`card-${0}`).style.transform = "scale(1)";

    document.getElementById(`card-${0}`).style.opacity = 1;
  }
  nextProperty = () => {
    const newIndex = this.state.property.index + 1;
    this.setState({
      property: this.data.properties[newIndex]
    });

    document.getElementById(
      `card-${this.state.property.index + 1}`
    ).style.transform = "scale(1)";

    document.getElementById(
      `card-${this.state.property.index}`
    ).style.transform = "scale(0.7)";

    document.getElementById(
      `card-${this.state.property.index + 1}`
    ).style.opacity = 1;

    document.getElementById(
      `card-${this.state.property.index}`
    ).style.opacity = 0.5;
  };

  prevProperty = () => {
    const newIndex = this.state.property.index - 1;
    this.setState({
      property: this.data.properties[newIndex]
    });

    document.getElementById(
      `card-${this.state.property.index - 1}`
    ).style.transform = "scale(1)";

    document.getElementById(
      `card-${this.state.property.index - 1}`
    ).style.opacity = 1;

    document.getElementById(
      `card-${this.state.property.index}`
    ).style.transform = "scale(0.7)";

    document.getElementById(
      `card-${this.state.property.index}`
    ).style.opacity = 0.5;
  };

  renderActive = () => {};

  render() {
    const { properties, property } = this.state;
    return (
      <div>
        <button
          onClick={() => this.prevProperty()}
          disabled={property.index === 0}
        >
          prev
        </button>
        <button
          onClick={() => this.nextProperty()}
          disabled={property.index === this.data.properties.length - 1}
        >
          next
        </button>

        <div className={`cards-slider active-slide-${property.index}`}>
          <div
            className="cards-slider-wrapper"
            style={{
              transform: `translateX(-${property.index *
                (100 / properties.length)}%)`
            }}
          >
            {properties.map(property => (
              <WebCard key={property.index} property={property} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default WebSlide;
