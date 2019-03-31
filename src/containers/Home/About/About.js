import React, { Component } from 'react';
import Title from '../../../components/Title/Title';
import './About.css'

export default class About extends Component {
  render() {
   
    return (
      <div className="About">
          <div className = "About-image"></div>
          <div className="About-content">
            <Title name="Sobre" />
            <div className="About-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id nunc non dolor malesuada venenatis.
               
                <a href="/About">perguntas frequentes, modalidades e mais</a>
            </div>
          </div>
      </div>
    )
  }
}