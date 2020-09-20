import React, { Component } from 'react'

export default class CartItem extends Component {
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
          <button>x</button>
        </td>
      </tr>
    )
  }
}
