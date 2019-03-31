import React, { Component } from 'react';
import Landing from './Landing/Landing'
import About from './About/About'
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