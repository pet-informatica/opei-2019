import React, { Component } from 'react';
import Columns from '../../../components/Columns/Columns'

import './Footer.css'


export default class Footer extends Component {
  render() {
    return (
      <div className="Footer">
      <div className="Footer-content">
        <Columns title="OPEI"/>
        <Columns title="Provas Anteriores"/>
        <Columns title="Informações"/>
      </div>
      <div className="Footer-contact">
          <Columns title="Fale Conosco" />
      </div>
      </div>
    )
  }
}