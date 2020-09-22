import React, { Component } from 'react'

export default class Filter extends Component {
  render() {
    return (
      <div id="filter" className="container">
        <div>
          <label>Search</label>
          <input type="text" name="search"></input>
        </div>
        <div>
          <label>Sort</label>
          <select name="sort">
            <option value="lowest">Lowest</option>
            <option value="highest">Highest</option>
          </select>
        </div>
        
      </div>
    )
  }
}
