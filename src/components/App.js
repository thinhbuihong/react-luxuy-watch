import React, { Component } from 'react'
import Banner from './Banner'
import Filter from './Filter'
import Footer from './Footer'
import Logo from './Logo'
import Products from './Products'
import Recommend from './Recommend'
import Top from './Top'
import store from '../store';
import {Provider} from 'react-redux';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div>
        <Top></Top>
        <Logo></Logo>
        <Banner></Banner>
        <Recommend></Recommend>
        <Filter></Filter>
        <Products></Products>
        <Footer></Footer>
      </div>

      </Provider>
    )
  }
}
