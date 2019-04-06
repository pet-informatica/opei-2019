import React, { Component } from 'react';
import Footer from './../../components/Footer/Footer'
import FAQ from './FAQ/FAQ'
import Modality from './Modality/Modality'
import AboutCard from './About/AboutCard';
import Purpose from './Purpose/Purpose';

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
          <AboutCard />
          <Purpose />
          <Modality />
          <FAQ />
          <Footer />
        </div>
    )
  }
}