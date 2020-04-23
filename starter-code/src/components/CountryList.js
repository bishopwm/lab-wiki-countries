import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import countries from '../countries.json';

class CountryList extends Component {

    componentDidMount(){ //window.onload happens once when the components first mounts 
        console.log(this)
    }    

    showCountries = () => {
        let links = countries.map((eachCountry, i) => { //Loop thru countries.json and create dynamic links 
            return <li className="list-group-item list-group-item-action" key={i}><Link to={`/country/${eachCountry.cca3}`}>{eachCountry.name.common}</Link></li>})
        return <ul className="list-group">{links}</ul>
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-5 country-list" max-width="90vh">
                        {this.showCountries()}
                    </div>
                </div>
            </div>
        );
    }
}

export default CountryList;