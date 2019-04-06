import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './containers/Home/Home'
import AboutPage from './containers/About/AboutPage';
import { Container } from 'semantic-ui-react';
import Navbar from './components/Navbar/Navbar';

class App extends Component {
  render() {
    return (
      <Container fluid>
      <BrowserRouter>
        <Navbar>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/About' component={AboutPage}/>
          </Switch>
        </Navbar>
      </BrowserRouter>
      </Container>
    )
  }
}

export default App;
