import React, {Component} from 'react';
import {Grid, Icon, Header, Card, Responsive} from 'semantic-ui-react';
import './History.css';

export default class History extends Component{
    render(){
        return(
            <div className="History-wrapper">
                <div className="History">
                    <Grid padded>
					    <Grid.Row>
						    <Grid.Column width={1}/>
						    <Grid.Column width={14}>
                                <div className="History-title">
                                    <Header as='h2'>Histórico</Header>
                                </div>
						    </Grid.Column>
						    <Grid.Column width={1}/>
					    </Grid.Row>
				    </Grid>
                    
                    <div className="History-cards-wrapper">
						<Responsive minWidth='992'>
							<Grid columns={5} divided='vertically'>
								<Grid.Row >
									<Grid.Column textAlign='center' className='history-items' >
										<Icon name="flag checkered" size="huge" flipped='horizontally'></Icon>
									</Grid.Column>
									<Grid.Column/>
									<Grid.Column textAlign='center'>
										<Card color='green' header='2016' meta='21 escolas' description='224 alunos'/>
									</Grid.Column>
									<Grid.Column/>
									<Grid.Column textAlign='center'>
										<Card color='red' header='2018' meta='35 escolas' description='648 alunos'/>
									</Grid.Column>
								</Grid.Row>
								<Grid.Row >
									<Grid.Column/>
									<Grid.Column textAlign='center'>
										<Card color='blue' header='2015' meta='11 escolas' description='75 alunos'/>
									</Grid.Column>
									<Grid.Column/>
									<Grid.Column textAlign='center'>
										<Card color='yellow' header='2017' meta='22 escolas' description='516 alunos'/>								</Grid.Column>
									<Grid.Column/>
								</Grid.Row>
							</Grid>
						</Responsive>
						<Responsive maxWidth='991'>
						<Grid columns={1} divided='vertically'>
								<Grid.Row>
									<Grid.Column textAlign='center'>
										<Icon name="flag checkered" size="huge" flipped='horizontally'></Icon>
									</Grid.Column>
								</Grid.Row>
								<Grid.Row>
									<Grid.Column textAlign='center'>
										<Card color='blue' header='2015' meta='11 escolas' description='75 alunos'/>
									</Grid.Column>
								</Grid.Row>
								<Grid.Row>
									<Grid.Column textAlign='center'>
										<Card color='green' header='2016' meta='21 escolas' description='224 alunos'/>
									</Grid.Column>
								</Grid.Row>
								<Grid.Row>
									<Grid.Column textAlign='center'>
										<Card color='yellow' header='2017' meta='22 escolas' description='516 alunos'/>								</Grid.Column>
									<Grid.Column/>
								</Grid.Row>
								<Grid.Row>
									<Grid.Column textAlign='center'>
										<Card color='red' header='2018' meta='35 escolas' description='648 alunos'/>
									</Grid.Column>
								</Grid.Row>
							</Grid>
						</Responsive>
                    </div>
                </div>
            </div>
        );
    }
}