import React, { Component } from "react";

import Iframe from "react-iframe";

export class TesteComponent extends Component {
  render() {
    return (
      <div>
        <Iframe
          url="http://www.martin-pavers.com/site/"
          width="100%"
          height="1200px"
          id="myId"
          className="myClassname"
          display="initial"
          position="relative"
        />
      </div>
    );
  }
}

export default TesteComponent;
