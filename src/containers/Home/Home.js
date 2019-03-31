import React, { Component } from 'react';
import Landing from './Landing/Landing'
import About from './About/About'
import Footer from './Footer/Footer'
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
        <Landing />
        <About isMobile={this.state.mobile}/>
        <Footer />
      </div>
    )
  }
}