import React, { Component } from 'react'
import { Responsive, Embed, Container, Grid, GridRow, GridColumn, Header } from 'semantic-ui-react'
import './Purpose.css'

export default class Purpose extends Component {
  render () {
    return (
      <div className="Purpose-wrapper">
        <Container>
          <Grid fluid stackable columns={2}>
            <GridRow stretched>
              <GridColumn>
                <Responsive basic minWidth={768}>
                  <div className="Purpose-video">
                    <Embed id="mHW1Hsqlp6A" source='youtube' placeholder="https://res.cloudinary.com/dkbuneg9h/image/upload/v1511325108/Ruchi-facebook-first-female-enginer_min_r2pssr.jpg"/>
                  </div>
                </Responsive>
              </GridColumn>
              <GridColumn>
                <div className="Purpose-content-wrapper">
                  <div className="Purpose-title">
                    <Header as='h2'>Objetivo</Header>
                  </div>
                  <div className="Purpose-self-text" >
                    <p style={{ fontSize: '16px', marginTop: '10px' }}>
                                            O principal objetivo da OPEI é despertar nos alunos o interesse pela matemática e computação, imprescindível
        na formação básica dos estudantes. Ela também permite que os competidores possam conhecer de forma mais abrangente a carreira e ramos na área,
        procurando engajar os participantes em ações do próprio PET-Informática após a competição. Por fim, a Olimpíada almeja preparar melhor e despertar o interesse de alunos
        pernambucanos para as competições nacionais e internacionais de programação, como a OBI e a ACM/ICPC.
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
