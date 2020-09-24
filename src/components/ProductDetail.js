import React, { Component } from 'react';
import Zoom from 'react-reveal/Zoom';
import { addToCart } from '../actions/cartActions';
import {connect} from 'react-redux';

class ProductDetail extends Component {
  render() {
    const {product} = this.props.location;
    if(!product){
      window.location.assign("/");
    }
    return (
      <div>
        <Zoom>
          <div className="product-detail-modal">
            <div className="img">
              <img src={"../../"+product.image} alt={product.title}></img>
            </div>
            <div className="detail">
              <h2>Product detail</h2>
              <h4>{product.title}</h4>
              <p>{product.description}</p>
              <h4>${product.price}</h4>
              <button onClick={this.props.addToCart.bind(this, product)}>
                AddToCart
                    </button>
            </div>
          </div>
        </Zoom>

      </div>
    )
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addToCart: (product) => {
      dispatch(addToCart(product))
    }
  }
}
export default connect(null, mapDispatchToProps)(ProductDetail);