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
                Hello, I'm Country Details for:<br></br>
                Country ID: {countryId}<br></br>
                Country Official name: {theCountry.name.official}
                </p>
            </div>
        );
    }
}

export default CountryDetails;