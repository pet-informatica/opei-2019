import React, { Component } from 'react';
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
        <div className="Footer-top">
            <div className="Footer-content">
              <Columns title="OPEI" data={links_opei} />
              <Columns title="Provas Antigas" data={links_provas_antigas}/>
              <Columns title="Informações" data={links_informacoes}/>
            </div>
            <div className="Footer-contact">
                <Columns title="Fale Conosco" data={links_opei} />
            </div>
          </div>
          <div className="Footer-bottom">
              <div className="Footer-pet-logo"></div>
              <div className="Footer-pet-rights"></div>
              <div className="Footer-pet-social"></div>
          </div>
      </div>
    )
  }
}