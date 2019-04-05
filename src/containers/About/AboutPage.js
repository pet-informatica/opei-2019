import React, { Component } from 'react';
import Footer from './../../components/Footer/Footer'
import Navbar from './../../components/Navbar/Navbar'
import FAQ from './../../components/FAQ/FAQ';

export default class AboutPage extends Component {

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
        <div className="AboutPage">
          <Navbar>
          <FAQ />
          <Footer />
          </Navbar>
        </div>
    )
  }
}