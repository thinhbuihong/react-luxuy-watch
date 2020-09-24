import React, { Component } from 'react';
import { connect } from 'react-redux';
import OrderItem from './OrderItem';
import Fade from 'react-reveal/Fade';

class Order extends Component {
  render() {
    const { orders } = this.props;
    return (
      <div className="container ">
        <div className="text-center">
          <h3>ORDERS</h3>
          <span>{orders.length} orders</span>
        </div>
        {
          orders.length > 0 ? (
            <table className="order-items">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>TOTAL</th>
                  <th>NAME</th>
                  <th>EMAIL</th>
                  <th>ADDRESS</th>
                </tr>
              </thead>

              <Fade left >
              <tbody>

                  {
                    orders.map(order => (
                      <OrderItem key={order._id} order={order}></OrderItem>
                    ))
                  }
              </tbody>
              </Fade>
            </table>

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