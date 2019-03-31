import React, { Component } from 'react';

import './Title.css'

export default class Title extends Component {
  render() {
    return (
      <div className="Title">
        <h1> {this.props.name}</h1>
      </div>
    )
  }
}