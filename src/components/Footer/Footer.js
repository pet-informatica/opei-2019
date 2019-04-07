import React, { Component } from 'react';
import {Grid, Icon} from 'semantic-ui-react';
import Columns from './../Columns/Columns';
import './Footer.css';

export default class Footer extends Component {
  render() {
    const links_opei = [
      {"name": "Home", "route": "/"},
      {"name": "Sobre", "route": "/About"},
      
    ]

    const links_provas_antigas = [
      {"name": "2015", "route": "/"},
      {"name": "2016", "route": "/"},
      {"name": "2017", "route": "/"},
      {"name": "2018", "route": "/"}
    ]

    const links_informacoes = [
      {"name": "Perguntas Frequentes", "route": "/"},
      {"name": "Divulgue", "route": "/"},
      {"name": "Regulamento", "route": "/"}
    ]

    return (
    <div className="Footer">
    <div className="Footer-top">
      <Grid className="Footer-Grid-1" stackable>
        <Grid.Row className="Grid-row1" columns={2}>
          <Grid.Column>
            <Grid stackable>
              
                <Grid.Row columns={3}>
                  <Grid.Column>
                    <div className="Footer-OPEI">
                      <Columns title="OPEI" data={links_opei} />
                    </div>
                  </Grid.Column>
                  <Grid.Column>
                    <div className="Footer-provas">
                      <Columns title="Provas Antigas" data={links_provas_antigas}/>
                    </div>
                  </Grid.Column>
                  <Grid.Column>
                    <div className="Footer-info">
                      <Columns title="Informações" data={links_informacoes}/>
                    </div>
                  </Grid.Column>
                </Grid.Row>
            </Grid>
          </Grid.Column>
          <Grid.Column>
            <div className="Footer-contact">
              
                <h3>PET-Informática</h3>
                <p>Av. Jorn. Aníbal Fernandes - Cidade Universitária, Recife.</p>
                <p> opei@cin.ufpe.br </p>
                <p>(81) 2126-4056</p>
             
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      </div>
        <Grid stackable>
            <Grid.Row>
              <Grid.Column width={5}>
                  <div className="Footer-pet-rights">
                    <p>© 2019 OPEI - Todos os direitos reservados</p>
                  </div> 
              </Grid.Column>
              <Grid.Column  width={5}> 
                <div className="Footer-pet-logo">
                
                </div>
              </Grid.Column>


              <Grid.Column width={5}> 
                <div className="Footer-pet-social">
                  <Icon name="instagram" size="large" inverted></Icon>
                  <Icon name="facebook" size="large" inverted></Icon>
                  <Icon name="twitter" size="large" inverted></Icon>
                </div> 
              </Grid.Column>
         
            </Grid.Row>
        </Grid>
    
    </div>
    )
  }
}