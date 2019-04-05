import React, { Component } from 'react';
import Title from '../../../components/Title/Title';
import {Responsive, Segment, Image} from 'semantic-ui-react';
import { HashLink as Link } from 'react-router-hash-link';
import './About.css'

export default class About extends Component {
  render() {
    return (
          <div className="About-wrapper"> 
              <Responsive as={Segment} basic >
                <div className="About-content-wrapper">  

                <div className="About-text">
                  <Title name="Sobre"/>
                  <Segment basic className="About-segment">
                  <div className="About-self-text">
                    <p>
                        A Olimpíada Pernambucana de Informática, OPEI, é uma competição para os estudantes de Ensinos Fundamental, 
                        Médio e Superior das instituições públicas e privadas de todo o estado de Pernambuco. 
                    </p>
                       
                  </div>
                        <br/>
                        <Link to="/About">
                          <p>
                            perguntas frequentes, modalidades e mais
                          </p>
                          </Link>
                  </Segment>
                </div>  
                </div>
              </Responsive>
              
              <Responsive  basic minWidth={992}>
                <div className="About-image">
                <Image src="https://res.cloudinary.com/dkbuneg9h/image/upload/v1554428363/try4_j0so6j.png" size="large"/>
                </div>
              </Responsive>
             
            </div>
    )
  }
}
