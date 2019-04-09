import React, { Component } from 'react';
import {Responsive, Segment, Image} from 'semantic-ui-react';
import './Landing.css'


export default class Landing extends Component {
  render() {
   
    return (
      <div className="Landing-wrapper"> 
              <Responsive as={Segment} basic >
                <div className="Landing-content-wrapper">  
                  <div className="Landing-text">
                    <Segment basic className="Landing-segment">
                    <div className="Landing-self-text">
                      <p>
                          <div className="Landing-title">Gosta de desafios?</div>
                          Então a OPEI é para você! Venha desenvolver o seu talento na Olimpíada Pernambucana de Informática.
                      </p>
                    </div>
                    </Segment>
                  </div>  
                </div>
              </Responsive>
              
              <Responsive  basic minWidth={992}>
                <div className="Landing-image">
                  <Image src="https://res.cloudinary.com/dkbuneg9h/image/upload/v1554428363/try4_j0so6j.png" size="medium"/>
                </div>
              </Responsive>
            </div>
    )
  }
}
