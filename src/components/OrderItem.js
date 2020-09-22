import React, { Component } from 'react'

export default class OrderItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showOrder: false,
    }
  }

  toggleShowOrder = () => {
    this.setState({
      showOrder: !this.state.showOrder,
    })
  }
  render() {
    const { order } = this.props;
    return (
      <tr className="order-item" onClick={this.toggleShowOrder}>
        <td>{order._id}</td>
        <td>{
          "$" + order.cart.reduce((c, a) => c + a.quantity * a.product.price, 0)
        }</td>
        <td>{order.name}</td>
        <td>{order.email}</td>
        <td>{order.address}</td>
      </tr>


    )
  }
}
