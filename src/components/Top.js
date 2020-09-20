import React, { Component } from 'react'

export default class Top extends Component {
  render() {
    return (
      <div>
        <div className="top">
          <div className="container">
            <div className="cart-icon">
              <a href>
                <img src="./images/cart-1.png" alt="cart" />
                <p>Empty cart</p>
              </a>
            </div>
          </div>
        </div>

        <div className="logo">
          <a href="asd">
            <h1>LUXURY WATCHES</h1>
          </a>
        </div>
      </div>
    )
  }
}
