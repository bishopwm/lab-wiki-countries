import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import countries from '../countries.json';

class CountryDetails extends Component {

    componentDidMount(){ //window.onload happens once when the components first mounts 
        console.log(this)
    }    

    showCountries = () => {
        let links = countries.map((eachCountry, i) => { //Loop thru countries.json and create dynamic links 
            return <li key={i}><Link to={`/country/${eachCountry.cca3}`}>{eachCountry.name.common}</Link></li>})
        return links
    }

    render() {
        return (
            <div>
                Hello, I'm Country Details!
                {this.showCountries()}
            </div>
        );
    }
}

export default CountryDetails;