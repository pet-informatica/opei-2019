import React, { Component } from 'react';
import Title from '../../../components/Title/Title';
import { HashLink as Link } from 'react-router-hash-link';
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
               
                <Link to="/About#perguntas-frequentes">perguntas frequentes</Link>
                <a href="/About">modalidades e mais</a>
            </div>
          </div>
      </div>
    )
  }
}