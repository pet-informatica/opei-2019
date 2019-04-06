import React, { Component } from 'react';
import Landing from './Landing/Landing'
import About from './About/About'
import Footer from './../../components/Footer/Footer'
import Calendar from './Calendar/Calendar'
import Navbar from './../../components/Navbar/Navbar'
import Sponsors from './Sponsors/Sponsors'
import News from './News/News'
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
          <Landing/>
          <News/>
          <About isMobile={this.state.mobile}/>
          <Calendar/>
          
          <Sponsors/>
          <Footer/>
          </Navbar>
        </div>
    )
  }
}