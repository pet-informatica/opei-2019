import React, { Component } from 'react';
import {Responsive, Image, Container, Grid, GridRow, GridColumn, Header} from 'semantic-ui-react';
import './AboutCard.css';

export default class AboutCard extends Component {
  render() {
    return (
          <div className="AboutCard-wrapper"> 
          <Container>
                <Grid fluid stackable columns={2} className="About-items">
                    <GridRow>
                        <GridColumn>
                                <div className="About-content-wrapper">  
                                    <div className="AboutCard-text">
                                        <Header as='h2' dividing>Sobre a OPEI</Header>
                                    </div>

                                    <div className="About-self-text" >
                                        <p style={{fontSize: '16px', marginTop: '10px'}}>
                                            A Olimpíada Pernambucana de Informática (OPEI) é uma competição para os estudantes de Ensinos Fundamental e Médio das instituições públicas e privadas de todo o estado de Pernambuco. Ela possui modalidades de programação práticas, onde os alunos de Ensino Médio podem participar resolvendo questões de raciocínio algorítmico, com problemas similar aos de competições como a <a rel="noopener noreferrer" target="_blank" href="https://icpc.baylor.edu/">ACM/ICPC</a> e a <a rel="noopener noreferrer" target="_blank" href="https://olimpiada.ic.unicamp.br/">Olimpíada Brasileira de Informática (OBI)</a>, assim como modalidades teóricas, onde alunos dos Ensinos Fundamental e Médio sem nenhum conhecimento prévio na área de informática podem resolver desafios de lógica, raciocínio e matemática. A OPEI é uma iniciativa do <a rel="noopener noreferrer" target="_blank" href="https://pet-informatica.github.io/">PET-Informática</a>, e é uma olimpíada completamente organizada por alunos do curso de Ciência da Computação, em conjunto com a Universidade Federal de Pernambuco (UFPE) e empresas parceiras.
                                        </p>
                                    </div>
                                </div>
                        </GridColumn>
                        <GridColumn>
                            <Responsive>
                                <div className="AboutCard-image">
                                    <Image src="https://res.cloudinary.com/dkbuneg9h/image/upload/v1538365229/opei_dream_time_hxbsn6.jpg" size="large" rounded/>
                                </div>
                            </Responsive>
                        </GridColumn>
                    </GridRow>
                </Grid>
              
            </Container>
            </div>
    )
  }
}
