import React, { Component } from 'react'

export default class NotFound extends Component {
  render() {
    return (
      <div className="container not-found">
        <img src={require('../images/404.jpg')} className="img404" alt="404"></img>
      </div>
    )
  }
}
