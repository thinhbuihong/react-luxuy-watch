import React, { Component } from 'react'

export default class OrderItem extends Component {
  constructor(props) {
    super(props);
    this.state={
      showOrder:false,
    }
  }
  
  toggleShowOrder = () =>{
    this.setState({
      showOrder: !this.state.showOrder,
    })
  }
  render() {
    const {order} = this.props;
    return (
      <div>
        <div className="order-name" onClick={this.toggleShowOrder}>
          <strong>
            {`${order.name} --- ${order.email}`}
          </strong>
        </div>

        {
          this.state.showOrder && 
          (<div className="order-items">
            {
              order.cart.map(item=>(
                <div key={item.product._id} className="order-item">
                  {`${item.product.title}   X ${item.quantity}  $${item.product.price*item.quantity}`}
                </div>
              ))
            }
          </div>)
        }
      </div>
    )
  }
}
