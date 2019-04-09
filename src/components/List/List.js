import React, { Component } from 'react';

import './List.css'

export default class List extends Component {
  render() {
    
    const {items} = this.props;

    const nameList = items.map(item => {
      if (item.name === "2015" || item.name === "2016" || item.name === "2017" ||item.name === "2018" || item.name === "Regulamento"){
        return (
          <li> 
              <a target="_blank" rel="noopener noreferrer" href={item.route}> {item.name} </a>
          </li>
        )
      }else{
        return (
          <li> 
              <a href={item.route}> {item.name} </a>
          </li>
        )
      }
    })

    return (
      <div className="Items">
        <ul>{nameList}</ul>
      </div>
    )
  }
}