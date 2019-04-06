import React, { Component } from 'react';
import Footer from './../../components/Footer/Footer'
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
          <FAQ />
          <Footer />
        </div>
    )
  }
}