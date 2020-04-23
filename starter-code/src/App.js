import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import CountryList from './components/CountryList.js';
import NavBar from './components/NavBar.js';
import 'bootstrap/dist/css/bootstrap.css';
import CountryDetails from './components/CountryDetails.js';

class App extends Component {
    
    render () {
      return (
      <div className="App">
        <h1>WikiCountries!</h1>
        < NavBar />
        <Switch>
          <Route exact path='/' component={(props) => <CountryList {...props} />}></Route>
          <Route exact path='/country/:id' component={(props) => <CountryDetails {...props} />}></Route>
        </Switch>
      </div>
      );
  
  }
}

export default App;


