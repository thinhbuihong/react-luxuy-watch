import React, { Component } from 'react'
import {connect} from 'react-redux';
import { addToCart } from '../actions/cartActions';
import Modal from 'react-modal';
import Zoom from 'react-reveal/Zoom';

class Product extends Component {
  constructor(props) {
    super(props);
    this.state={
      showModal:false,
    }
  }
  closeModal = () =>{
    this.setState({
      showModal:false,
    })
  }
  openModal = () =>{
    this.setState({
      showModal:true,
    })
  }
  render() {
    const {product} = this.props;
    return (
      <div className="product">
        <div className="product-img" onClick={this.openModal}>
        <img src={product.image} alt={product.title} /></div>
        <div className="product-detail">
          <h4>{product.title}</h4>
          <span>EXPLORE NOW</span>
          <div>
            <i className="fa fa-shopping-cart"></i>
            <span className="price">${product.price}</span>
            <button onClick={this.props.addToCart.bind(this, product)}>Add To Cart</button>
          </div>
        </div>

        {
          this.state.showModal && (
            <Modal onRequestClose={this.closeModal} isOpen={true}>
              <Zoom>
                <button className="close-modal" onClick={this.closeModal}>X</button>
                <div className="product-detail-modal">
                  <div className="img">
                    <img src={product.image} alt={product.title}></img>
                  </div>
                  <div className="detail">
                    <h2>Product detail</h2>
                    <h4>{product.title}</h4>
                    <p>{product.description}</p>
                    <h4>${product.price}</h4>
                    <button onClick={()=>{this.props.addToCart(product);
                                          this.closeModal()}}>
                      AddToCart
                    </button>
                  </div>
                </div>
              </Zoom>
            </Modal>
          )
        }
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addToCart: (product) => {
      dispatch(addToCart(product));
    },
  }
}

export default connect(null, mapDispatchToProps )(Product);