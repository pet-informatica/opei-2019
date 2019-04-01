import React, { Component } from 'react';
import Title from '../../../components/Title/Title';
import { Card } from 'semantic-ui-react'
import './Calendar.css'

export default class Calendar extends Component {
  render() {
   
    return (
      <div className="Calendar">
          <div className = "About-image"></div>
          <div className="About-content">
            <Title name="Calendar" />
            <div className="Calendar-dates">
            <Card.Group>
                <Card fluid color='blue' header='Inscrições' meta='09/04/19 a 15/08/19' />
                <Card fluid color='green' header='Prova' meta='05/10/19' description='Modalidade A: 9:00 às 12:00
                \nModalidade B: 9:00 às 12:00
                \nModalidade C: 8:00 às 12:00' />
                <Card fluid color='yellow' header='Contestamento de Questões' meta='06/10/19 a 15/10/19' />
                <Card fluid color='red' header='Premiação' meta='30/11/19' />
            </Card.Group>
            </div>
          </div>
      </div>
    )
  }
}