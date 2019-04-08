import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Home from './containers/Home/Home'
import AboutPage from './containers/About/AboutPage';
import Navbar from './components/Navbar/Navbar';

class App extends Component {
  render() {
    return (
      <div>
      <BrowserRouter>
        <Navbar>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/sobre' component={AboutPage}/>
            <Route render={() => <Redirect to='/'/>}/>
          </Switch>
        </Navbar>
      </BrowserRouter>
      </div>
    )
  }
}

export default App;
