import React, { Component } from 'react'
import Product from './Product'
import { fetchProducts } from '../actions/productsActions';
import { connect } from 'react-redux';
import Filter from './Filter';

class Products extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    const { products } = this.props;
    return (
      <div>
        <Filter>
        </Filter>
        <div className="products" id="products">
          {
            products ? (
              products.map(product => (
                <Product product={product} key={product._id}></Product>
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