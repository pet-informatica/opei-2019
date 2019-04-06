import React, { Component } from 'react';
import Title from '../../../components/Title/Title';
import { Image, Grid, GridColumn } from 'semantic-ui-react';

export default class Sponsors extends Component {
    render() {
        
        return (
            <div className="Sponsors">
                <div className="Sponsors-Cards">
                    <Grid stackable columns={7}>
                        <Grid.Row stretched>
                            <Grid.Column></Grid.Column>
                            <Grid.Column>
                                <Image src="https://res.cloudinary.com/dkbuneg9h/image/upload/v1554506920/Clypeasteroida_k7h4kl.svg" size='small'/>
                            </Grid.Column>
                            <Grid.Column></Grid.Column>
                            <Grid.Column>
                                <Image src="https://res.cloudinary.com/dkbuneg9h/image/upload/v1554506680/Logo_CIn-UFPE_rj1cnd.svg" size='small'/>
                            </Grid.Column>
                            <Grid.Column></Grid.Column>
                            <Grid.Column>
                                <Image src="https://res.cloudinary.com/dkbuneg9h/image/upload/v1554506899/LogoUFPE-Versoes_3_fq99zn.svg" size='small'/>
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