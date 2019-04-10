import React, { Component } from 'react'
import { Card, Grid, Header } from 'semantic-ui-react'
import './Calendar.css'

export default class Calendar extends Component {
  render () {
    return (
      <div className="Calendar">
        <div className="Calendar-title">
          <Header as='h1'>Calendário</Header>
        </div>
        <Grid stackable columns={4} id="Calendar-cards">
          <Grid.Row stretched>
            <Grid.Column>
              <Card fluid color='blue' header='Inscrições' meta='03 de Junho a 23 de Setembro' />
            </Grid.Column>
            <Grid.Column>
              <Card fluid color='green'>
                <Card.Content>
                  <Card.Header>Prova</Card.Header>
                  <Card.Meta>5 de Outubro</Card.Meta>
                  <Card.Description>Prova teórica: 9:00 às 12:00</Card.Description>
                  <Card.Description>Prova prática: 8:00 às 12:00</Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column>
              <Card fluid color='yellow' header='Contestamento de Questões' meta='1 semana após lançamento do gabarito' />
            </Grid.Column>
            <Grid.Column>
              <Card fluid color='red' header='Cerimônia de Premiação' meta='A ser divulgada' />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}
