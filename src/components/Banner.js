import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

export default class Banner extends Component {
  render() {
    return (
      <Fade bottom className="">
        <div className="banner">
          <img src={require("../images/bnr-1.jpg")} alt="banner"></img>
        </div>

      </Fade>
    )
  }
}
