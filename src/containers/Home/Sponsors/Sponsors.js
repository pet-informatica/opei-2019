import React, { Component } from 'react';
import { Image, Grid } from 'semantic-ui-react';

export default class Sponsors extends Component {
    render() {
        
        return (
            <div className="Sponsors">
                <div className="Sponsors-Cards">
                    <Grid stackable columns={7}>
                        <Grid.Row>
                            <Grid.Column></Grid.Column>
                            <Grid.Column>
                                <Image src="https://res.cloudinary.com/dkbuneg9h/image/upload/v1554506920/Clypeasteroida_k7h4kl.svg" size='small'/>
                            </Grid.Column>
                            <Grid.Column></Grid.Column>
                            <Grid.Column>
                                <Image src="https://res.cloudinary.com/dkbuneg9h/image/upload/v1554778916/Layer_1_100x-8_ifbmmo.png" size='small'/>
                            </Grid.Column>
                            <Grid.Column></Grid.Column>
                            <Grid.Column>
                                <Image src="https://res.cloudinary.com/dkbuneg9h/image/upload/v1554645029/Layer_1_100x-8_ekpedk.png" size='small'/>
                            {/* alterar imagem pra ajeitar altura top e bottom */}
                            </Grid.Column>
                            <Grid.Column></Grid.Column>
                        </Grid.Row>
                        <br/>
                    </Grid>
                </div>    
            </div>    
        );
    }
}