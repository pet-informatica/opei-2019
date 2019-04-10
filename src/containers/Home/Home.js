import React, { Component } from 'react'
import Landing from './Landing/Landing'
import About from './About/About'
import Calendar from './Calendar/Calendar'
import Sponsors from './Sponsors/Sponsors'
import News from './News/News'
import './Home.css'

export default class Home extends Component {
  render () {
    return (
      <div className="Home">
        <Landing/>
        <News/>
        <About/>
        <Calendar/>
        <Sponsors/>
      </div>
    )
  }
}
