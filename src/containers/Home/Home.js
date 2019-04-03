import React, { Component } from 'react';
import Landing from './Landing/Landing'
import About from './About/About'
import Footer from './Footer/Footer'
import Calendar from './Calendar/Calendar'
import Navbar from './../../components/Navbar/Navbar'
import './Home.css'

export default class Home extends Component {

  state = {
    mobile: window.innerWidth < 500
  }

  componentDidMount() {
    window.addEventListener('resize', () => {
      this.setState({ mobile: window.innerWidth < 500 });
    });
  }

  render() {
    return (
        <div className="Home">
          <Navbar>
          <Landing />
          <About isMobile={this.state.mobile}/>
          <Calendar />
          <Footer />
          </Navbar>
        </div>
    )
  }
}