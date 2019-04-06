import React, { Component } from 'react';
import Title from '../../../components/Title/Title';
import { Card, Grid } from 'semantic-ui-react'
import './Calendar.css'

export default class Calendar extends Component {
  render() {
   
    return (
      <div className="Calendar">
      <div className="Calendar-title">
            <Title name="Calendário"/>
      </div>
            <Grid stackable columns={4} id="Calendar-cards">
                <Grid.Row stretched>
                        <Grid.Column>
                            <Card fluid color='blue' header='Inscrições' meta='{data inicio} a {data fim}' />
                        </Grid.Column>
                        <Grid.Column>
                            <Card fluid color='green'>
                                    <Card.Content>
                                        <Card.Header>Prova</Card.Header>
                                        <Card.Meta>data</Card.Meta>
                                        <Card.Description>Prova teórica: 9:00 às 12:00</Card.Description>
                                        <Card.Description>Prova prática: 8:00 às 12:00</Card.Description>
                                    </Card.Content>
                            </Card>
                        </Grid.Column>
                        <Grid.Column>
                            <Card fluid color='yellow' header='Contestamento de Questões' meta='{data inicio} a {data fim}' />
                        </Grid.Column>
                        <Grid.Column>
                            <Card fluid color='red' header='Cerimônia de Premiação' meta='{data}' />
                        </Grid.Column>
                </Grid.Row>
            </Grid>
      </div>
    )
  }
}