import React, { Component } from 'react'
import {connect} from 'react-redux';
import CartItem from './CartItem';

class Cart extends Component {
  render() {
    return (
      <div className="container cart">
        <div className="text-center">
          <h3>Shopping Cart</h3>
          <span>{this.props.cart.length} items in your cart</span>
        </div>
        <table>
          <thead>
            <tr>
              <th colSpan="2">Product</th>
              <th>price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.cart.map(item=>{
              return <CartItem item={item}></CartItem>
            })}

            <tr>
              <td colSpan="2"></td>
              <td></td>
              <td></td>
              <td>Total: ${this.props.cart.reduce((c,a) => c+a.product.price,0)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps, null)(Cart);