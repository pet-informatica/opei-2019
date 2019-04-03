import React, { Component } from 'react';
import Title from '../../../components/Title/Title';
import { Image, Grid } from 'semantic-ui-react';
import logo from '../../../assets/logo.svg';

export default class Sponsers extends Component {
    render() {
        {/*number os columns may change and size of images too*/}
        return (
            <div className="Home">
                <Title name= "Realização"/>
                <Grid stackable columns={1} id="Sponsers-Realizacao">
                    <Grid.Column>
                        <Image src={logo} size='medium'/>
                    </Grid.Column>
                </Grid>
                <Title name= "Apoio"/>
                <Grid stackable columns={3} id="Sponsers-Apoio">
                        <Grid.Column>
                            <Image src={logo} size='small'/>
                        </Grid.Column>
                        <Grid.Column>
                            <Image src={logo} size='small'/>
                        </Grid.Column>
                        <Grid.Column>
                            <Image src={logo} size='small'/>
                        </Grid.Column>
                </Grid>
                <Title name= "Patrocinadores"/>
                <Grid stackable columns={4} id="Sponsers-Patrocinio">
                        <Grid.Column>
                            <Image src={logo} size='small'/>
                        </Grid.Column>
                        <Grid.Column>
                            <Image src={logo} size='small'/>
                        </Grid.Column>
                        <Grid.Column>
                            <Image src={logo} size='small'/>
                        </Grid.Column>
                        <Grid.Column>
                            <Image src={logo} size='small'/>
                        </Grid.Column>
                </Grid>
            </div>    
        );
    }
}