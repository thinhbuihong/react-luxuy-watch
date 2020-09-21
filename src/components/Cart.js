import React, { Component } from 'react'
import { connect } from 'react-redux';
import { clearCart } from '../actions/cartActions';
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
            {this.props.cart.map(item => {
              return <CartItem item={item} key={item.product._id}></CartItem>
            })}

            <tr>
              <td colSpan="2"></td>
              <td></td>
              <td></td>
              <td>Total: ${this.props.cart.reduce((c, a) => c + a.product.price, 0)}</td>
            </tr>
          </tbody>
        </table>

        {
          this.props.cart.length > 0 ?
            (<div>
              <button className="clear-cart" onClick={this.props.clearCart}>Clear Cart</button>

              <div className="order">
                <button className="order-button"><strong>Order</strong></button>
              </div>
            </div>
            ) : null
        }
      </div>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    cart: state.cart
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    clearCart: () => {
      dispatch(clearCart());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);