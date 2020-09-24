import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addToCart } from '../actions/cartActions';
import { Link } from 'react-router-dom';

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    }
  }

  to_slug = (str) => {
    str = str.toLowerCase();

    str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
    str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
    str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
    str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
    str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
    str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
    str = str.replace(/(đ)/g, 'd');

    str = str.replace(/([^0-9a-z-\s])/g, '');

    str = str.replace(/(\s+)/g, '-');

    str = str.replace(/^-+/g, '');

    str = str.replace(/-+$/g, '');

    return str;
  }
  render() {
    const { product, url } = this.props;
    // console.log(this.to_slug(product.title))
    return (
      <div className="product">
        <Link to={
          {
            pathname: url + 'products/' + this.to_slug(product.title),
            product,
          }} exact >
          <div className="product-img" >
            <img src={product.image} alt={product.title} />
          </div>
        </Link>
        <div className="product-detail">
          <h4>{product.title}</h4>
          <span>EXPLORE NOW</span>
          <div>
            <i className="fa fa-shopping-cart"></i>
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

export default connect(null, mapDispatchToProps)(Product);