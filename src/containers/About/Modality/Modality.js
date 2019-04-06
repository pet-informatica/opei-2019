import React, {Component} from 'react';
import Title from './../../../components/Title/Title';
import { Grid, Card, GridColumn, Menu, Container, GridRow } from 'semantic-ui-react';

import './Modality.css'

export default class FAQ extends Component{
	render(){
		return(
            <div className="Modality">
            <div className="Modality-title">
                  <Title name="Modalidades"/>
            </div>
            <Grid  stackable columns={2} centered padded>
                <Grid.Row>
                    <Grid.Column>
                       <Card fluid color="blue">
                            <Card.Content>
                                <Card.Header>Teórica</Card.Header>
                                <Card.Meta>Problemas matemáticos, de raciocínio e lógica de programação</Card.Meta>
                                <Grid stackable columns={2} centered padded>
                                    <GridRow stretched>
                                        <GridColumn>
                                            <Card fluid header="Nível Fundamental" meta="Alunos do 8º e 9º ano do Ensino Fundamental"/>        
                                        </GridColumn>
                                        <GridColumn>
                                            <Card fluid header="Nível Médio" meta="Alunos do Ensino Médio"/>
                                        </GridColumn>
                                    </GridRow>
                                </Grid>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                    <Grid.Column>
                        <Card fluid color="green" >
                            <Card.Content centered>
                                <Card.Header>Prática</Card.Header>
                                <Card.Meta>Problemas de programação</Card.Meta>
                                <Grid stackable columns={2} centered padded>
                                    <GridRow stretched>
                                        <GridColumn>
                                            <Card fluid header="Nível Júnior" meta="Alunos do 8º e 9º ano (Ensino Fundamental) e do Ensino Médio"/>
                                        </GridColumn>
                                        <GridColumn>
                                            <Card fluid header="Nível Sênior" meta="Alunos do 1º ano do Ensino Superior"/>
                                        </GridColumn>
                                    </GridRow>
                                </Grid>    
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
          </div>
		);
	}
}