import React, { Component } from 'react'

export default class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <div className="container">
          <div className="left">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Men</a></li>
              <li><a href="#">Women</a></li>
              <li><a href="#">Kid</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="right">
            <div className="containSearch">
              <form>
                <input type="text" placeholder="Search" id="search" />
                <button type="">
                  <i className="fa fa-search"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
