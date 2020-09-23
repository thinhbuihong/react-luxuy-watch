import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class Top extends Component {
  render() {
    return (
      <div className="sticky-top top">
        <div className="container-top">
          <div className="navbar navbar-expand-lg navbar-light ">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <i className="fa fa-bars bar"></i>
            </button>


            <div className="menu collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <NavLink exact to="/" activeClassName="active" classNam="nav-link">Home</NavLink>
                </li>
                <li>
                  <Link exact="true" to="/" >Products</Link>
                </li>
                <li>
                  <NavLink exact to="/about" activeClassName="active">About</NavLink>
                </li>
                <li>
                  <NavLink exact to="/contact" activeClassName="active">Contact</NavLink>
                </li>
                <li>
                  <NavLink exact to="/orders" activeClassName="active">Orders</NavLink>
                </li>
              </ul>
            </div>

          </div>

          <div className="cart-icon">
            <NavLink exact to="/cart">
              <i className="fa fa-shopping-cart"></i>
              <p>{
                this.props.cart.length > 0 ?
                  (`${this.props.cart.reduce((c, x) => (
                    c + x.quantity
                  ), 0)} items in cart`) : "Empty Cart"
              }
              </p>
            </NavLink>
          </div>

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