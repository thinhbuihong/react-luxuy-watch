import React, { Component } from 'react';

export default class Top extends Component {
  render() {
    return (
      <div className="sticky-top top">
        <div className="">
          <div className="container">
            <div className="cart-icon">
              <a href>
                <img src="./images/cart-1.png" alt="cart" />
                <p>Empty cart</p>
              </a>
            </div>
          </div>
        </div>

        <div className="menu">
          <ul>
            <li>
              <a href="asd">Home</a>
            </li>
            <li>
              <a href="#filter">Products</a>
            </li>
            <li>
              <a href="asd">About</a>
            </li>
            <li>
              <a href="asd">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
