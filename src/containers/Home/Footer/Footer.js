import React, { Component } from 'react';
import {Grid} from 'semantic-ui-react';
import Columns from '../../../components/Columns/Columns'


import './Footer.css'


export default class Footer extends Component {
  render() {
    const links_opei = [
      {"name": "Home", "route": "/"},
      {"name": "Sobre", "route": "/About"},
      {"name": "Contato", "route": "/Contact"}
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
       <Grid className="Grid-1" stackable>
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
            <div className="Fotter-top-right">
              <div className="Footer-contato">
                <Columns title="Fale Conosco" data={links_opei} />
              </div>
            </div>
          </Grid.Column>
        </Grid.Row>
       </Grid>
        

        <Grid  stackable>
          <Grid.Row  columns={3}>
            <Grid.Column> 
              <div className="Footer-pet-logo">
                  coisas
              </div> 
            </Grid.Column>

            <Grid.Column>
                <div className="Footer-pet-rights">
                coisas
                </div> 
            </Grid.Column>

            <Grid.Column> 
              <div className="Footer-pet-social">
                coisas
              </div> 
            </Grid.Column>
          </Grid.Row>
        </Grid>
    
      </div>
    )
  }
}