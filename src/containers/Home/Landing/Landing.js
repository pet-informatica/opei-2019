import React, { Component } from 'react';
import './Landing.css'

export default class Landing extends Component {

  render() {
    const isMobile = this.props.isMobile;

    if (isMobile) return (<div>We're on mobile!!</div>)
    else return (<div>We're on desktop!!</div>)

  }
}