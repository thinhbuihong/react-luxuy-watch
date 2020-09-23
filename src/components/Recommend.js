import React, { Component } from 'react'

export default class Recommend extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="recommend-products">
            <div className="recommend-product">
              <img src={require('../images/abt-1.jpg')} alt="recommend product 1" />
            </div>
            <div className="recommend-product">
              <img src={require("../images/abt-2.jpg")} alt="recommend product 2" />
            </div>
            <div className="recommend-product">
              <img src={require("../images/abt-3.jpg")} alt="recommend product 3" />
            </div>
          </div>
          <hr />
        </div>
      </div>
    )
  }
}
