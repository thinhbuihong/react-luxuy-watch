import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';

class Top extends Component {
  render() {
    return (
      <div className="sticky-top top">
        <div className="">
          <div className="container">
            <div className="cart-icon">
              <NavLink exact to="/cart">
                <i className="fa fa-shopping-cart"></i>
                <p>{
                  this.props.cart.length > 0 ? 
                  (`${this.props.cart.reduce((c,x)=>(
                    c+x.quantity
                  ),0)} items in cart`): "Empty Cart"
                }
                </p>
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
              <NavLink exact to="/" activeClassName="active">Products</NavLink>
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

const mapStateToProps = (state, ownProps) => {
  return {
    cart: state.cart,
  }
}

export default connect(mapStateToProps)(Top);