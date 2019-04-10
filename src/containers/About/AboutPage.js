import React, { Component } from 'react'
import FAQ from './FAQ/FAQ'
import Modality from './Modality/Modality'
import AboutCard from './About/AboutCard'
import Purpose from './Purpose/Purpose'
import History from './History/History'
import './AboutPage.css'

export default class AboutPage extends Component {
  state = {
    mobile: window.innerWidth < 500
  }

  componentDidMount () {
    window.addEventListener('resize', () => {
      this.setState({ mobile: window.innerWidth < 500 })
    })
  }

  render () {
    return (
      <div className="AboutPage">
        <div className="index-anchor" id="sobre">
          <AboutCard />
        </div>
        <div className="index-anchor" id="objetivo">
          <Purpose />
        </div>
        <div className="index-anchor" id="historico">
          <History />
        </div>
        <div className="index-anchor" id="modalidades">
          <Modality />
        </div>
        <div className="index-anchor" id="perguntas-frequentes">
          <FAQ />
        </div>
      </div>
    )
  }
}
