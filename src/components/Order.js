import React, { Component } from 'react';
import {connect} from 'react-redux';
import OrderItem from './OrderItem';

class Order extends Component {
  render() {
    const {orders} = this.props;
    return (
      <div className="container ">
        <div className="text-center">
          <h3>ORDERS</h3>
          <span>{orders.length} orders</span>
        </div>
        {
          orders.length > 0 ? (
            orders.map(order=>(
              <OrderItem key={order._id} order={order}></OrderItem>
            ))
          ):null
        }
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    orders: state.orders,
  }
}
export default connect(mapStateToProps)(Order);