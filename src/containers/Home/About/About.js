import React, { Component } from 'react';
import {Responsive, Segment, Image, Header} from 'semantic-ui-react';
import { HashLink as Link } from 'react-router-hash-link';
import './About.css'

export default class About extends Component {
  render() {
    return (
          <div className="About-wrapper"> 
              <Responsive  basic minWidth={992}>
                <div className="About-image">
                <Image src="https://res.cloudinary.com/dkbuneg9h/image/upload/v1554503786/try4_nk54bf.png" size="large"/>
                </div>
              </Responsive>
              <Responsive as={Segment} basic >
                <div className="About-content-wrapper">  

                <div className="About-text">
                 
                  <Segment basic className="About-segment">
                  <Header as='h1'>Sobre</Header>
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
            </div>
    )
  }
}
