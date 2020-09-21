import React, { Component } from 'react'
import { removeFromCart } from '../actions/cartActions';
import {connect} from 'react-redux';

class CartItem extends Component {
  render() {
    const {item} = this.props;
    return (
      <tr>
        <td colSpan="2">
          <h5><strong>{item.product.title}</strong></h5>
        </td>
        <td>
          {"$"+item.product.price}
        </td>
        <td>
          {item.quantity}
        </td>
        <td>
          {"$"+item.quantity*item.product.price}
        </td>
        <td>
          <button onClick={this.props.removeFromCart.bind(this, item.product)}>x</button>
        </td>
      </tr>
    )
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    removeFromCart: (product) => {
      dispatch(removeFromCart(product));
    }
  }
}

export default connect(null, mapDispatchToProps )(CartItem);