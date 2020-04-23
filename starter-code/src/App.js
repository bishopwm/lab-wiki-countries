import React, { Component } from 'react';
import './App.css';
import countries from './countries.json';
import { Switch, Route } from 'react-router-dom';
import CountryList from './components/CountryList.js';
import { Link } from 'react-router-dom';
import NavBar from './components/NavBar.js';
import 'bootstrap/dist/css/bootstrap.css';
import CountryDetails from './components/CountryDetails';

class App extends Component {
    render () {
      return (
      <div className="App">
        <h1>WikiCountries!</h1>
        < NavBar />
        <Switch>
          <Route exact path='/' component={(props) => <CountryList {...props} />}></Route>
        </Switch>
      </div>
      );
  
  }
}

export default App;