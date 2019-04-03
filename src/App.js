import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './containers/Home/Home'
import AboutPage from './containers/About/AboutPage';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/About' component={AboutPage}/>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
