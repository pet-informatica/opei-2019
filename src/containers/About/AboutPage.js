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
          <div className="index-anchor" id="sobre">
            <AboutCard />
          </div>
          <div className="index-anchor" id="objetivo">
            <Purpose />
          </div>
          <div className="index-anchor" id="modalidades">
            <Modality />
          </div>
          <div className="index-anchor" id="perguntas-frequentes">
            <FAQ />
          </div>
          <Footer />
        </div>
    )
  }
}