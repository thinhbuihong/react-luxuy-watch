import React, { Component } from 'react'
import Banner from './Banner'
import Footer from './Footer'
import Logo from './Logo'
import Products from './Products'
import Recommend from './Recommend'
import Top from './Top'
import store from '../store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './NotFound';
import Contact from './Contact';
import About from './About';
import Cart from './Cart';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Top></Top>
            <Logo></Logo>
            <Banner></Banner>
            <Recommend></Recommend>

            <Switch>
              <Route path="/" exact component={Products}></Route>
              <Route path="/about" exact component={About}></Route>
              <Route path="/contact" exact component={Contact}></Route>
              <Route path="/cart" exact component={Cart}></Route>
              <Route component={NotFound}></Route>
            </Switch>

            <Footer></Footer>
          </div>
        </Router>
      </Provider>
    )
  }
}
