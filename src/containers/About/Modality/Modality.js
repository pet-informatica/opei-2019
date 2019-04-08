import React, {Component} from 'react';
import { Grid, Card, GridColumn, GridRow, Header, Responsive, Image } from 'semantic-ui-react';

import './Modality.css'

export default class Modality extends Component{
	render(){
		return(
            <div className="Modality-wrapper">
             <Responsive  basic minWidth={992}>
                <div className="About-image">
                <Image src="https://res.cloudinary.com/dkbuneg9h/image/upload/v1554503786/try4_nk54bf.png" size="medium"/>
                </div>
              </Responsive>
                    <div className="Modality">
                    <div className="Modality-title">
                        <Header as='h2'>Modalidades</Header>
                    </div>
                    <div className="Modality-cards-wrapper">
                        <Grid centered padded stackable columns={2} >
                            <Grid.Row stretched>
                                <Grid.Column width={7}>
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
                                <Grid.Column width={7}>
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
                </div>
            </div>
		);
	}
}