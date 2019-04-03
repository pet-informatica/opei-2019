import React, { Component } from 'react';
import Title from '../../../components/Title/Title';
import {Responsive, Segment, Image} from 'semantic-ui-react';
import { HashLink as Link } from 'react-router-hash-link';
import './About.css'

export default class About extends Component {
  render() {
    return (
          <div className="About-wrapper"> 
              <Responsive as={Segment} basic minWidth={992}>
                <div className="About-image">
                      <Image src='https://res.cloudinary.com/dkbuneg9h/image/upload/v1554168587/Clypeasteroida_ahtawr.svg' size="massive">
                      </Image>
                </div>
              </Responsive>
              <Responsive as={Segment} basic >
                <div className="About-content-wrapper">    
                      <Title name="Sobre"/>
                      <Segment basic className="About-segment" className="Segment-teste">
                            A Olimpíada Pernambucana de Informática (OPEI) é uma competição para os estudantes de Ensinos Fundamental 
                            e Médio das instituições públicas e privadas de todo o estado de Pernambuco. 
                            <br/>
                            <br/>
                            <Link to="/About#perguntas-frequentes">perguntas frequentes</Link>
                            <a href="/About">modalidades e mais</a>
                      </Segment>
                </div>
              </Responsive>
            </div>
    )
  }
}
