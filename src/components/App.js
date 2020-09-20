import React, { Component } from 'react'
import Banner from './Banner'
import Menu from './Menu'
import Recommend from './Recommend'
import Top from './Top'

export default class App extends Component {
  render() {
    return (
      <div>
        <Top></Top>
        <Menu></Menu>
        <Banner></Banner>
        <Recommend></Recommend>
      </div>
    )
  }
}
