import React, { Component } from 'react'
import List from '../List/List.js'

import './Columns.css'

export default class Columns extends Component {
  render () {
    const { data } = this.props

    return (
      <div className="Columns">
        <div className="Columns-title">
          <h3> {this.props.title} </h3>
        </div>
        <div className="Columns-list">
          <List items={data}/>
        </div>
      </div>
    )
  }
}
