import React, { Component } from 'react';
import Title from '../../../components/Title/Title';
import {Responsive, Segment, Embed, Container, Grid, GridRow, GridColumn} from 'semantic-ui-react';
 import './Purpose.css'

export default class Purpose extends Component {
  render() {
    return (
            <div className="Purpose-wrapper"> 
                <Container>
                    <Grid fluid stackable columns={2}>
                        <GridRow stretched>
                            <GridColumn>
                                <Responsive  basic minWidth={992}>
                                    <div className="Purpose-video">
                                        <Embed id="mHW1Hsqlp6A" source='youtube' placeholder="https://res.cloudinary.com/dkbuneg9h/image/upload/v1511325108/Ruchi-facebook-first-female-enginer_min_r2pssr.jpg"/>
                                    </div>
                                </Responsive>
                            </GridColumn>
                            <GridColumn>
                                    <div className="Purpose-content-wrapper">  
                                    <div className="Purpose-title">
                                        <Title name="Objetivo"/>
                                    </div>
                                        <div className="Purpose-self-text" >
                                            <p style={{fontSize: '16px'}}>
                                                A OPEI procura despertar nos alunos o interesse pela computação, imprescindível na formação básica dos estudantes atualmente, através de uma atividade que envolve desafio, engenhosidade e uma saudável dose de competição. Ela também permite que os competidores possam conhecer de forma mais abrangente a carreira na área, procurando engajar os participantes em ações após a competição, como visitas guiadas no <a rel="noopener noreferrer" target="_blank" href="https://www.ufpe.br/cin">Centro de Informática (CIn)</a> e oferecimento de <a rel="noopener noreferrer" target="_blank" href="https://pet-informatica.github.io/programa-de-ferias/">cursos de computação</a>. Por fim, a olimpíada almeja preparar melhor e despertar o interesse de alunos pernambucanos para as competições nacionais e internacionais de programação, como a OBI, e a ACM/ICPC.
                                            </p>
                                        </div>
                                        <br/>
                                    </div>
                            </GridColumn>
                        </GridRow>
                    </Grid>
                </Container>
            </div>
    )
  }
}
