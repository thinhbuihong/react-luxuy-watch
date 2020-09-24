import React, { Component } from 'react'
import Product from './Product'
import { fetchProducts } from '../actions/productsActions';
import { connect } from 'react-redux';
import Filter from './Filter';
import Fade from 'react-reveal/Fade';

class Products extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }
  render() {
    const { products } = this.props;
    const {url} = this.props.match;
    return (
      <div>
        <Filter></Filter>
        <div className="products" id="products">
          {
            products ? (
              products.map(product => (
                <Fade bottom key={product._id}>
                  <Product product={product} url={url}></Product>
                </Fade>
              ))
            ) : (<div>Loading ...</div>)
          }
        </div>
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchProducts: () => {
      dispatch(fetchProducts());
    },
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    products: state.products
  }
}
export default connect(mapStateToProps, mapDispatchToProps,)(Products);