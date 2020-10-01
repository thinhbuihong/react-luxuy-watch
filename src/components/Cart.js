import React, { Component } from 'react'
import { connect } from 'react-redux';
import { clearCart } from '../actions/cartActions';
import CartItem from './CartItem';
import Modal from 'react-modal';
import Zoom from 'react-reveal/Zoom';
import shortid from 'shortid';
import { createOrder } from '../actions/orderActions';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      address: "",
      order: false,
    }
  }
  handleOrder = async (event) => {
    event.preventDefault();
    const { email, name, address } = this.state;
    if (email && name && address) {
      const order = {
        name, email, address,
        _id: shortid.generate(),
        cart: this.props.cart,
      }
      await this.props.createOrder(order);
      alert("Successfully");
      this.props.clearCart();
      this.closeOrderModal();
      window.location.assign("/");


    }
    else {
      alert("Fill in full information");
    }

  }
  isChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }
  closeOrderModal = () => {
    this.setState({ order: false });
  }

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
                <button className="order-button"
                  onClick={() => this.setState({ order: true })}><strong>Order</strong></button>
              </div>
            </div>
            ) : null
        }
        {
          this.state.order && (
            <Modal isOpen={true} onRequestClose={this.closeOrderModal} className="order-form-modal">
              <Zoom>
                <form>
                  <div className="order-form">
                    <h2>ORDER FORM</h2>
                    <div>
                      <label>Name: </label>
                      <input type="text" name="name" required onChange={this.isChange}></input>
                    </div>
                    <div>
                      <label>Email: </label>
                      <input type="email" name="email" required onChange={this.isChange}></input>
                    </div>
                    <div>
                      <label>Address: </label>
                      <input type="text" name="address" required onChange={this.isChange}></input>

                    </div>
                    <button type="submit" onClick={this.handleOrder}>Order</button>
                  </div>

                </form>
              </Zoom>
            </Modal>
          )
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


export default connect(mapStateToProps, { clearCart, createOrder })(Cart);