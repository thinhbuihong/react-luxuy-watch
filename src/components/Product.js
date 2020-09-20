import React, { Component } from 'react'
import {connect} from 'react-redux';
import { addToCart } from '../actions/cartActions';

class Product extends Component {
  render() {
    const {product} = this.props;
    return (
      <div className="product">
        <div className="product-img"><img src={product.image} alt={product.title} /></div>
        <div className="product-detail">
          <h4>{product.title}</h4>
          <span>EXPLORE NOW</span>
          <div>
            <i class="fa fa-shopping-cart"></i>
            <span className="price">${product.price}</span>
            <button onClick={this.props.addToCart.bind(this, product)}>Add To Cart</button>
          </div>
        </div>
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