import React, { Component } from 'react';

import './List.css'

export default class List extends Component {
  render() {
    
    const {items} = this.props;

    const nameList = items.map(item => {
      return (
        <li> 
            <a href={item.route}> {item.name} </a>
        </li>
      )
    })

    return (
      <div className="Items">
        <ul>{nameList}</ul>
      </div>
    )
  }
}