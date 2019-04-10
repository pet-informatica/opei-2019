import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import './App.css'
import Home from './containers/Home/Home'
import AboutPage from './containers/About/AboutPage'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

class App extends Component {
  render () {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Navbar/>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/sobre' component={AboutPage}/>
              <Route render={() => <Redirect to='/'/>}/>
            </Switch>
            <Footer/>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
