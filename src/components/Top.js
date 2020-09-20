import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

export default class Top extends Component {
  render() {
    return (
      <div className="sticky-top top">
        <div className="">
          <div className="container">
            <div className="cart-icon">
              <NavLink exact to="/cart">
                <i class="fa fa-shopping-cart"></i>
                <p>Empty Cart</p>
              </NavLink>
            </div>
          </div>
        </div>

        <div className="menu">
          <ul>
            <li>
              <NavLink exact to="/" activeClassName="active">Home</NavLink>
            </li>
            <li>
              <NavLink exact to="#filter" activeClassName="active">Products</NavLink>
            </li>
            <li>
              <NavLink exact to="/about" activeClassName="active">About</NavLink>
            </li>
            <li>
              <NavLink exact to="/contact" activeClassName="active">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
