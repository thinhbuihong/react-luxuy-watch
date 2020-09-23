import React, { Component } from 'react'
import { searchProducts, sortProducts } from '../actions/productsActions'
import {connect} from 'react-redux';

class Filter extends Component {
  render() {
    return (
      <div id="filter" className="container">
        <div className="mr-5">
          <label className="mr-2">Search</label>
          <input type="text" name="search" 
          onChange={(e)=> this.props.searchProducts(e.target.value)}></input>
        </div>
        <div>
          <label className="mr-2">Sort</label>
          <select name="sort" defaultValue="lowest" 
          onChange={(e)=> this.props.sortProducts(e.target.value)}>
            <option value="lowest">Lowest</option>
            <option value="highest">Highest</option>
          </select>
        </div>
        
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    sortProducts: (order) => {
      dispatch(sortProducts(order));
    },
    searchProducts: (temp) =>{
      dispatch(searchProducts(temp));
    }
  }
}
export default connect(null, mapDispatchToProps)(Filter);