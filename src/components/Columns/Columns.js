import React, { Component } from 'react';

import './Columns.css'

export default class Columns extends Component {
  render() {
    return (
      <div className="Columns">
        <h3> {this.props.title} </h3>
      </div>
    )
  }
}