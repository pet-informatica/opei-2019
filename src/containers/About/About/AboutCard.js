import React, { Component } from 'react';
import {Responsive, Image, Container, Grid, GridRow, GridColumn, Header} from 'semantic-ui-react';
 import './AboutCard.css'

export default class Purpose extends Component {
  render() {
    return (
            <div className="AboutCard-wrapper"> 
                <Container>
                    <Grid fluid stackable columns={2}>
                        <GridRow stretched>
                            <GridColumn>
                                    <div className="AboutCard-content-wrapper">  
                                        <div className="AboutCard-title">
                                            <Header as='h2'>Sobre a OPEI</Header>
                                        </div>
                                        <div className="AboutCard-self-text" >
                                            <p style={{fontSize: '16px', marginTop: '10px'}}>
                                            A Olimpíada Pernambucana de Informática (OPEI) é uma competição para os estudantes de ensinos fundamental, 
        médio e superior das instituições públicas e privadas de todo o estado de Pernambuco.
        Ela surgiu a partir de uma iniciativa do PET-Informática e através de inspirações de outras competições nordestinas realizadas por grupos PET e vem 
        crescendo exponencialmente desde a sua primeira edição, em 2015, que teve apenas 75 alunos inscritos. 
        Na última edição, em 2018, foram registrados 647 alunos inscritos, um aumento superior a 700%. 
        A Olimpíada é completamente organizada por alunos do curso de Ciência da Computação e possui modalidade teórica e prática, onde alunos sem conhecimento
        prévio na área de informática podem resolver desafios de lógica, raciocínio e matemática. 
                                            </p>
                                        </div>
                                        <br/>
                                    </div>
                            </GridColumn>
                            <GridColumn>
                                <div className="AboutCard-image">
                                    <Responsive minWidth={768}>
                                        <Image src="https://res.cloudinary.com/dkbuneg9h/image/upload/v1538365229/opei_dream_time_hxbsn6.jpg" size="large" rounded/>
                                    </Responsive>
                                </div>
                            </GridColumn>
                        </GridRow>
                    </Grid>
                </Container>
            </div>
    )
  }
}
