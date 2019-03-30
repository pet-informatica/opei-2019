import React, { Component } from 'react';
import Landing from './Landing'
import About from './About'
import './Home.css'

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Landing />
        <About />
      </div>
    )
  }
}