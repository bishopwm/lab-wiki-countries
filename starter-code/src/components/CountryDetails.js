import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import countries from '../countries.json';

class CountryDetails extends Component {

    componentDidMount() { 
        console.log(this.props.match.params.id) // --> Print Country Code
    } 

    render() {
        let countryId = this.props.match.params.id;
        let theCountry = countries.find((country)=>country.cca3===countryId);
        return (
            <div>
                <p>
                <strong>Country Details</strong><br></br>
                ID: {countryId}<br></br>
                Official name: {theCountry.name.official}
                </p>
            </div>
        );
    }
}

export default CountryDetails;